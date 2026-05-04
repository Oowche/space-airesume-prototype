import { useEffect, useId, useState } from "react";

import GradePerformanceMarks from "./GradePerformanceMarks";

const ABOUT_MAX_CHARS = 280;
/** Тонкий пробел вокруг слэша в каунтере (как в макетах) */
const THIN = "\u2009";

export type GeneralInfoSnapshot = {
  positionTitle: string;
  roleSubtitle: string;
  aboutText: string;
};

type GeneralInfoDrawerProps = {
  open: boolean;
  onClose: () => void;
  saved: GeneralInfoSnapshot;
  onSave: (next: GeneralInfoSnapshot) => void;
};

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

/** Figma: ni019tIFEDibMqnuKM005o · node 3352:16583 «Общая информация» — тот же каркас, что «Личные данные» */
export default function GeneralInfoDrawer({ open, onClose, saved, onSave }: GeneralInfoDrawerProps) {
  const titleId = useId();
  const [draft, setDraft] = useState<GeneralInfoSnapshot>(saved);

  useEffect(() => {
    if (open) {
      setDraft({
        ...saved,
        aboutText: saved.aboutText.slice(0, ABOUT_MAX_CHARS),
      });
    }
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

  const canSave = draft.positionTitle.trim().length > 0 && draft.roleSubtitle.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    onSave({
      positionTitle: draft.positionTitle.trim(),
      roleSubtitle: draft.roleSubtitle.trim(),
      aboutText: draft.aboutText,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100]" role="presentation" data-node-id="3352:16583" data-name="Шторка Общая информация">
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
        <div className="flex min-w-0 flex-1 flex-col bg-[var(--hr-color-surface-100,white)]">
          <div className="flex shrink-0 items-start gap-6 p-[var(--hr-space-xl,24px)]">
            <div className="min-w-0 flex-1">
              <h2 id={titleId} className="font-sans text-[length:var(--hr-font-size-title-m,24px)] font-medium leading-[var(--hr-line-height-title-m,28px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                Общая информация
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

          <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-[var(--hr-space-xl,24px)] pb-4">
            <div className="flex shrink-0 flex-col gap-[var(--hr-space-xs,8px)]">
              <div className="flex flex-wrap items-center gap-[var(--hr-space-xs,8px)]" data-name="Грейд + Перформанс">
                <p className="shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-sans font-medium leading-[var(--hr-line-height-body-m,24px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-body-m,16px)] not-italic" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                  17 грейд
                </p>
                <GradePerformanceMarks />
              </div>
            </div>
            <div className="flex flex-col gap-[var(--hr-space-xs,8px)]">
              <label className="font-sans text-[14px] font-medium leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                Должность<span className="text-[color:var(--hr-color-special-error,#da4e4e)]"> *</span>
              </label>
              <input
                type="text"
                value={draft.positionTitle}
                onChange={(e) => setDraft((d) => ({ ...d, positionTitle: e.target.value }))}
                className="min-h-[40px] w-full rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] px-3 py-[var(--hr-control-space-text,10px)] font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
                placeholder="Например, разработчик Machine Learning"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-[var(--hr-space-xs,8px)]">
              <label className="font-sans text-[14px] font-medium leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                Управление командами<span className="text-[color:var(--hr-color-special-error,#da4e4e)]"> *</span>
              </label>
              <input
                type="text"
                value={draft.roleSubtitle}
                onChange={(e) => setDraft((d) => ({ ...d, roleSubtitle: e.target.value }))}
                className="min-h-[40px] w-full rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] px-3 py-[var(--hr-control-space-text,10px)] font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
                placeholder="Например, линейный руководитель"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-[var(--hr-space-xs,8px)]">
              <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-1">
                <label className="font-sans text-[14px] font-medium leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                  О себе
                </label>
                <span
                  className="shrink-0 tabular-nums font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
                  style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
                  aria-live="polite"
                >
                  {draft.aboutText.length}
                  {THIN}/{THIN}
                  {ABOUT_MAX_CHARS}
                </span>
              </div>
              <textarea
                value={draft.aboutText}
                onChange={(e) => {
                  const next = e.target.value.slice(0, ABOUT_MAX_CHARS);
                  setDraft((d) => ({ ...d, aboutText: next }));
                }}
                maxLength={ABOUT_MAX_CHARS}
                rows={6}
                placeholder="Кратко опишите опыт и цели"
                className="h-[148px] min-h-[148px] w-full resize-none rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] px-3 py-[var(--hr-control-space-text,10px)] font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
              />
            </div>
          </div>

          <div className="flex shrink-0 justify-end gap-2 border-t border-black/[0.06] p-[var(--hr-space-xl,24px)]">
            <button
              type="button"
              className="rounded-[var(--hr-border-radius-s,12px)] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black/[0.04]"
              onClick={onClose}
            >
              Отмена
            </button>
            <button
              type="button"
              className="rounded-[var(--hr-border-radius-s,12px)] border-0 bg-[rgba(0,0,0,0.88)] px-4 py-2.5 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-white transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] hover:bg-black disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!canSave}
              onClick={handleSave}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
