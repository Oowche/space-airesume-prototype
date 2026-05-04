/** Figma file: Анкеты · Рекомендация · Ротация · Карьерная консультация — Page 18 canvas `3352:9340` */
export const FIGMA_DESIGN_URL_BASE =
  "https://www.figma.com/design/ni019tIFEDibMqnuKM005o/%D0%90%D0%BD%D0%BA%D0%B5%D1%82%D1%8B--%D0%A0%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D1%8F--%D0%A0%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F--%D0%9A%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F";

export function figmaFrameUrl(nodeIdHyphen: string): string {
  return `${FIGMA_DESIGN_URL_BASE}?node-id=${encodeURIComponent(nodeIdHyphen)}`;
}

export type ScreenId =
  | "apply"
  | "apply-with-resume"
  | "resume-generating"
  | "resume-editor"
  | "resume-editor-alt"
  | "modal-delete-work"
  | "apply-with-resume-toast"
  | "apply-extended-resume"
  | "drawer-instance";

export type ScreenEntry = {
  id: ScreenId;
  label: string;
  /** Frame node id as in Figma URL (`3352-16462`) */
  figmaFrameId: string;
};

/** Order follows canvas layout left → right (see metadata for Page `3352:9340`). */
export const PAGE_SCREENS: ScreenEntry[] = [
  { id: "apply", label: "Отклик на вакансии", figmaFrameId: "3352-16462" },
  {
    id: "apply-with-resume",
    label: "Отклик · с добавленным резюме",
    figmaFrameId: "3352-16630",
  },
  { id: "resume-generating", label: "Черновик резюме · генерация", figmaFrameId: "3352-16521" },
  { id: "resume-editor", label: "Черновик резюме · редактор", figmaFrameId: "3352-16528" },
  { id: "resume-editor-alt", label: "Черновик резюме · длинный вариант", figmaFrameId: "3352-16554" },
  { id: "modal-delete-work", label: "Модалка · удалить место работы", figmaFrameId: "3352-16584" },
  { id: "apply-extended-resume", label: "Отклик · расширенное резюме", figmaFrameId: "3352-16588" },
  { id: "apply-with-resume-toast", label: "Отклик · тост «Резюме скачано»", figmaFrameId: "3352-16706" },
  { id: "drawer-instance", label: "Drawer (экземпляр)", figmaFrameId: "3352-16580" },
];

export const REACT_SCREENS = new Set<ScreenId>([
  "apply",
  "apply-with-resume",
  "resume-generating",
  "resume-editor",
]);
