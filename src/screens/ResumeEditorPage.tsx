/** Figma: ni019tIFEDibMqnuKM005o · node 3352:16528 «Черновик резюме · редактор» */

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import GeneralInfoDrawer, { TEAM_MANAGEMENT_NONE_LABEL, type GeneralInfoSnapshot } from "./GeneralInfoDrawer";
import { RESUME_DRAFT_PAGE_SUBTITLE } from "../resumeDraftCopy";
import GradePerformanceMarks from "./GradePerformanceMarks";
import PersonalDataDrawer from "./PersonalDataDrawer";
import {
  createEmptyWorkplaceEntry,
  createEmptyWorkplaceState,
  INITIAL_DELIVERY_STATE,
  INITIAL_METRIKA_STATE,
  INITIAL_YANDEX_PAY_STATE,
  isWorkplaceEntryVisuallyEmpty,
  type WorkplaceCardProject,
  type WorkplaceEditorState,
  type WorkplaceEntry,
  workPeriodToCardLine,
} from "./workplaceEditorModel";
import WorkplaceProjectsDrawer from "./WorkplaceProjectsDrawer";
import {
  CITY_OPTIONS,
  DEFAULT_RESUME_CITIES,
  DEFAULT_RESUME_FORMATS,
  WORK_FORMAT_OPTIONS,
} from "./personalDataConstants";
import SpaceLogotype from "../components/SpaceLogotype";

/** Те же ассеты, что на `JobApplicationPage` — временные URL Figma MCP быстро протухают */
const imgImage = "https://www.figma.com/api/mcp/asset/269c6a3a-ca60-4f4b-bbf4-40e42c34ab1a";
const imgVectorBack = "https://www.figma.com/api/mcp/asset/de7dc4b1-9afa-40d8-a244-b50426460233";
const imgBefore = "https://www.figma.com/api/mcp/asset/1bae21c1-11b2-4e53-a43f-b6aa55c15d02";
const imgAfter = "https://www.figma.com/api/mcp/asset/7399136e-c22e-44d2-9020-58d2420f5d48";
const imgAfter1 = "https://www.figma.com/api/mcp/asset/2212a2dc-23d2-4a22-83e3-5d70e2e69430";
const imgHeaderIconSun = "https://www.figma.com/api/mcp/asset/264002f8-3ddc-4bb9-8734-f39dd5aa8508";
const imgHeaderIconBell = "https://www.figma.com/api/mcp/asset/63b63264-d97a-4e46-9191-2603576b2c89";
const imgHeaderIconPlane = "https://www.figma.com/api/mcp/asset/ca6760e7-2927-4c77-a456-51003a6dbb5e";

