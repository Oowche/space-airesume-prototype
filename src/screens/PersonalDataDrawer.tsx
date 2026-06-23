import { useEffect, useId, useRef, useState } from "react";

/** Как на странице «Отклик» / `JobApplicationPage` (avatar) */
import { ASSETS } from "../assets/images";

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

type PersonalDataDrawerProps = {
  open: boolean;
  onClose: () => void;
  /** Текущие сохранённые значения — при открытии копируются в черновик */
  savedCities: string[];
  savedFormats: string[];
  onSave: (cities: string[], formats: string[]) => void;
  cityOptions: readonly string[];
  formatOptions: readonly string[];
};

function MultiSelectField({
  label,
  required,
  placeholder,
  values,
  options,
  onChange,
  open,
  onOpenChange,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  values: string[];
  options: readonly string[];
  onChange: (next: string[]) => void;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        onOpenChange(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, onOpenChange]);

  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };

  const remove = (opt: string) => {
    onChange(values.filter((v) => v !== opt));
  };

  return (
    <div className="flex w-full min-w-0 flex-[1_0_0] flex-col gap-[var(--hr-space-xs,8px)]">
      <div className="flex w-full items-start gap-4">
        <div className="flex min-w-0 flex-1 items-start gap-1 font-sans text-[14px] font-medium leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
          <span>{label}</span>
          {required ? <span className="text-[color:var(--hr-color-special-error,#da4e4e)]">*</span> : null}
        </div>
      </div>
      <div ref={rootRef} className="relative w-full">
        <button
          type="button"
          className="flex min-h-[40px] w-full flex-wrap items-start gap-1 rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] py-1 pl-1 pr-10 text-left"
          onClick={() => onOpenChange(!open)}
          aria-expanded={open}
        >
          <div className="flex min-h-[32px] flex-1 flex-wrap content-center gap-1 px-1 py-0.5">
            {values.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1 rounded-[var(--hr-control-border-radius-inner,8px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] py-1 pl-2 pr-1 font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                {v}
                <button
                  type="button"
                  className="flex size-6 shrink-0 items-center justify-center rounded-[var(--hr-control-border-radius-inner,6px)] text-[rgba(0,0,0,0.45)] hover:bg-black/[0.06]"
                  aria-label={`Удалить ${v}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(v);
                  }}
                >
                  <IconClose className="size-3.5" />
                </button>
              </span>
            ))}
            {values.length === 0 ? (
              <span className="flex items-center px-2 py-1.5 font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                {placeholder}
              </span>
            ) : (
              <span className="flex items-center px-1 py-1.5 font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                {placeholder}
              </span>
            )}
          </div>
          <div className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-[var(--hr-control-border-radius-inner,6px)]">
            <IconChevronDown className={`size-4 text-[rgba(0,0,0,0.55)] transition-transform ${open ? "rotate-180" : ""}`} />
          </div>
        </button>
        {open ? (
          <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-10 max-h-[240px] overflow-y-auto rounded-[var(--hr-border-radius-s,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-color-surface-100,white)] py-1 shadow-[0px_4px_12px_0px_var(--hr-effect-shadow,rgba(0,0,0,0.12))]">
            {options.map((opt) => {
              const selected = values.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  className={`flex w-full items-center px-3 py-2.5 text-left font-sans text-[14px] font-normal leading-[var(--hr-control-line-height,20px)] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] ${
                    selected ? "bg-black/[0.04] font-medium" : "hover:bg-black/[0.03]"
                  }`}
                  onClick={() => toggle(opt)}
                >
                  <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.2))]">
                    {selected ? <span className="text-[12px] leading-none">✓</span> : null}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function PersonalDataDrawer({
  open,
  onClose,
  savedCities,
  savedFormats,
  onSave,
  cityOptions,
  formatOptions,
}: PersonalDataDrawerProps) {
  const titleId = useId();
  const [draftCities, setDraftCities] = useState<string[]>([]);
  const [draftFormats, setDraftFormats] = useState<string[]>([]);
  const [cityMenuOpen, setCityMenuOpen] = useState(false);
  const [formatMenuOpen, setFormatMenuOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setDraftCities([...savedCities]);
      setDraftFormats([...savedFormats]);
      setCityMenuOpen(false);
      setFormatMenuOpen(false);
    }
  }, [open, savedCities, savedFormats]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSave = () => {
    onSave(draftCities, draftFormats);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100]" role="presentation">
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
                Личные данные
              </h2>
              <p className="mt-1 font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                {"Сохраним изменения только в\u00A0резюме: на\u00A0Стаффе ничего не\u00A0изменится"}
              </p>
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

          <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-[var(--hr-space-xl,24px)] pb-4">
            <div className="flex items-center gap-2">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-[var(--hr-color-surface-100,white)]">
                <img alt="" className="pointer-events-none absolute inset-0 size-full object-cover" src={ASSETS.avatar} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-sans text-[length:var(--hr-font-size-body-l,18px)] font-medium leading-[var(--hr-line-height-body-l-compact,22px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                  Аверьянова Дарина Игоревна
                </p>
                <p className="truncate font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                  averianovadar@
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-sans text-[14px] font-medium leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                {"В\u00A0Яндексе"}
              </p>
              <p className="font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                {"3 года и\u00A011 месяцев"}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <MultiSelectField
                label={"В\u00A0каких городах готовы работать"}
                required
                placeholder="Выберите город"
                values={draftCities}
                options={cityOptions}
                onChange={setDraftCities}
                open={cityMenuOpen}
                onOpenChange={(v) => {
                  setCityMenuOpen(v);
                  if (v) setFormatMenuOpen(false);
                }}
              />
              <MultiSelectField
                label="Формат работы"
                required
                placeholder="Выберите формат"
                values={draftFormats}
                options={formatOptions}
                onChange={setDraftFormats}
                open={formatMenuOpen}
                onOpenChange={(v) => {
                  setFormatMenuOpen(v);
                  if (v) setCityMenuOpen(false);
                }}
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
              disabled={draftCities.length === 0 || draftFormats.length === 0}
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
