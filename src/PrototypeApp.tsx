import { useCallback, useEffect, useRef, useState } from "react";
import { APPLY_WITH_RESUME_PORTFOLIO_DEFAULT, createInitialApplyDraft } from "./applyFormDraft";
import JobApplicationPage from "./JobApplicationPage";
import ResumeGeneratingPage from "./screens/ResumeGeneratingPage";
import ResumeEditorPage from "./screens/ResumeEditorPage";
import ArtboardPlaceholder from "./prototype/ArtboardPlaceholder";
import { PAGE_SCREENS, REACT_SCREENS, type ScreenId } from "./prototype/registry";

function parseScreenFromHash(): ScreenId {
  const raw = window.location.hash.replace(/^#/, "");
  const found = PAGE_SCREENS.find((s) => s.id === raw);
  return found ? found.id : "apply";
}

/** Скрыть боковое меню прототипа — для ссылки менеджеру: `?embed=1` в URL */
function readEmbedNoSidebar(): boolean {
  if (typeof window === "undefined") return false;
  const q = new URLSearchParams(window.location.search);
  return q.has("embed") || q.get("share") === "1";
}

export default function PrototypeApp() {
  const [embedNoSidebar] = useState(() => readEmbedNoSidebar());
  const [active, setActive] = useState<ScreenId>(() =>
    typeof window !== "undefined" ? parseScreenFromHash() : "apply",
  );
  /** Форма отклика — общая для `#apply` и `#apply-with-resume`, сохраняется через генерацию резюме */
  const [applyDraft, setApplyDraft] = useState(() => createInitialApplyDraft());

  useEffect(() => {
    const onHash = () => setActive(parseScreenFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const generateAfterTeamAiRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearGenerateAfterTeamAiTimer = () => {
    if (generateAfterTeamAiRef.current !== null) {
      window.clearTimeout(generateAfterTeamAiRef.current);
      generateAfterTeamAiRef.current = null;
    }
  };

  const selectScreen = useCallback((id: ScreenId, opts?: { fromResumeEditorSave?: boolean }) => {
    if (id === "apply-with-resume" && !opts?.fromResumeEditorSave) {
      setApplyDraft((d) => ({
        ...d,
        portfolioLink: d.portfolioLink.trim() ? d.portfolioLink : APPLY_WITH_RESUME_PORTFOLIO_DEFAULT,
        resumeFileRowVisible: true,
      }));
    }
    setActive(id);
    window.location.hash = id;
  }, []);

  const handleSaveEditorAndGoToApplyWithResume = useCallback(() => {
    setApplyDraft((d) => ({ ...d, resumeFileRowVisible: true }));
    selectScreen("apply-with-resume", { fromResumeEditorSave: true });
  }, [selectScreen]);

  const handleDiscardEditorAndGoToApply = useCallback(() => {
    setApplyDraft((d) => ({ ...d, resumeFileRowVisible: false }));
    selectScreen("apply");
  }, [selectScreen]);

  const startGenerateWithTeamAIFlow = () => {
    clearGenerateAfterTeamAiTimer();
    selectScreen("resume-generating");
    generateAfterTeamAiRef.current = window.setTimeout(() => {
      generateAfterTeamAiRef.current = null;
      selectScreen("resume-editor");
    }, 5000);
  };

  useEffect(() => {
    return () => clearGenerateAfterTeamAiTimer();
  }, []);

  useEffect(() => {
    if (active !== "resume-generating") {
      clearGenerateAfterTeamAiTimer();
    }
  }, [active]);

  const meta = PAGE_SCREENS.find((s) => s.id === active)!;

  return (
    <div className="flex min-h-screen w-full">
      {!embedNoSidebar ? (
        <aside className="sticky top-0 flex h-screen w-[min(100%,280px)] shrink-0 flex-col border-r border-black/10 bg-white">
          <div className="border-b border-black/10 px-4 py-3">
            <p className="text-[11px] font-medium uppercase tracking-wide text-black/45">Живой прототип</p>
            <p className="mt-1 text-sm font-medium leading-snug text-black/85">Page 18 · canvas 3352:9340</p>
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-2">
            {PAGE_SCREENS.map((s) => {
              const isActive = s.id === active;
              const isLive = REACT_SCREENS.has(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    isActive ? "bg-black/[0.06] font-medium text-black" : "text-black/70 hover:bg-black/[0.04]"
                  }`}
                  onClick={() => selectScreen(s.id)}
                >
                  <span className="block leading-snug">{s.label}</span>
                  <span className="mt-0.5 block text-[11px] font-normal text-black/40">
                    {isLive ? "HTML в приложении" : "ссылка на Figma"}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>
      ) : null}
      <main className="min-h-screen min-w-0 flex-1 bg-white">
        {active === "apply" && (
          <JobApplicationPage
            draft={applyDraft}
            setDraft={setApplyDraft}
            onGenerateWithTeamAI={startGenerateWithTeamAIFlow}
          />
        )}
        {active === "apply-with-resume" && (
          <JobApplicationPage
            draft={applyDraft}
            setDraft={setApplyDraft}
            withResumeAttached
            onGenerateWithTeamAI={startGenerateWithTeamAIFlow}
          />
        )}
        {active === "resume-generating" && <ResumeGeneratingPage />}
        {active === "resume-editor" && (
          <ResumeEditorPage
            onSaveAndDownload={handleSaveEditorAndGoToApplyWithResume}
            onDiscard={handleDiscardEditorAndGoToApply}
          />
        )}
        {!REACT_SCREENS.has(active) && (
          <ArtboardPlaceholder figmaFrameId={meta.figmaFrameId} title={meta.label} />
        )}
      </main>
    </div>
  );
}
