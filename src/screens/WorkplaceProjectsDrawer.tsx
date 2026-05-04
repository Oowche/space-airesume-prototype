import { useEffect, useId, useState } from "react";

import { IconTrashAlternative } from "../icons/IconTrashAlternative";
import type { WorkplaceEditorProject, WorkplaceEditorState } from "./workplaceEditorModel";
import { createEmptyEditorProject, normalizeWorkplaceStateForSave, WORKPLACE_COMPANY_OPTIONS } from "./workplaceEditorModel";

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 6.5h11M5.5 2.5V5M10.5 2.5V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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

type WorkplaceProjectsDrawerProps = {
  open: boolean;
  onClose: () => void;
  saved: WorkplaceEditorState;
  onSave: (next: WorkplaceEditorState) => void;
  /** Удалить текущее место работы из списка черновика */
  onDeleteWorkplace?: () => void;
};

/** Figma: 3352:16581 / пустое 3365:19356 — шторка «Место работы» */
export default function WorkplaceProjectsDrawer({
  open,
  onClose,
  saved,
  onSave,
  onDeleteWorkplace,
}: WorkplaceProjectsDrawerProps) {
  const titleId = useId();
  const [draft, setDraft] = useState<WorkplaceEditorState>(saved);

  useEffect(() => {
    if (!open) return;
    const projects =
      saved.projects.length > 0 ? saved.projects.map((p) => ({ ...p })) : [createEmptyEditorProject()];
    setDraft({ ...saved, projects });
  }, [open, saved]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const updateProject = (id: string, patch: Partial<WorkplaceEditorProject>) => {
    setDraft((d) => ({
      ...d,
      projects: d.projects.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    }));
  };

  const removeProject = (id: string) => {
    setDraft((d) => ({ ...d, projects: d.projects.filter((p) => p.id !== id) }));
  };

  const addProject = () => {
    setDraft((d) => ({ ...d, projects: [...d.projects, createEmptyEditorProject()] }));
  };

  const handleSave = () => {
    onSave(normalizeWorkplaceStateForSave(draft));
    onClose();
  };

  const handleDeleteWorkplace = () => {
    if (typeof window !== "undefined" && window.confirm("Удалить это место работы из черновика?")) {
      onDeleteWorkplace?.();
      onClose();
    }
  };

  const inputClass =
    "min-h-[40px] w-full resize-none rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] px-3 py-[var(--hr-control-space-text,10px)] font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]";

  const textareaClass =
    "min-h-[100px] w-full resize-none rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] px-3 py-[var(--hr-control-space-text,10px)] font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]";

  const fakeSelectWrap =
    "relative flex min-h-[40px] w-full items-center rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] px-3 py-[var(--hr-control-space-text,10px)]";

  const labelRowClass =
    "font-sans text-[length:var(--hr-font-size-body-s,14px)] font-medium leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]";
  const projectSectionTitleClass =
    "font-sans text-[length:var(--hr-font-size-body-s,14px)] font-medium leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]";

  return (
    <div className="fixed inset-0 z-[100]" role="presentation" data-node-id="3352:16581" data-name="Шторка Место работы">
      <button type="button" className="absolute inset-0 bg-[rgba(0,0,0,0.75)]" aria-label="Закрыть" onClick={onClose} />
      <div
        className="absolute inset-y-0 right-0 z-[101] flex h-full max-h-[100dvh] w-[min(100%,480px)] shadow-[0px_0px_1px_0px_var(--hr-effect-shadow,rgba(0,0,0,0.12)),0px_4px_12px_0px_var(--hr-effect-shadow,rgba(0,0,0,0.12))]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="flex h-full w-2 shrink-0 items-center justify-center bg-[var(--hr-color-surface-0,#f5f5f5)] px-1">
          <div className="h-6 w-px shrink-0 rounded-full bg-[rgba(0,0,0,0.12)]" aria-hidden />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[var(--hr-color-surface-100,white)]">
          <div className="flex shrink-0 items-start gap-6 p-[var(--hr-space-xl,24px)]">
            <div className="min-w-0 flex-1">
              <h2
                id={titleId}
                className="font-sans text-[length:var(--hr-font-size-title-m,24px)] font-medium leading-[var(--hr-line-height-title-m,28px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                Место работы
              </h2>
            </div>
            <button
              type="button"
              className="flex size-8 shrink-0 items-center justify-center rounded-[var(--hr-control-border-radius,10px)] text-[rgba(0,0,0,0.55)] hover:bg-black/[0.04]"
              aria-label="Закрыть"
              onClick={onClose}
            >
              <IconClose className="size-4" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="flex min-h-0 flex-1 flex-col gap-[var(--hr-space-l,20px)] overflow-y-auto px-[var(--hr-space-xl,24px)] pb-6 pt-2">
              <div className="flex w-full min-w-0 flex-col gap-[var(--hr-space-l,20px)] sm:flex-row sm:gap-[var(--hr-space-m,16px)]">
                <div className="flex min-w-0 flex-1 flex-col gap-[var(--hr-space-xs,8px)]">
                  <label className={`flex flex-wrap items-center gap-1 ${labelRowClass}`} style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    Место работы<span className="text-[color:var(--hr-color-special-error,#da4e4e)]">*</span>
                  </label>
                  <div className={`relative ${fakeSelectWrap}`}>
                    <select
                      value={draft.company}
                      onChange={(e) => setDraft((d) => ({ ...d, company: e.target.value }))}
                      className="absolute inset-0 z-[2] cursor-pointer opacity-0"
                      aria-label="Место работы"
                    >
                      <option value="">Сервис или продукт</option>
                      {WORKPLACE_COMPANY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span
                      className={`min-w-0 flex-1 truncate font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] [font-feature-settings:'lnum'_1,'pnum'_1] ${draft.company ? "text-[rgba(0,0,0,0.88)]" : "text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"}`}
                    >
                      {draft.company || "Сервис или продукт"}
                    </span>
                    <IconChevronDown className="size-4 shrink-0 text-[rgba(0,0,0,0.45)]" />
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-[var(--hr-space-xs,8px)]">
                  <label className={`flex flex-wrap items-center gap-1 ${labelRowClass}`} style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    Период работы<span className="text-[color:var(--hr-color-special-error,#da4e4e)]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={draft.workPeriod}
                      onChange={(e) => setDraft((d) => ({ ...d, workPeriod: e.target.value }))}
                      className={`${inputClass} pr-10`}
                      placeholder={"ДД.ММ.ГГГГ — ДД.ММ.ГГГГ"}
                      autoComplete="off"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <IconCalendar className="size-4 text-[rgba(0,0,0,0.45)]" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full min-w-0 flex-col gap-6">
                {draft.projects.map((p) => (
                  <div key={p.id} className="flex w-full min-w-0 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex w-full min-w-0 flex-wrap items-start justify-between gap-x-4 gap-y-2">
                        <span className={projectSectionTitleClass} style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                          Проект
                        </span>
                        <button
                          type="button"
                          className="flex shrink-0 items-center gap-1 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:text-[rgba(0,0,0,0.75)]"
                          onClick={() => removeProject(p.id)}
                        >
                          <IconTrashAlternative className="size-3 shrink-0 text-[rgba(0,0,0,0.62)]" />
                          Удалить проект
                        </button>
                      </div>
                      <input
                        type="text"
                        value={p.title}
                        onChange={(e) => updateProject(p.id, { title: e.target.value })}
                        className={inputClass}
                        placeholder="Название проекта"
                        autoComplete="off"
                      />
                    </div>

                    <div className="flex flex-col gap-[var(--hr-space-xs,8px)]">
                      <label className="font-sans text-[14px] font-medium leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                        Обязанности и достижения
                      </label>
                      <textarea
                        value={p.responsibilities}
                        onChange={(e) => updateProject(p.id, { responsibilities: e.target.value })}
                        rows={4}
                        className={textareaClass}
                        placeholder="Расскажите, что вы делали и к каким результатам это привело"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[var(--hr-control-color-background,rgba(0,0,0,0.04))] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black/[0.06]"
                onClick={addProject}
              >
                <IconPlus className="size-4 shrink-0 text-[rgba(0,0,0,0.55)]" />
                Добавить проект
              </button>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-6 gap-y-3 bg-[var(--hr-color-surface-100,white)] p-[var(--hr-space-xl,24px)]">
            <button
              type="button"
              className="flex min-w-0 flex-1 items-center gap-2 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:text-[rgba(0,0,0,0.88)] sm:flex-initial"
              onClick={handleDeleteWorkplace}
            >
              <IconTrashAlternative className="size-4 shrink-0 text-[rgba(0,0,0,0.45)]" />
              Удалить место работы
            </button>
            <div className="flex shrink-0 justify-end gap-2">
              <button
                type="button"
                className="rounded-[var(--hr-border-radius-s,12px)] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black/[0.04]"
                onClick={onClose}
              >
                Отмена
              </button>
              <button
                type="button"
                className="rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[rgba(0,0,0,0.88)] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-white transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black"
                onClick={handleSave}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
