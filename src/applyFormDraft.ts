/** Общее состояние формы «Отклик» — сохраняется при переходах через генерацию резюме и редактор */

export type VacancySlotVariant = "alice" | "yandex";

export type VacancySlot = {
  id: string;
  variant: VacancySlotVariant;
  coverLetter: string;
};

export const INITIAL_VACANCY_SLOTS: VacancySlot[] = [
  { id: "v-alice-speech", variant: "alice", coverLetter: "" },
  { id: "v-yandex-vert", variant: "yandex", coverLetter: "" },
];

export type ApplyFormDraft = {
  vacancySearch: string;
  vacancySlots: VacancySlot[];
  portfolioLink: string;
  /** Экран с прикреплённым файлом: показывать строку файла или кнопки */
  resumeFileRowVisible: boolean;
  wantRecruiterOffers: boolean;
  selectedReasonIndices: number[];
  rulesAccepted: boolean;
  hideFromManager: boolean;
  hideFromHr: boolean;
  otherReasonDetail: string;
};

export const APPLY_WITH_RESUME_PORTFOLIO_DEFAULT = "https://averianovadarina-ml-work.github.io";

export function createInitialApplyDraft(): ApplyFormDraft {
  return {
    vacancySearch: "",
    vacancySlots: INITIAL_VACANCY_SLOTS.map((s) => ({ ...s })),
    portfolioLink: "",
    resumeFileRowVisible: false,
    wantRecruiterOffers: false,
    selectedReasonIndices: [],
    rulesAccepted: false,
    hideFromManager: false,
    hideFromHr: false,
    otherReasonDetail: "",
  };
}