function IconEdit({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10.7 2.3 13.7 5.3M12 1l3 3-8.5 8.5a2 2 0 0 1-.9.5l-2.1.6.6-2.1a2 2 0 0 1 .5-.9L12 1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlus({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDownload({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 2.5v7.5M5 8l3 2.5 3-2.5M3 13.5h10" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

/** Figma 3374:8402 — подтверждение перед сохранением и переходом к отклику */
function SaveResumeConfirmModal({
  open,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-[var(--hr-space-m,16px)]" data-node-id="3374:8402">
      <button type="button" className="absolute inset-0 bg-black/[0.75]" aria-label="Закрыть" onClick={onCancel} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[201] w-full max-w-[600px] rounded-[var(--hr-border-radius-l,20px)] bg-[var(--hr-color-surface-100,white)] p-[var(--hr-space-xl,24px)] shadow-[0px_0px_1px_0px_var(--hr-effect-shadow,rgba(0,0,0,0.12)),0px_4px_12px_0px_var(--hr-effect-shadow,rgba(0,0,0,0.12))]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-[var(--hr-control-border-radius-inner,6px)] text-[rgba(0,0,0,0.55)] hover:bg-black/[0.04]"
          aria-label="Закрыть"
          onClick={onCancel}
        >
          <IconClose className="size-4" />
        </button>
        <div className="flex flex-col gap-[var(--hr-space-xl,24px)] pr-8">
          <div className="flex flex-col gap-[var(--hr-space-xs,8px)]">
            <h2
              id={titleId}
              className="font-sans text-[length:var(--hr-font-size-title-m,24px)] font-medium leading-[var(--hr-line-height-title-m,28px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
              style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
            >
              После сохранения нельзя будет вернуться к&nbsp;редактированию резюме
            </h2>
            <p
              className="font-sans text-[length:var(--hr-font-size-body-m,16px)] font-normal leading-[var(--hr-line-height-body-m,24px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]"
              style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
            >
              Файл с&nbsp;резюме скачается на&nbsp;ваше устройство, приложим его в&nbsp;отклик
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-[var(--hr-space-xl,24px)]">
            <button
              type="button"
              className="min-h-[40px] rounded-[var(--hr-border-radius-s,12px)] px-[var(--hr-space-m,16px)] font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black/[0.04]"
              onClick={onCancel}
            >
              Отмена
            </button>
            <button
              type="button"
              className="min-h-[40px] rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[rgba(0,0,0,0.88)] px-[var(--hr-space-m,16px)] font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[rgba(255,255,255,0.96)] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black active:bg-black"
              onClick={onConfirm}
            >
              Сохранить и продолжить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryEditButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        className ??
        "inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[rgba(0,0,0,0.04)] px-3 py-2 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] shadow-none transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-[rgba(0,0,0,0.06)] active:bg-[rgba(0,0,0,0.08)]"
      }
    >
      <IconEdit className="size-4 shrink-0 text-[rgba(0,0,0,0.55)]" />
      Изменить
    </button>
  );
}

type ControlUserProps = {
  className?: string;
};

function ControlUser({ className }: ControlUserProps) {
  return (
    <div
      className={
        className ||
        "relative flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[var(--hr-color-surface-100,white)]"
      }
    >
      <div className="relative z-[1] h-full min-w-px flex-[1_0_0] rounded-full">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none rounded-full object-cover" src={imgImage} />
      </div>
    </div>
  );
}

export type ResumeEditorPageProps = {
  /** «Сохранить изменения и скачать» → переход на отклик с резюме */
  onSaveAndDownload?: () => void;
  /** «Не сохранять» → вернуться на отклик без прикреплённого резюме */
  onDiscard?: () => void;
};

export default function ResumeEditorPage({ onSaveAndDownload, onDiscard }: ResumeEditorPageProps) {
  const [resumeCities, setResumeCities] = useState<string[]>(() => [...DEFAULT_RESUME_CITIES]);
  const [resumeFormats, setResumeFormats] = useState<string[]>(() => [...DEFAULT_RESUME_FORMATS]);
  const [personalDrawerOpen, setPersonalDrawerOpen] = useState(false);
  const [generalDrawerOpen, setGeneralDrawerOpen] = useState(false);
  const [workplaceDrawerId, setWorkplaceDrawerId] = useState<string | null>(null);
  const [saveConfirmOpen, setSaveConfirmOpen] = useState(false);
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoSnapshot>(() => ({
    positionTitle: "Разработчик Machine Learning",
    roleSubtitle: "Линейный руководитель",
    aboutText: "",
  }));

  const citiesLine = resumeCities.join(", ");
  const formatsLine = resumeFormats.join(", ");

  const handleSavePersonal = useCallback((cities: string[], formats: string[]) => {
    setResumeCities(cities);
    setResumeFormats(formats);
  }, []);

  const handleSaveGeneral = useCallback((next: GeneralInfoSnapshot) => {
    setGeneralInfo(next);
  }, []);

  const openGeneralInfoDrawer = useCallback(() => {
    setGeneralDrawerOpen(true);
  }, []);

  const [workplaces, setWorkplaces] = useState<WorkplaceEntry[]>(() => [
    {
      id: "w-pay",
      data: {
        ...INITIAL_YANDEX_PAY_STATE,
        projects: INITIAL_YANDEX_PAY_STATE.projects.map((p) => ({ ...p })),
      },
    },
    {
      id: "w-dlv",
      data: {
        ...INITIAL_DELIVERY_STATE,
        projects: INITIAL_DELIVERY_STATE.projects.map((p) => ({ ...p })),
      },
    },
    {
      id: "w-mtr",
      data: {
        ...INITIAL_METRIKA_STATE,
        projects: INITIAL_METRIKA_STATE.projects.map((p) => ({ ...p })),
      },
    },
  ]);

  const activeWorkplace = workplaceDrawerId ? workplaces.find((w) => w.id === workplaceDrawerId) : undefined;

  const closeWorkplaceDrawer = useCallback(() => {
    setWorkplaceDrawerId((openId) => {
      if (openId) {
        setWorkplaces((ws) => {
          const w = ws.find((x) => x.id === openId);
          const discard = w && isWorkplaceEntryVisuallyEmpty(w.data);
          return discard ? ws.filter((x) => x.id !== openId) : ws;
        });
      }
      return null;
    });
  }, []);

  const handleSaveWorkplace = useCallback(
    (data: WorkplaceEditorState) => {
      if (!workplaceDrawerId) return;
      setWorkplaces((ws) =>
        ws.map((w) =>
          w.id === workplaceDrawerId
            ? { ...w, data: { ...data, projects: data.projects.map((p) => ({ ...p })) } }
            : w,
        ),
      );
    },
    [workplaceDrawerId],
  );

  const handleDeleteWorkplaceFromDrawer = useCallback(() => {
    if (!workplaceDrawerId) return;
    setWorkplaces((ws) => ws.filter((w) => w.id !== workplaceDrawerId));
  }, [workplaceDrawerId]);

  const handleAddWorkplace = useCallback(() => {
    const entry = createEmptyWorkplaceEntry();
    setWorkplaces((ws) => [...ws, entry]);
    setWorkplaceDrawerId(entry.id);
  }, []);

  useEffect(() => {
    if (!personalDrawerOpen && !generalDrawerOpen && !workplaceDrawerId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [personalDrawerOpen, generalDrawerOpen, workplaceDrawerId]);

  const workplaceFabAnchorRef = useRef<HTMLDivElement>(null);
  const [fabAnchorRect, setFabAnchorRect] = useState<{ left: number; width: number } | null>(null);

  const syncFabToWorkplaceColumn = useCallback(() => {
    const el = workplaceFabAnchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setFabAnchorRect({ left: r.left, width: r.width });
  }, []);

  useLayoutEffect(() => {
    syncFabToWorkplaceColumn();
    const el = workplaceFabAnchorRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => syncFabToWorkplaceColumn());
    ro.observe(el);
    window.addEventListener("resize", syncFabToWorkplaceColumn);
    window.addEventListener("scroll", syncFabToWorkplaceColumn, true);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncFabToWorkplaceColumn);
      window.removeEventListener("scroll", syncFabToWorkplaceColumn, true);
    };
  }, [syncFabToWorkplaceColumn, workplaces]);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center gap-[var(--hr-space-2-xl,32px)] bg-[var(--hr-color-surface-100,white)] [--resume-fab-h:104px]"
      data-node-id="3352:16528"
      data-name="Экран 3"
    >
      <PersonalDataDrawer
        open={personalDrawerOpen}
        onClose={() => setPersonalDrawerOpen(false)}
        savedCities={resumeCities}
        savedFormats={resumeFormats}
        onSave={handleSavePersonal}
        cityOptions={CITY_OPTIONS}
        formatOptions={WORK_FORMAT_OPTIONS}
      />
      <GeneralInfoDrawer
        open={generalDrawerOpen}
        onClose={() => setGeneralDrawerOpen(false)}
        saved={generalInfo}
        onSave={handleSaveGeneral}
      />
      <WorkplaceProjectsDrawer
        open={workplaceDrawerId !== null}
        onClose={closeWorkplaceDrawer}
        saved={activeWorkplace?.data ?? createEmptyWorkplaceState()}
        onSave={handleSaveWorkplace}
        onDeleteWorkplace={handleDeleteWorkplaceFromDrawer}
      />
      <SaveResumeConfirmModal
        open={saveConfirmOpen}
        onCancel={() => setSaveConfirmOpen(false)}
        onConfirm={() => {
          setSaveConfirmOpen(false);
          onSaveAndDownload?.();
        }}
      />

      <div
        className="flex w-full shrink-0 items-center justify-center gap-[var(--hr-space-2-xl,32px)] px-[var(--hr-space-2-xl,32px)] py-[var(--hr-space-s,12px)]"
        data-node-id="3352:16529"
        data-name="Page · Header"
      >
        <div className="relative z-[3] flex shrink-0 items-center justify-center gap-[var(--hr-space-xs,8px)]" data-node-id="I3352:16529;9434:6746" data-name="← Left">
          <div
            className="relative z-[2] flex shrink-0 cursor-pointer items-center justify-center rounded-[var(--hr-border-radius-s,12px)] p-[var(--hr-space-s,12px)] transition-colors hover:bg-black/[0.04] active:bg-black/[0.06]"
            data-node-id="I3352:16529;9434:6747"
            data-name="Icon Button"
            role="button"
            tabIndex={0}
          >
            <div className="relative z-[2] size-[16px]" data-name="← Icon">
              <div className="absolute left-1/2 top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgVectorBack} />
              </div>
            </div>
          </div>
          <SpaceLogotype className="relative z-[1] shrink-0" />
        </div>

        <div className="relative z-[2] flex min-w-px flex-[1_0_0] items-center gap-[var(--hr-space-xs,8px)]" data-name="Tab Menu">
          {[
            { id: "tab-home", label: "Главная", active: false },
            { id: "tab-jobs", label: "Вакансии", active: true },
            { id: "tab-cab", label: "Мой кабинет", active: false },
            { id: "tab-how", label: "Как всё устроено", active: false },
          ].map((t) => (
            <div
              key={t.id}
              className={`relative flex shrink-0 cursor-pointer items-center justify-center rounded-[var(--hr-border-radius-s,12px)] transition-colors hover:bg-black/[0.04] ${t.active ? "z-[7]" : "z-[5]"}`}
            >
              <div className="relative z-[3] h-[40px] min-h-[40px] w-[12px] shrink-0">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgBefore} />
              </div>
              <div className="relative z-[2] flex min-h-[40px] shrink-0 items-center justify-center">
                <div
                  className={`relative z-[1] shrink-0 overflow-hidden text-center text-ellipsis whitespace-nowrap font-sans text-[14px] not-italic ${t.active ? "text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.9))]" : "text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]"}`}
                  style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
                >
                  <p className="overflow-hidden text-ellipsis leading-[20px]">{t.label}</p>
                </div>
              </div>
              <div className="relative z-[1] h-[40px] min-h-[40px] w-[12px] shrink-0">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={t.active ? imgAfter : imgAfter1} />
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-[1] flex shrink-0 items-center justify-center gap-[var(--hr-space-m,16px)]" data-name="→ Right">
          <div className="relative z-[2] flex shrink-0 items-center justify-center" data-name="Button · Group">
            <button
              type="button"
              className="relative flex shrink-0 items-center justify-center rounded-[var(--hr-border-radius-s,12px)] p-[var(--hr-space-s,12px)] transition-colors hover:bg-black/[0.04]"
            >
              <div className="relative z-[2] size-[16px] shrink-0">
                <div className="absolute left-1/2 top-1/2 size-[22px] -translate-x-1/2 -translate-y-1/2">
                  <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgHeaderIconSun} />
                </div>
              </div>
            </button>
            <button
              type="button"
              className="relative flex shrink-0 items-center justify-center rounded-[var(--hr-border-radius-s,12px)] p-[var(--hr-space-s,12px)] transition-colors hover:bg-black/[0.04]"
            >
              <div className="relative z-[2] size-[16px] shrink-0">
                <div className="absolute left-[calc(50%+0.47px)] top-1/2 h-[20.877px] w-[21.395px] -translate-x-1/2 -translate-y-1/2">
                  <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgHeaderIconBell} />
                </div>
              </div>
            </button>
            <button
              type="button"
              className="relative flex shrink-0 items-center justify-center rounded-[var(--hr-border-radius-s,12px)] p-[var(--hr-space-s,12px)] transition-colors hover:bg-black/[0.04]"
            >
              <div className="relative z-[2] size-[16px] shrink-0">
                <div className="absolute left-1/2 top-1/2 h-[22px] w-[18px] -translate-x-1/2 -translate-y-1/2">
                  <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgHeaderIconPlane} />
                </div>
              </div>
            </button>
          </div>
          <ControlUser />
        </div>
      </div>

      <div
        className="relative grid w-full max-w-[1280px] shrink-0 grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] gap-x-5 gap-y-8 rounded-[var(--hr-border-radius-l,20px)] px-[var(--hr-space-xl,24px)] pb-0"
        data-node-id="3352:16530"
        data-name="Content"
      >
        <div
          className="col-[3/span_8] row-1 flex shrink-0 flex-col gap-[var(--hr-space-2-xs,4px)] self-start justify-self-stretch leading-[0] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
          data-name="Заголовок + Подпись"
        >
          <div className="relative shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-sans font-medium text-[length:var(--hr-font-size-display-s,32px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
            <p className="leading-[var(--hr-line-height-display-s,36px)] text-[32px]">Черновик резюме</p>
          </div>
          <div className="relative w-[min-content] min-w-full shrink-0 font-sans font-normal text-[length:var(--hr-font-size-body-s,14px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
            <p className="leading-[var(--hr-line-height-body-s,20px)]">{RESUME_DRAFT_PAGE_SUBTITLE}</p>
          </div>
        </div>

        <div className="col-[3/span_8] row-2 flex w-full min-w-0 max-w-full flex-col items-center gap-[var(--hr-space-l,20px)] self-start justify-self-stretch rounded-[var(--hr-border-radius-l,20px)]" data-name="Content">
          {/* Личные данные */}
          <div
            className="flex w-full min-w-0 max-w-[816px] shrink-0 items-start gap-[var(--hr-space-m,16px)] rounded-[var(--hr-border-radius-s,12px)] border border-solid border-[var(--hr-color-border-secondary,rgba(0,0,0,0.12))] p-[var(--hr-space-xl,24px)]"
            data-node-id="3352:16535"
          >
            <div className="relative flex size-[100px] shrink-0 items-center justify-center rounded-full bg-[var(--hr-color-surface-100,white)]">
              <div className="relative z-[1] h-full min-w-px flex-[1_0_0] rounded-full">
                <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none rounded-full object-cover" src={imgImage} />
              </div>
            </div>
            <div className="relative flex min-w-px flex-[1_0_0] flex-col gap-[var(--hr-space-xs,8px)] items-start">
              <div className="relative flex w-full shrink-0 items-start gap-[var(--hr-space-m,16px)]">
                <div className="relative flex min-w-px flex-[1_0_0] flex-col items-start leading-[0] whitespace-nowrap">
                  <div className="relative shrink-0 overflow-hidden text-ellipsis font-sans font-medium text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-title-m,24px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    <p className="leading-[var(--hr-line-height-title-m,28px)] text-[24px]">Аверьянова Дарина Игоревна</p>
                  </div>
                  <div className="relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis font-sans font-normal text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    <p className="overflow-hidden text-ellipsis text-[14px] leading-[var(--hr-line-height-body-s,20px)]">averianovadar@</p>
                  </div>
                </div>
                <SecondaryEditButton onClick={() => setPersonalDrawerOpen(true)} />
              </div>
              <div className="relative flex max-w-full shrink-0 flex-col gap-[var(--hr-space-2-xs-compact,2px)] items-start leading-[0] font-sans font-normal text-[length:var(--hr-font-size-body-s,14px)]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <div className="relative flex shrink-0 items-center gap-[var(--hr-space-2-xs,4px)]">
                  <p className="overflow-hidden text-ellipsis leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]">{"В\u00A0Яндексе"}</p>
                  <p className="overflow-hidden text-ellipsis leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]">{"3 года и\u00A011 месяцев"}</p>
                </div>
                <div className="relative flex min-w-0 shrink-0 flex-wrap items-baseline gap-x-[var(--hr-space-2-xs,4px)] gap-y-1">
                  <p className="shrink-0 leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]">Города</p>
                  <p className="min-w-0 leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]">{citiesLine}</p>
                </div>
                <div className="relative flex min-w-0 shrink-0 flex-wrap items-baseline gap-x-[var(--hr-space-2-xs,4px)] gap-y-1">
                  <p className="shrink-0 leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]">Формат работы</p>
                  <p className="min-w-0 leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]">{formatsLine}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Текущая роль */}
          <div
            className="relative flex w-full min-w-0 max-w-[816px] shrink-0 flex-col items-start gap-[var(--hr-space-2-xl,32px)] overflow-clip rounded-[var(--hr-border-radius-s,12px)] bg-[var(--hr-color-spectre-indigo-100,rgba(100,119,216,0.08))] p-[var(--hr-space-xl,24px)]"
            data-node-id="3352:16536"
          >
            <div className="relative flex w-full min-w-0 shrink-0 flex-col gap-[var(--hr-space-m,16px)] items-start">
              <div className="relative flex w-full min-w-0 shrink-0 items-start gap-[var(--hr-space-m,16px)]">
                <div className="relative flex min-w-px flex-[1_0_0] flex-col items-start justify-center leading-[0] whitespace-nowrap">
                  <div className="w-full min-w-0 shrink-0 overflow-hidden text-ellipsis font-sans font-medium text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-title-m,24px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    <p className="overflow-hidden text-ellipsis text-[24px] leading-[var(--hr-line-height-title-m,28px)]">{generalInfo.positionTitle}</p>
                  </div>
                  {generalInfo.roleSubtitle.trim() && generalInfo.roleSubtitle.trim() !== TEAM_MANAGEMENT_NONE_LABEL ? (
                    <div className="w-full min-w-0 shrink-0 overflow-hidden text-ellipsis font-sans font-normal text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                      <p className="overflow-hidden text-ellipsis text-[14px] leading-[var(--hr-line-height-body-s,20px)]">{generalInfo.roleSubtitle}</p>
                    </div>
                  ) : null}
                </div>
                <SecondaryEditButton onClick={openGeneralInfoDrawer} />
              </div>
              <div
                className={`relative flex w-full shrink-0 flex-col items-start ${
                  generalInfo.aboutText.trim() ? "gap-[8px]" : "gap-[12px]"
                }`}
                data-node-id="I3374:8646;3374:3464"
                data-name="Грейд + Описание"
              >
                <div className="relative flex shrink-0 items-center gap-[var(--hr-space-xs,8px)]">
                  <p className="shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-sans font-medium text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-body-m,16px)] leading-[var(--hr-line-height-body-m,24px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    17 грейд
                  </p>
                  <GradePerformanceMarks />
                </div>
                {generalInfo.aboutText.trim() ? (
                  <div className="relative w-full min-w-0 shrink-0 leading-[0]" data-name="О себе · заполнено">
                    <p className="whitespace-pre-wrap font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                      {generalInfo.aboutText.trim()}
                    </p>
                  </div>
                ) : (
                  <div
                    className="relative flex w-full shrink-0 flex-row gap-[var(--hr-space-2-xs,4px)] items-start leading-[0]"
                    data-node-id="I3374:8646;3374:9026"
                    data-name="О себе"
                  >
                    <div
                      className="relative shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-sans font-normal text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] leading-[var(--hr-line-height-body-s,20px)] not-italic"
                      data-node-id="I3374:8646;3374:9020"
                      style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
                    >
                      <p className="overflow-hidden text-ellipsis text-[14px] leading-[var(--hr-line-height-body-s,20px)]">О себе</p>
                    </div>
                    <div
                      className="relative min-w-px flex-[1_0_0] font-sans font-normal text-[length:var(--hr-font-size-body-s,14px)] leading-[0] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
                      data-node-id="I3374:8646;3374:3471"
                      style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
                    >
                      <p className="leading-[var(--hr-line-height-body-s,20px)]">Не заполнено</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            ref={workplaceFabAnchorRef}
            className="flex w-full min-w-0 max-w-[816px] shrink-0 flex-col gap-[var(--hr-space-l,20px)]"
          >
            {workplaces.map((wp) => (
              <WorkplaceCard
                key={wp.id}
                company={wp.data.company.trim() || "Место работы"}
                periodLine={
                  wp.data.workPeriod.trim() ? workPeriodToCardLine(wp.data.workPeriod) : "Укажите период работы"
                }
                projects={wp.data.projects.map(
                  (p): WorkplaceCardProject => ({
                    title: p.title,
                    body: p.responsibilities,
                  }),
                )}
                onEditClick={() => setWorkplaceDrawerId(wp.id)}
              />
            ))}
          </div>

          {/*
            При прокрутке вниз: 20px зазор под последним местом работы, затем «слой» под плашку
            (высота плашки + 20px до низа окна + safe-area). Подгоняется --resume-fab-h на корне.
          */}
          <div
            className="h-[calc(20px+var(--resume-fab-h)+20px+env(safe-area-inset-bottom,0px))] w-full max-w-[816px] shrink-0"
            aria-hidden
          />
        </div>
      </div>

      {/* Позиция и ширина = у якоря над местами работ (getBoundingClientRect), края совпадают при скролле */}
      <div
        className="pointer-events-none fixed z-[30] [bottom:calc(20px+env(safe-area-inset-bottom,0px))]"
        data-node-id="3352:16553"
        data-name="Floating Action"
        style={
          fabAnchorRect
            ? { left: fabAnchorRect.left, width: fabAnchorRect.width }
            : { left: 0, width: "100%", visibility: "hidden" as const }
        }
      >
        <div className="pointer-events-auto flex w-full min-w-0 flex-wrap items-center justify-between gap-4 overflow-clip rounded-[var(--hr-border-radius-s,12px)] bg-[var(--hr-color-surface-100,white)] p-[var(--hr-space-xl,24px)] shadow-[0px_0px_1px_0px_var(--hr-effect-shadow,rgba(0,0,0,0.12)),0px_4px_12px_0px_var(--hr-effect-shadow,rgba(0,0,0,0.12))]">
          <div className="flex shrink-0 flex-wrap items-center gap-[var(--hr-space-xs,8px)]">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[rgba(0,0,0,0.88)] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-white transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black active:bg-black"
              onClick={() => setSaveConfirmOpen(true)}
            >
              <IconDownload className="size-4 shrink-0 text-white" />
              {"Сохранить изменения и\u00A0скачать файл"}
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[var(--hr-control-color-background,rgba(0,0,0,0.04))] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black/[0.06]"
              onClick={() => onDiscard?.()}
            >
              Не сохранять
            </button>
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[var(--hr-control-color-background,rgba(0,0,0,0.04))] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black/[0.06]"
            onClick={handleAddWorkplace}
          >
            <IconPlus className="size-4 shrink-0 text-[rgba(0,0,0,0.55)]" />
            Добавить место работы
          </button>
        </div>
      </div>
    </div>
  );
}

function WorkplaceCard({
  company,
  periodLine,
  projects,
  onEditClick,
}: {
  company: string;
  periodLine: string;
  projects: WorkplaceCardProject[];
  onEditClick?: () => void;
}) {
  return (
    <div className="flex w-full min-w-0 max-w-[816px] shrink-0 flex-col gap-[var(--hr-space-xl,24px)] rounded-[var(--hr-border-radius-s,12px)] border border-solid border-[var(--hr-color-border-secondary,rgba(0,0,0,0.12))] p-[var(--hr-space-xl,24px)]">
      <div className="flex w-full shrink-0 items-start gap-3">
        <div className="relative flex min-w-px flex-[1_0_0] flex-col gap-[var(--hr-space-2-xs,4px)] items-start leading-[0]">
          <div className="relative w-[min-content] min-w-full shrink-0 font-sans font-medium text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-title-m,24px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
            <p className="leading-[var(--hr-line-height-title-m,28px)]">{company}</p>
          </div>
          <p
            className="relative min-w-0 max-w-full shrink-0 whitespace-normal font-sans font-normal text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] not-italic leading-[var(--hr-line-height-body-s-compact,18px)]"
            style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
          >
            {periodLine}
          </p>
        </div>
        <SecondaryEditButton onClick={onEditClick} />
      </div>
      {projects.length > 0 ? (
        <div className="flex w-full min-w-0 flex-col gap-[var(--hr-space-m,16px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]">
          {projects.map((p, idx) => (
            <div key={`${p.title}-${idx}`} className="flex w-full min-w-0 max-w-[768px] flex-col gap-[var(--hr-space-xs,8px)] items-start">
              <div className="w-full shrink-0 font-sans font-medium text-[length:var(--hr-font-size-body-l,18px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="leading-[var(--hr-line-height-body-l,28px)]">{p.title}</p>
              </div>
              <div className="w-full shrink-0 whitespace-pre-wrap font-sans font-normal text-[length:var(--hr-font-size-body-s,14px)] not-italic leading-[var(--hr-line-height-body-s,20px)]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                {p.body}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
