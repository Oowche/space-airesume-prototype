/** Редактирование блоков «Место работы» в черновике резюме */

export type WorkplaceCardProject = {
  title: string;
  body: string;
};

export type WorkplaceEditorProject = {
  id: string;
  title: string;
  responsibilities: string;
};

export type WorkplaceEditorState = {
  company: string;
  workPeriod: string;
  projects: WorkplaceEditorProject[];
};

export type WorkplaceEntry = {
  id: string;
  data: WorkplaceEditorState;
};

function newId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `wp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function newProjectId(): string {
  return newId();
}

export function createEmptyEditorProject(): WorkplaceEditorProject {
  return {
    id: newProjectId(),
    title: "",
    responsibilities: "",
  };
}

/** Черновик нового места работы: сразу один пустой проект в шторке (состояние по умолчанию) */
export function createEmptyWorkplaceState(): WorkplaceEditorState {
  return {
    company: "",
    workPeriod: "",
    projects: [createEmptyEditorProject()],
  };
}

export function createEmptyWorkplaceEntry(): WorkplaceEntry {
  return {
    id: newId(),
    data: createEmptyWorkplaceState(),
  };
}

/** Обрезка строк и отбрасывание полностью пустых проектов при сохранении */
export function normalizeWorkplaceStateForSave(state: WorkplaceEditorState): WorkplaceEditorState {
  const company = state.company.trim();
  const workPeriod = state.workPeriod.trim();
  const projects = state.projects
    .map((p) => ({
      ...p,
      title: p.title.trim(),
      responsibilities: p.responsibilities.trim(),
    }))
    .filter((p) => p.title.length > 0 || p.responsibilities.length > 0);
  return { company, workPeriod, projects };
}

/** Нет ни компании, ни периода, ни заполненных полей проектов — черновик можно выкинуть при «Отмена» */
export function isWorkplaceEntryVisuallyEmpty(data: WorkplaceEditorState): boolean {
  if (data.company.trim() || data.workPeriod.trim()) return false;
  return !data.projects.some((p) => p.title.trim() || p.responsibilities.trim());
}

/** Выпадающий список «Место работы» */
export const WORKPLACE_COMPANY_OPTIONS = [
  "Яндекс Пэй",
  "Яндекс Доставка",
  "Яндекс Метрики",
  "Яндекс Такси",
  "Яндекс Еда",
] as const;

export const INITIAL_YANDEX_PAY_STATE: WorkplaceEditorState = {
  company: "Яндекс Пэй",
  workPeriod: "01.12.2024 — н.в.",
  projects: [
    {
      id: "yp-0",
      title: "Сетанта",
      responsibilities:
        "Доработки в\u00A0ручке юзерстейта для\u00A0определения необходимости сокращения триала, поддержка смежной команды при\u00A0интеграции\n• Доработки в\u00A0ручке юзерстейта\n• Поддержка смежной команды при\u00A0интеграции",
    },
    {
      id: "yp-1",
      title: "Запуск Пэй",
      responsibilities:
        "Доработки в\u00A0ручке композитов для\u00A0пэя, поддержка смежной команды при\u00A0интеграции\n• Доработки в\u00A0ручке композитов\n• Поддержка смежной команды при\u00A0интеграции",
    },
    {
      id: "yp-2",
      title: "Запуск кэшбека баллами",
      responsibilities:
        "• Реализация новой ручки для\u00A0кэшбека баллами\n• Реализация новой ручки",
    },
    {
      id: "yp-3",
      title: "Юпитер",
      responsibilities:
        "Реализация проекта в\u00A0сжатые сроки, написание сложных миграций, коммуникация со\u00A0смежниками, планирование и\u00A0декомпозиция задач\n• Реализация проекта за 3 недели вместо 3 месяцев\n• Эффективная коммуникация со\u00A0смежниками\n• Написание сложных миграций\n\nУспешный запуск проекта в\u00A0максимально сжатые сроки без\u00A0денежных и\u00A0PR потерь",
    },
    {
      id: "yp-4",
      title: "Персональные офферы",
      responsibilities:
        "Переработка технического видения проекта, разработка новых интеграций, проработка сервисов внутри платформы подписки\n• Переработка технического видения проекта\n• Разработка новых интеграций\n• Проработка сервисов внутри платформы подписки\n\nГотовые интеграции в\u00A0проде, которые позволят сэкономить время при\u00A0дальнейшем развитии персональных офферов",
    },
  ],
};

export const INITIAL_DELIVERY_STATE: WorkplaceEditorState = {
  company: "Яндекс Доставка",
  workPeriod: "01.11.2023 — 01.11.2025",
  projects: [
    {
      id: "dlv-0",
      title: "Новая тарифная сетка",
      responsibilities: [
        "Архревью, общение с\u00A0коллегами, декомпозиция и\u00A0делегирование задач, составление плана работ, груминги",
        "• Завершение разработки новой ручки офферов",
        "• Вынос воркеров тарифной сетки из\u00A0монолита",
        "• Починка критичного бага в\u00A0таске монолита",
      ].join("\n"),
    },
    {
      id: "dlv-1",
      title: "Запуск в\u00A0МЕНА",
      responsibilities: [
        "Проектирование региональной схемы, декомпозиция задач",
        "• Проектирование региональной схемы",
        "• Декомпозиция задач",
      ].join("\n"),
    },
    {
      id: "dlv-2",
      title: "Доработка страницы тарифов",
      responsibilities: [
        "Архревью, общение с\u00A0коллегами, декомпозиция и\u00A0делегирование задач, составление плана работ, груминги",
        "• Завершение разработки новой ручки офферов",
        "• Вынос воркеров тарифной сетки из\u00A0монолита",
        "• Починка критичного бага в\u00A0таске монолита",
      ].join("\n"),
    },
  ],
};

export const INITIAL_METRIKA_STATE: WorkplaceEditorState = {
  company: "Яндекс Метрики",
  workPeriod: "01.08.2022 — 01.10.2023",
  projects: [],
};

const RU_MONTH_NAMES = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
] as const;

/** Подпись периода для карточки: ДД.ММ.ГГГГ → «месяц год», как в макетах */
export function formatWorkPeriodWithRuMonthNames(text: string): string {
  return text.replace(/\b(\d{1,2})\.(\d{1,2})\.(\d{4})\b/g, (_match, d: string, m: string, y: string) => {
    const mi = Number.parseInt(m, 10) - 1;
    if (mi < 0 || mi > 11) return `${d}.${m}.${y}`;
    return `${RU_MONTH_NAMES[mi]!} ${y}`;
  });
}

/** «н.в.» / «н. в.» → «сейчас» для подписи в карточке */
function replaceNvWithSeichas(text: string): string {
  return text.replace(/[нН]\.\s*[вВ]\.?/g, "сейчас");
}

/** Одна строка периода для карточки: месяцы словами, части через длинное тире, н.в. → сейчас */
export function workPeriodToCardLine(workPeriod: string): string {
  const trimmed = workPeriod.trim();
  if (!trimmed) return "";

  const normalized = replaceNvWithSeichas(trimmed);
  const withMonths = formatWorkPeriodWithRuMonthNames(normalized);

  const dashParts = withMonths.split(/\s*[—–]\s*/).filter(Boolean);
  if (dashParts.length >= 2) {
    return dashParts.join(" — ");
  }

  const comma = withMonths.indexOf(",");
  if (comma !== -1) {
    const left = withMonths.slice(0, comma).trim().replace(/,$/, "");
    const right = withMonths.slice(comma + 1).trim();
    return [left, right].filter(Boolean).join(" — ");
  }

  return withMonths;
}
