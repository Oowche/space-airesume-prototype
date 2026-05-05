import { useEffect, useId, useRef, useState } from "react";

import GradePerformanceMarks from "./GradePerformanceMarks";

const ABOUT_MAX_CHARS = 280;
/** Тонкий пробел вокруг слэша в каунтере (как в макетах) */
const THIN = "\u2009";

/** Первая опция селекта «Управление командами» — в синей карточке резюме не показываем */
export const TEAM_MANAGEMENT_NONE_LABEL = "Не управляет командой";

const TEAM_MANAGEMENT_OPTIONS = [
  TEAM_MANAGEMENT_NONE_LABEL,
  "Линейный руководитель",
  "Мидл-руководитель",
  "C-level-руководитель",
] as const;

function normalizeTeamManagementValue(raw: string): string {
  const t = raw.trim();
  if ((TEAM_MANAGEMENT_OPTIONS as readonly string[]).includes(t)) return t;
  return "Линейный руководитель";
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TeamManagementSelect({
  value,
  onChange,
  id,
}: {
  value: string;
  onChange: (next: string) => void;
  id: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className="relative w-full" ref={rootRef}>
      <button
        id={id}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex min-h-[40px] w-full cursor-pointer items-center justify-between gap-2 rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] px-3 py-[var(--hr-control-space-text,10px)] text-left font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] hover:border-[rgba(0,0,0,0.2)]"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="min-w-0 flex-1 truncate">{value}</span>
        <ChevronDown className="size-4 shrink-0 text-[rgba(0,0,0,0.45)]" />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-[20] flex max-h-[min(320px,calc(100dvh-120px))] flex-col gap-[var(--hr-space-2-xs,4px)] overflow-y-auto rounded-[var(--hr-control-border-radius-outer,16px)] bg-[var(--hr-color-surface-200,white)] p-[var(--hr-space-2-xs,4px)] shadow-[0px_0px_0.5px_var(--hr-effect-shadow,rgba(0,0,0,0.12)),0px_4px_6px_var(--hr-effect-shadow,rgba(0,0,0,0.12))]"
        >
          {TEAM_MANAGEMENT_OPTIONS.map((opt) => (
            <li key={opt} role="option" aria-selected={opt === value}>
              <button
                type="button"
                className={`w-full rounded-[var(--hr-control-border-radius-inner,8px)] px-3 py-2 text-left font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] [font-feature-settings:'lnum'_1,'pnum'_1] ${
                  opt === value ? "bg-black/[0.06] text-[rgba(0,0,0,0.88)]" : "text-[rgba(0,0,0,0.88)] hover:bg-black/[0.04]"
                }`}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

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
  const teamFieldId = useId();
  const [draft, setDraft] = useState<GeneralInfoSnapshot>(saved);

  useEffect(() => {
    if (open) {
      setDraft({
        ...saved,
        aboutText: saved.aboutText.slice(0, ABOUT_MAX_CHARS),
        roleSubtitle: normalizeTeamManagementValue(saved.roleSubtitle),
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
              <label
                htmlFor={teamFieldId}
                className="font-sans text-[14px] font-medium leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                Управление командами<span className="text-[color:var(--hr-color-special-error,#da4e4e)]"> *</span>
              </label>
              <TeamManagementSelect
                id={teamFieldId}
                value={draft.roleSubtitle}
                onChange={(next) => setDraft((d) => ({ ...d, roleSubtitle: next }))}
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
