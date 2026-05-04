import { useCallback, useMemo, type Dispatch, type SetStateAction } from "react";

import type { ApplyFormDraft } from "./applyFormDraft";
import SpaceLogotype from "./components/SpaceLogotype";
import { IconTrashAlternative } from "./icons/IconTrashAlternative";

const img = "https://www.figma.com/api/mcp/asset/3b5b0b21-b727-45d8-a705-b5a5d97000aa";
const imgImage = "https://www.figma.com/api/mcp/asset/269c6a3a-ca60-4f4b-bbf4-40e42c34ab1a";
const imgVector2 = "https://www.figma.com/api/mcp/asset/de7dc4b1-9afa-40d8-a244-b50426460233";
const imgBefore = "https://www.figma.com/api/mcp/asset/1bae21c1-11b2-4e53-a43f-b6aa55c15d02";
const imgAfter = "https://www.figma.com/api/mcp/asset/7399136e-c22e-44d2-9020-58d2420f5d48";
const imgBefore1 = "https://www.figma.com/api/mcp/asset/1e5222ec-df1b-4ded-8dfa-9040f3a5493f";
const imgAfter1 = "https://www.figma.com/api/mcp/asset/2212a2dc-23d2-4a22-83e3-5d70e2e69430";
const imgVector3 = "https://www.figma.com/api/mcp/asset/264002f8-3ddc-4bb9-8734-f39dd5aa8508";
const imgVector4 = "https://www.figma.com/api/mcp/asset/63b63264-d97a-4e46-9191-2603576b2c89";
const imgVector5 = "https://www.figma.com/api/mcp/asset/ca6760e7-2927-4c77-a456-51003a6dbb5e";
const imgVector6 = "https://www.figma.com/api/mcp/asset/2f301891-6282-4cf1-afd3-9be445b2fc64";
/** Иконки вакансий — фрейм Icons в макете (node 3362:17555); при поломке экспорта обнови через Figma MCP */
const imgSvcMask16 = "https://www.figma.com/api/mcp/asset/bd18a28e-9a43-4799-baa0-b972b2c5e855";
const imgAliceFill = "https://www.figma.com/api/mcp/asset/fc89af4a-6928-47bd-a145-1beae730b5f3";
const imgYandexYa = "https://www.figma.com/api/mcp/asset/48246f12-0ac9-4cf7-b01a-b8798c00ad63";
const imgVector7 = "https://www.figma.com/api/mcp/asset/123bc66e-738f-4078-9a79-7b52d527cca2";
const imgVector9 = "https://www.figma.com/api/mcp/asset/6fb3e1d5-ec33-416d-b522-6515e017fce3";
const imgSpace = "https://www.figma.com/api/mcp/asset/2994bedb-3d5f-4638-801d-982a070c1917";
const imgColor = "https://www.figma.com/api/mcp/asset/60aea194-f7f7-4b77-a29e-ea92fe6bcb7f";
const imgColor1 = "https://www.figma.com/api/mcp/asset/4e55a507-cce4-46f9-8501-a6099846c058";
const imgVector10 = "https://www.figma.com/api/mcp/asset/a5602f8f-5f4a-47c5-a305-edcf592ea602";
const imgColor2 = "https://www.figma.com/api/mcp/asset/dd1bf7e8-35a7-49e1-8a91-eae495c5dcea";

const REASON_OPTIONS = [
  "Хочу сменить проект / продукт",
  "Хочу карьерного роста",
  "Хочу сменить профессию / сферу",
  "Хочу сменить команду / руководителя",
  "Другая причина",
] as const;

const OTHER_REASON_INDEX = REASON_OPTIONS.length - 1;

/** Текст «О себе» в синей карточке — экран «Отклик · с добавленным резюме» (Figma 3352:16630) */
const APPLY_WITH_RESUME_ABOUT =
  "3 года развиваю ML-решения для персонализации и ранжирования. Работаю с полным циклом: от подготовки данных и обучения моделей до продакшн-внедрения и мониторинга. Ищу переход в команду, где можно глубже сфокусироваться на recommendation systems и ML в продукте.";

const APPLY_WITH_RESUME_FILE_NAME =
  "Ротация Дарина Аверьянова (собрано с помощью Я Team AI).pdf";

const APPLY_WITH_RESUME_PORTFOLIO_DEFAULT = "https://averianovadarina-ml-work.github.io";

function IconDownloadSmall({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 10.5V2.5M8 10.5 5 7.5M8 10.5 11 7.5M3 13.5h10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AttachedResumeFileRow({ fileName, onRemove }: { fileName: string; onRemove: () => void }) {
  return (
    <div
      className="relative flex w-full min-w-0 min-h-[40px] shrink-0 items-stretch overflow-hidden rounded-[var(--hr-border-radius-s,12px)] border border-solid border-[var(--hr-color-border-secondary,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))]"
      data-node-id="I3352:16630;4015:24277;25662:18600;436:1970"
      data-name="Прикреплённое резюме"
    >
      <div className="relative z-[2] flex min-h-[40px] min-w-0 flex-1 items-center gap-[var(--hr-space-xs,8px)] py-[var(--hr-space-s-compact,10px)] pl-3 pr-2 font-sans text-[14px] leading-[var(--hr-line-height-body-s,20px)] [font-feature-settings:'lnum'_1,'pnum'_1]">
        <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]">
          {fileName}
        </p>
        <span className="shrink-0 whitespace-nowrap text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))]">
          847 КБ
        </span>
      </div>
      <div className="relative z-[1] flex shrink-0 items-center pr-1">
        <div className="h-4 w-px shrink-0 bg-[rgba(0,0,0,0.12)]" aria-hidden />
        <button
          type="button"
          aria-label="Скачать"
          className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-[var(--hr-border-radius-xs,8px)] text-[rgba(0,0,0,0.55)] transition-colors hover:bg-black/[0.06] active:bg-black/[0.08]"
        >
          <IconDownloadSmall className="size-4" />
        </button>
        <div className="h-4 w-px shrink-0 bg-[rgba(0,0,0,0.12)]" aria-hidden />
        <button
          type="button"
          aria-label="Удалить файл"
          className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-[var(--hr-border-radius-xs,8px)] text-[rgba(0,0,0,0.55)] transition-colors hover:bg-black/[0.06] active:bg-black/[0.08]"
          onClick={onRemove}
        >
          <IconTrashAlternative className="size-[14px]" />
        </button>
      </div>
    </div>
  );
}

function CheckboxBox({ checked }: { checked: boolean }) {
  return (
    <span
      className={`flex size-[20px] shrink-0 items-center justify-center rounded-[var(--hr-border-radius-xs-compact,6px)] border border-solid ${
        checked
          ? "border-[rgba(0,0,0,0.88)] bg-[rgba(0,0,0,0.88)]"
          : "border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))]"
      }`}
    >
      {checked && (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
          <path
            d="M1.5 5.2 4.5 8.2 10.5 1.5"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

function Component({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[var(--hr-control-space-action,12px)] isolate items-center justify-center min-h-[32px] relative"} data-node-id="1956:2579" data-name="—">
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[2]" data-node-id="1956:2580" data-name="←">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[1]" data-node-id="1956:2581" data-name="→">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
    </div>
  );
}

function Empty({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[var(--hr-control-space-input,8px)] isolate items-center justify-center min-h-[32px] relative"} data-node-id="3352:11753" data-name="Empty / —">
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[2]" data-node-id="3352:11754" data-name="">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[1]" data-node-id="3352:11755" data-name="">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
    </div>
  );
}

function Component1({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[var(--hr-control-space-input,8px)] isolate items-center justify-center min-h-[32px] relative"} data-node-id="1962:2892" data-name="—">
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[2]" data-node-id="1962:2893" data-name="←">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[1]" data-node-id="1962:2894" data-name="→">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
    </div>
  );
}

function Component2({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[var(--hr-control-space-slot,4px)] isolate items-center justify-center min-h-[32px] relative"} data-node-id="1956:2621" data-name="—">
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[2]" data-node-id="1956:2622" data-name="←">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
      <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[1]" data-node-id="1956:2623" data-name="→">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      </div>
    </div>
  );
}

type ControlUserProps = {
  className?: string;
};

function ControlUser({ className }: ControlUserProps) {
  return (
    <div className={className || "bg-[var(----hr-color-surface-100,white)] content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-round,100px)] size-[var(----hr-size-control-m,40px)]"} data-node-id="3352:9805">
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[var(----hr-border-radius-round,100px)] z-[1]" data-node-id="3352:9806" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(----hr-border-radius-round,100px)] size-full" src={imgImage} />
      </div>
    </div>
  );
}

type JobApplicationPageProps = {
  /** Общий черновик формы (родитель сохраняет между экранами) */
  draft: ApplyFormDraft;
  setDraft: Dispatch<SetStateAction<ApplyFormDraft>>;
  /** Переход на экран «Черновик резюме · редактор» (кнопка «Сгенерировать с Я Team AI») */
  onGenerateWithTeamAI?: () => void;
  /** Экран «Отклик с добавленным резюме»: «О себе» в синей карточке, файл вместо серых кнопок */
  withResumeAttached?: boolean;
  /**
   * Текст «О себе» в синей карточке (только с `withResumeAttached`).
   * `undefined` — демо-текст (открыли экран из меню прототипа).
   * `null` или после trim пусто — блок не показывать (из редактора без заполнения).
   * Строка — данные из редактора.
   */
  resumeAboutInCard?: string | null;
};

export default function JobApplicationPage({
  draft,
  setDraft,
  onGenerateWithTeamAI,
  withResumeAttached = false,
  resumeAboutInCard,
}: JobApplicationPageProps) {
  const {
    vacancySearch,
    vacancySlots,
    portfolioLink,
    resumeFileRowVisible,
    wantRecruiterOffers,
    selectedReasonIndices,
    rulesAccepted,
    hideFromManager,
    hideFromHr,
    otherReasonDetail,
  } = draft;

  const toggleReason = useCallback(
    (index: number) => {
      setDraft((d) => {
        const has = d.selectedReasonIndices.includes(index);
        const next = has
          ? d.selectedReasonIndices.filter((i) => i !== index)
          : [...d.selectedReasonIndices, index].sort((a, b) => a - b);
        return { ...d, selectedReasonIndices: next };
      });
    },
    [setDraft],
  );

  const removeVacancySlot = useCallback(
    (id: string) => {
      setDraft((d) => ({ ...d, vacancySlots: d.vacancySlots.filter((r) => r.id !== id) }));
    },
    [setDraft],
  );

  const updateVacancyCoverLetter = useCallback(
    (id: string, coverLetter: string) => {
      setDraft((d) => ({
        ...d,
        vacancySlots: d.vacancySlots.map((r) => (r.id === id ? { ...r, coverLetter } : r)),
      }));
    },
    [setDraft],
  );

  const canSubmit = useMemo(
    () =>
      rulesAccepted &&
      selectedReasonIndices.length > 0 &&
      vacancySlots.length > 0,
    [rulesAccepted, selectedReasonIndices.length, vacancySlots.length],
  );

  const submitFootnote = useMemo(() => {
    if (hideFromManager && hideFromHr) {
      return null;
    }
    if (hideFromManager) {
      return "Вы откликаетесь открыто для HR-партнёра. Мы призовём его в тикет после отправки отклика — отменить это решение не получится";
    }
    if (hideFromHr) {
      return "Вы откликаетесь открыто для руководителя. Мы призовём его в тикет после отправки отклика — отменить это решение не получится";
    }
    return "Вы откликаетесь открыто для руководителя и HR-партнёра. Мы призовём их в тикет после отправки отклика — отменить это решение не получится";
  }, [hideFromManager, hideFromHr]);

  const blueCardAboutParagraph = useMemo(() => {
    if (!withResumeAttached) return null;
    if (resumeAboutInCard === undefined) return APPLY_WITH_RESUME_ABOUT;
    const t = resumeAboutInCard?.trim();
    return t ? t : null;
  }, [withResumeAttached, resumeAboutInCard]);

  return (
    <div className="bg-[var(--hr-color-surface-100,white)] content-stretch flex flex-col gap-[var(--hr-space-2-xl,32px)] items-center pb-[80px] relative min-h-screen w-full" data-node-id="3352:16462" data-name="Х">
      <div className="content-stretch flex gap-[var(----hr-space-2-xl,32px)] isolate items-center justify-center px-[var(----hr-space-2-xl,32px)] py-[var(----hr-space-s,12px)] relative shrink-0 w-full" data-node-id="3352:16463" data-name="Page · Header">
        <div className="content-stretch flex gap-[var(----hr-space-xs,8px)] isolate items-center justify-center relative shrink-0 z-[3]" data-node-id="I3352:16463;9434:6746" data-name="← Left">
          <div className="content-stretch flex isolate cursor-pointer items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06] z-[2]" data-node-id="I3352:16463;9434:6747" data-name="Icon Button">
            <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16463;9434:6747;4383:7041" data-name="← Icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-node-id="I3352:16463;9434:6747;4383:7041;922:2465" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <SpaceLogotype className="relative shrink-0 z-[1]" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[var(----hr-space-xs,8px)] isolate items-center min-w-px relative z-[2]" data-node-id="I3352:16463;11296:9967" data-name="Tab Menu">
          <div className="content-stretch flex isolate cursor-pointer items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06] z-[8]" data-node-id="I3352:16463;11296:10074" data-name="_ Page Header / Tab Menu / Item">
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16463;11296:10074;11296:7770" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore} />
            </div>
            <div className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]" data-node-id="I3352:16463;11296:10074;11296:7772" data-name="Text">
              <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]" data-node-id="I3352:16463;11296:10074;11296:7773" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Главная</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16463;11296:10074;11296:7774" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter} />
            </div>
          </div>
          <div className="content-stretch flex isolate cursor-pointer items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06] z-[7]" data-node-id="I3352:16463;11296:10053" data-name="_ Page Header / Tab Menu / Item">
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16463;11296:10053;11296:7584" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore} />
            </div>
            <div className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]" data-node-id="I3352:16463;11296:10053;11296:7586" data-name="Text">
              <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]" data-node-id="I3352:16463;11296:10053;11296:7587" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Вакансии</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16463;11296:10053;11296:7588" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter} />
            </div>
          </div>
          <div className="content-stretch flex isolate cursor-pointer items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06] z-[6]" data-node-id="I3352:16463;11296:10060" data-name="Item">
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16463;11296:10060;11296:7770" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore1} />
            </div>
            <div className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]" data-node-id="I3352:16463;11296:10060;11296:7772" data-name="Text">
              <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]" data-node-id="I3352:16463;11296:10060;11296:7773" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Мой кабинет</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16463;11296:10060;11296:7774" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter1} />
            </div>
          </div>
          <div className="content-stretch flex isolate cursor-pointer items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06] z-[5]" data-node-id="I3352:16463;11296:10046" data-name="Item">
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16463;11296:10046;11296:7770" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore1} />
            </div>
            <div className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]" data-node-id="I3352:16463;11296:10046;11296:7772" data-name="Text">
              <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]" data-node-id="I3352:16463;11296:10046;11296:7773" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Как всё устроено</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16463;11296:10046;11296:7774" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[var(----hr-space-m,16px)] isolate items-center justify-center relative shrink-0 z-[1]" data-node-id="I3352:16463;9434:6749" data-name="→ Right">
          <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-node-id="I3352:16463;10648:54597" data-name="Button · Group">
            <div className="content-stretch flex isolate cursor-pointer items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06]" data-node-id="I3352:16463;10648:54599" data-name="Icon Button">
              <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16463;10648:54599;4383:7041" data-name="Icon">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-node-id="I3352:16463;10648:54599;4383:7041;922:2595" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex isolate cursor-pointer items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06]" data-node-id="I3352:16463;10648:54600" data-name="Icon Button">
              <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16463;10648:54600;4383:7041" data-name="Icon">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.877px] left-[calc(50%+0.47px)] top-1/2 w-[21.395px]" data-node-id="I3352:16463;10648:54600;4383:7041;922:2570" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex isolate cursor-pointer items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 transition-colors hover:bg-black/[0.04] active:bg-black/[0.06]" data-node-id="I3352:16463;10648:54601" data-name="Icon Button">
              <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16463;10648:54601;4383:7041" data-name="Icon">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[22px] left-1/2 top-1/2 w-[18px]" data-node-id="I3352:16463;10648:54601;4383:7041;922:2562" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
              </div>
            </div>
          </div>
          <ControlUser className="bg-[var(----hr-color-surface-100,white)] content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-round,100px)] shrink-0 size-[40px] z-[1]" />
        </div>
      </div>
      <div className="gap-x-[16px] gap-y-[16px] grid min-w-0 grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] max-w-[1280px] pb-[80px] px-[var(--hr-space-xl,24px)] relative shrink-0 w-full" data-node-id="3352:16464" data-name="Contents">
        <div className="col-[1/span_2] min-w-0 content-stretch flex flex-col gap-[var(--hr-space-3-xl,40px)] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="3352:16465" data-name="Отклик">
          <div className="content-stretch flex flex-col gap-[var(--hr-space-xs,8px)] items-start leading-[0] relative shrink-0 w-full" data-node-id="3352:16466" data-name="Заголовок + Подпись">
            <div className="flex flex-col font-sans font-medium justify-center overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] text-[length:var(--hr-font-size-title-l,28px)] text-ellipsis w-full whitespace-nowrap" data-node-id="3352:16467" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              <p className="leading-[var(--hr-line-height-title-l,32px)] overflow-hidden text-[28px] text-ellipsis">Отклик на вакансии</p>
            </div>
            <div className="flex flex-col font-sans font-normal justify-end relative shrink-0 text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-body-s,14px)] w-full" data-node-id="3352:16468" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              <p className="leading-[var(--hr-line-height-body-s-compact,18px)]">Добавьте резюме и короткие сопроводительные письма к вакансиям: в среднем кандидаты с подробными откликами находят новую команду на 8 дней быстрее</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--hr-space-l,20px)] items-start relative shrink-0 w-full" data-node-id="3352:16469" data-name="Блок вакансий">
            <div className="content-stretch flex flex-col gap-[var(--hr-space-m,16px)] items-start relative shrink-0 w-full" data-node-id="3352:16470" data-name="Заголовок + Скрыть ротацию">
              <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] text-[length:var(--hr-font-size-title-s,20px)] text-ellipsis w-full whitespace-nowrap" data-node-id="3352:16471" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="overflow-hidden text-[20px] text-ellipsis">
                  <span className="leading-[var(--hr-line-height-title-s,24px)]">Выберите вакансии для ротации</span>
                  <span className="leading-[var(--hr-line-height-title-s,24px)] text-[#da4e4e]">{` *`}</span>
                </p>
              </div>
              <div
                className="bg-[var(--hr-control-color-background,rgba(255,255,255,0))] border-[length:var(--hr-border-width-s,1px)] border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] border-solid content-stretch flex isolate items-stretch relative rounded-[var(--hr-control-border-radius,12px)] shrink-0 w-full"
                data-node-id="3352:16472"
                data-name="💠 Input · Search"
              >
                <div className="content-stretch flex isolate items-center justify-center min-h-[40px] min-w-[40px] relative shrink-0 z-[4]">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[12.5%]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                    </div>
                  </div>
                </div>
                <input
                  type="search"
                  name="vacancy-search"
                  value={vacancySearch}
                  onChange={(e) => setDraft((d) => ({ ...d, vacancySearch: e.target.value }))}
                  placeholder="Название вакансии или ссылка на неё"
                  className="font-sans font-normal relative z-[5] min-h-[40px] min-w-0 flex-[1_0_0] border-0 bg-transparent py-[var(--hr-control-space-text,10px)] pr-2 text-[14px] leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
                />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--hr-space-s,12px)] items-start relative shrink-0 w-full" data-node-id="3352:16473" data-name="Вакансии">
              {vacancySlots.map((slot) => (
                <div
                  key={slot.id}
                  className="content-stretch flex flex-col gap-[var(--hr-space-xs,8px)] items-start relative shrink-0 w-full"
                  data-name="Вакансия"
                >
                  <div className="content-stretch flex gap-[var(--hr-space-xs,8px)] items-start relative shrink-0 w-full" data-name="Вакансия · заголовок">
                    {slot.variant === "alice" ? (
                      <>
                        <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Иконка сервиса">
                          <div className="relative shrink-0 overflow-clip size-[16px]" data-name="формы для иконок сервисов">
                            <div
                              className="absolute inset-[0.12%_0_-0.12%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.019px] mask-size-[16px_16px]"
                              style={{
                                backgroundImage: "linear-gradient(21.823deg, rgb(200, 38, 255) 4.65%, rgb(84, 38, 255) 93.92%)",
                                maskImage: `url('${imgSvcMask16}')`,
                              }}
                              data-name="Алиса"
                            >
                              <div className="absolute inset-[22.92%_23.79%_26.69%_23.98%]">
                                <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgAliceFill} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Текст">
                          <div className="content-stretch flex gap-[var(--hr-space-2-xs,4px)] isolate items-center justify-center relative shrink-0" data-name="❇️ Link">
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[0px] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-center text-ellipsis whitespace-nowrap z-[2]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="font-sans font-medium leading-[24px] not-italic overflow-hidden text-[16px] text-[rgba(0,0,0,0.88)] text-ellipsis" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                                ML-разработчик в команду распознавания речи (Алиса)
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex font-sans font-normal gap-[var(--hr-space-xs,8px)] items-start leading-[0] relative shrink-0 text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] whitespace-nowrap" data-name="Теги">
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p>
                                <span className="leading-[var(--hr-line-height-body-s,20px)]">Специалист</span>
                                <span className="font-sans font-normal leading-[var(--hr-line-height-body-s,20px)] not-italic">{` — `}</span>
                                <span className="leading-[var(--hr-line-height-body-s,20px)]">Старший</span>
                              </p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-line-height-body-s,20px)]">·</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-line-height-body-s,20px)]">Офис, Гибрид</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Иконка сервиса">
                          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="формы для иконок сервисов">
                            <div className="absolute inset-0 bg-[#fc3f1d] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgSvcMask16}')` }} data-name="[Яндекс: знак, рус.]">
                              <div className="absolute inset-[20.05%_32.51%_19.95%_27.73%]" data-name="Vector">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgYandexYa} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Текст">
                          <div className="content-stretch flex gap-[var(--hr-space-2-xs,4px)] isolate items-center justify-center relative shrink-0" data-name="❇️ Link">
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[0px] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-center text-ellipsis whitespace-nowrap z-[2]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="font-sans font-medium leading-[24px] not-italic overflow-hidden text-[16px] text-[rgba(0,0,0,0.88)] text-ellipsis" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                                ML-разработчик в Вертикали
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[var(--hr-space-xs,8px)] items-start relative shrink-0" data-name="Теги">
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p>
                                <span className="leading-[var(--hr-line-height-body-s,20px)]">Старший</span>
                                <span className="font-sans font-normal leading-[var(--hr-line-height-body-s,20px)] not-italic">{` — `}</span>
                                <span className="leading-[var(--hr-line-height-body-s,20px)]">Ведущий</span>
                              </p>
                            </div>
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-line-height-body-s,20px)]">·</p>
                            </div>
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-line-height-body-s,20px)]">Офис, Гибрид</p>
                            </div>
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-line-height-body-s,20px)]">·</p>
                            </div>
                            <div className="content-stretch flex gap-[var(--hr-space-2-xs,4px)] items-center relative shrink-0" data-name="Открытая ротация">
                              <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--hr-color-spectre-orange-900,#b56f29)] text-[length:var(--hr-font-size-body-s,14px)] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                                <p className="leading-[var(--hr-line-height-body-s,20px)]">Только открытая ротация</p>
                              </div>
                              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Info">
                                <div className="absolute inset-[8.33%]" data-name="Vector">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <button
                      type="button"
                      className="flex shrink-0 cursor-pointer items-center justify-center rounded-[var(--hr-control-border-radius,10px)] p-1.5 text-[rgba(0,0,0,0.55)] transition-colors hover:bg-black/[0.04] active:bg-black/[0.06]"
                      aria-label="Удалить вакансию из отклика"
                      onClick={() => removeVacancySlot(slot.id)}
                    >
                      <IconTrashAlternative className="size-4 shrink-0" />
                    </button>
                  </div>
                  <div
                    className="relative flex min-h-[120px] w-full items-start rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))]"
                    data-name="❇️ Text Area"
                  >
                    <textarea
                      name={`cover-letter-${slot.id}`}
                      value={slot.coverLetter}
                      onChange={(e) => updateVacancyCoverLetter(slot.id, e.target.value)}
                      placeholder="Расскажите, чем ваш опыт может быть полезен именно для этой вакансии"
                      rows={4}
                      className="relative z-[2] min-h-[100px] w-full resize-none border-0 bg-transparent px-3 py-[var(--hr-control-space-text,10px)] font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--hr-space-m,16px)] items-start relative shrink-0 w-full" data-node-id="3352:16502" data-name="Блок с резюме">
            <div className="flex flex-col font-sans font-medium justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] text-[length:var(--hr-font-size-title-s,20px)] text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="3352:16503" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              <p className="leading-[var(--hr-line-height-title-s,24px)] overflow-hidden text-[20px] text-ellipsis">Расскажите о себе</p>
            </div>
            <div className="w-full min-w-0 max-w-full bg-[var(--hr-color-spectre-indigo-100,rgba(100,119,216,0.08))] content-stretch flex flex-col gap-[var(--hr-space-2-xl,32px)] items-start overflow-clip p-[var(--hr-space-xl,24px)] relative rounded-[var(--hr-border-radius-s,12px)]" data-node-id="3352:16504" data-name="Резюме">
              <div className="absolute bottom-[-14px] h-[79px] right-[-6.29px] w-[319.292px]" data-node-id="I3352:16504;4015:24151" data-name="Space">
                <div className="absolute inset-[0_0_0_-1.03%]">
                  <img alt="" className="block max-w-none size-full" src={imgSpace} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--hr-space-m,16px)] items-start relative shrink-0 w-full" data-node-id="I3352:16504;4015:24154" data-name="Верхний блок">
                <div className="content-stretch flex gap-[var(--hr-space-m,16px)] items-start relative shrink-0 w-full" data-node-id="I3352:16504;4015:24735" data-name="Заголовок + Кнопка">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="I3352:16504;4015:24736" data-name="Заголовок + Подзаголовок">
                    <div className="flex flex-col font-sans font-medium justify-end overflow-hidden relative shrink-0 text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-title-m,24px)] text-ellipsis w-full" data-node-id="I3352:16504;4015:24737" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                      <p className="leading-[var(--hr-line-height-title-m,28px)] overflow-hidden text-[24px] text-ellipsis">Разработчик Machine Learning</p>
                    </div>
                    <div className="flex flex-col font-sans font-normal justify-end overflow-hidden relative shrink-0 text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] text-ellipsis w-full" data-node-id="I3352:16504;4015:24738" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                      <p className="leading-[var(--hr-line-height-body-s,20px)] overflow-hidden text-[14px] text-ellipsis">Линейный руководитель</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--hr-space-xs,8px)] items-start relative shrink-0 w-full" data-node-id="I3352:16504;4015:24159" data-name="Грейд + Описание">
                  <div className="content-stretch flex gap-[var(--hr-space-xs,8px)] items-center relative shrink-0" data-node-id="I3352:16504;4015:24160" data-name="Грейд + Перформанс">
                    <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-body-m,16px)] text-ellipsis whitespace-nowrap" data-node-id="I3352:16504;4015:24161" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                      <p className="leading-[var(--hr-line-height-body-m,24px)] overflow-hidden text-[16px] text-ellipsis">17 грейд</p>
                    </div>
                    <div className="content-stretch flex gap-[var(--hr-space-2-xs-compact,2px)] items-center relative shrink-0" data-node-id="I3352:16504;4015:24162" data-name="Перформанс">
                      <div className="content-stretch flex gap-[var(--hr-space-2-xs,4px)] isolate items-center justify-center relative shrink-0" data-node-id="I3352:16504;4015:24163" data-name="Mark">
                        <div className="bg-[var(--hr-color-spectre-green-100,rgba(62,163,79,0.08))] content-stretch flex isolate items-center justify-center relative rounded-[var(--hr-control-border-radius-inner,6px)] shrink-0 w-[50px] z-[2]" data-node-id="I3352:16504;4015:24163;54249:3244" data-name="Tag">
                          <div className="content-stretch flex gap-[var(--hr-control-space-action,8px)] isolate items-center justify-center min-h-[24px] relative shrink-0 z-[3]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641986" data-name="Empty / —">
                            <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[2]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641986;46913:110412" data-name="">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                            </div>
                            <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[1]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641986;46913:110413" data-name="">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px py-[var(--hr-control-space-text,2px)] relative z-[2]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641987" data-name="Base">
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(--hr-color-spectre-green-900,#3a8146)] text-[length:var(--hr-control-font-size,14px)] text-center text-ellipsis w-full whitespace-nowrap z-[1]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641988" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-control-line-height,20px)] overflow-hidden text-[14px] text-ellipsis">16</p>
                            </div>
                          </div>
                          <div className="content-stretch flex isolate items-center justify-center min-h-[24px] px-[var(--hr-control-space-slot,0px)] relative shrink-0 z-[1]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641989" data-name="Slot →">
                            <div className="content-stretch flex isolate items-center justify-center min-h-[24px] min-w-[24px] relative shrink-0 z-[1]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641989;48033:216556" data-name="Slot">
                              <div className="relative shrink-0 size-[16px] z-[1]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641989;48033:216557" data-name="Icon">
                                <div className="absolute bg-[var(--hr-color-spectre-green-900,#3a8146)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px]" data-node-id="I3352:16504;4015:24163;54249:3244;30763:641989;48033:216560" style={{ maskImage: `url('${imgColor}')` }} data-name="← Color" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--hr-space-2-xs,4px)] isolate items-center justify-center relative shrink-0" data-node-id="I3352:16504;4015:24164" data-name="Mark">
                        <div className="bg-[var(--hr-color-spectre-blue-100,rgba(43,149,202,0.08))] content-stretch flex isolate items-center justify-center relative rounded-[var(--hr-control-border-radius-inner,6px)] shrink-0 w-[50px] z-[2]" data-node-id="I3352:16504;4015:24164;54249:3232" data-name="Tag">
                          <div className="content-stretch flex gap-[var(--hr-control-space-action,8px)] isolate items-center justify-center min-h-[24px] relative shrink-0 z-[3]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641992" data-name="Empty / —">
                            <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[2]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641992;46913:110412" data-name="">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                            </div>
                            <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[1]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641992;46913:110413" data-name="">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px py-[var(--hr-control-space-text,2px)] relative z-[2]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641993" data-name="Base">
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(--hr-color-spectre-blue-900,#2b7aa2)] text-[length:var(--hr-control-font-size,14px)] text-center text-ellipsis w-full whitespace-nowrap z-[1]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641994" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-control-line-height,20px)] overflow-hidden text-[14px] text-ellipsis">16</p>
                            </div>
                          </div>
                          <div className="content-stretch flex isolate items-center justify-center min-h-[24px] px-[var(--hr-control-space-slot,0px)] relative shrink-0 z-[1]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641995" data-name="Slot →">
                            <div className="content-stretch flex isolate items-center justify-center min-h-[24px] min-w-[24px] relative shrink-0 z-[1]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641995;48033:216556" data-name="Slot">
                              <div className="relative shrink-0 size-[16px] z-[1]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641995;48033:216557" data-name="Icon">
                                <div className="absolute bg-[var(--hr-color-spectre-blue-900,#2b7aa2)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px]" data-node-id="I3352:16504;4015:24164;54249:3232;30763:641995;48033:216560" style={{ maskImage: `url('${imgColor1}')` }} data-name="← Color" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--hr-space-2-xs,4px)] isolate items-center justify-center relative shrink-0" data-node-id="I3352:16504;4015:24165" data-name="Mark">
                        <div className="bg-[var(--hr-color-spectre-blue-100,rgba(43,149,202,0.08))] content-stretch flex isolate items-center justify-center relative rounded-[var(--hr-control-border-radius-inner,6px)] shrink-0 w-[50px] z-[2]" data-node-id="I3352:16504;4015:24165;54249:3232" data-name="Tag">
                          <div className="content-stretch flex gap-[var(--hr-control-space-action,8px)] isolate items-center justify-center min-h-[24px] relative shrink-0 z-[3]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641992" data-name="Empty / —">
                            <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[2]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641992;46913:110412" data-name="">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                            </div>
                            <div className="opacity-[var(--opacity\/transparent,1)] relative shrink-0 size-0 z-[1]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641992;46913:110413" data-name="">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px py-[var(--hr-control-space-text,2px)] relative z-[2]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641993" data-name="Base">
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(--hr-color-spectre-blue-900,#2b7aa2)] text-[length:var(--hr-control-font-size,14px)] text-center text-ellipsis w-full whitespace-nowrap z-[1]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641994" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-control-line-height,20px)] overflow-hidden text-[14px] text-ellipsis">17</p>
                            </div>
                          </div>
                          <div className="content-stretch flex isolate items-center justify-center min-h-[24px] px-[var(--hr-control-space-slot,0px)] relative shrink-0 z-[1]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641995" data-name="Slot →">
                            <div className="content-stretch flex isolate items-center justify-center min-h-[24px] min-w-[24px] relative shrink-0 z-[1]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641995;48033:216556" data-name="Slot">
                              <div className="relative shrink-0 size-[16px] z-[1]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641995;48033:216557" data-name="Icon">
                                <div className="absolute bg-[var(--hr-color-spectre-blue-900,#2b7aa2)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px]" data-node-id="I3352:16504;4015:24165;54249:3232;30763:641995;48033:216560" style={{ maskImage: `url('${imgColor1}')` }} data-name="← Color" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {withResumeAttached && blueCardAboutParagraph ? (
                    <div
                      className="relative w-full min-w-0 shrink-0"
                      data-node-id="I3352:16630;4015:24166"
                      data-name="О себе (кратко)"
                    >
                      <p
                        className="whitespace-pre-wrap font-sans text-[14px] font-normal leading-[var(--hr-line-height-body-s,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
                        style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
                      >
                        {blueCardAboutParagraph}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="content-stretch flex flex-col gap-[var(--hr-space-s,12px)] items-start relative shrink-0 w-full" data-node-id="I3352:16504;4015:24276" data-name="Резюме + Материалы">
                  <div className="content-stretch flex gap-[var(--hr-space-l,20px)] isolate items-start relative shrink-0 w-full" data-node-id="I3352:16504;4015:24277" data-name="❇️ Form Field">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--hr-space-xs,8px)] isolate items-start min-w-px relative z-[2]" data-node-id="I3352:16504;4015:24277;25662:18600" data-name="Form Field">
                      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[3]" data-node-id="I3352:16504;4015:24277;25662:18600;436:1969" data-name="Label">
                        <div className="content-stretch flex gap-[var(--hr-space-m,16px)] isolate items-start relative shrink-0 w-full z-[2]" data-node-id="I3352:16504;4015:24277;25662:18600;436:1969;13:966" data-name="Label">
                          <div className="content-stretch flex flex-[1_0_0] gap-[var(--hr-space-2-xs,4px)] isolate items-start min-w-px relative z-[2]" data-node-id="I3352:16504;4015:24277;25662:18600;436:1969;13:966;13:951" data-name="Text">
                            <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-control-font-size,14px)] text-ellipsis whitespace-nowrap z-[3]" data-node-id="I3352:16504;4015:24277;25662:18600;436:1969;13:966;13:952" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-control-line-height,20px)] overflow-hidden text-[14px] text-ellipsis">Резюме</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`content-stretch relative shrink-0 w-full min-w-0 z-[2] ${
                          withResumeAttached && resumeFileRowVisible
                            ? "flex flex-col"
                            : "flex flex-wrap gap-[var(--hr-space-xs,8px)] items-start"
                        }`}
                        data-node-id="I3352:16504;4015:24277;25662:18600;436:1970"
                        data-name="Component"
                      >
                        {withResumeAttached && resumeFileRowVisible ? (
                          <AttachedResumeFileRow
                            fileName={APPLY_WITH_RESUME_FILE_NAME}
                            onRemove={() => setDraft((d) => ({ ...d, resumeFileRowVisible: false }))}
                          />
                        ) : (
                          <>
                            <button
                              type="button"
                              className="relative isolate inline-flex min-h-[40px] shrink-0 cursor-pointer items-center gap-2 rounded-[var(--hr-control-border-radius,12px)] bg-[var(--hr-control-color-background,rgba(0,0,0,0.04))] px-[var(--hr-control-space-action,12px)] transition-colors hover:bg-[rgba(0,0,0,0.07)] active:bg-[rgba(0,0,0,0.09)]"
                              data-node-id="I3352:16504;4015:24277;25662:18600;436:1970;4015:25241"
                              data-name="❇️ Button"
                              onClick={() => onGenerateWithTeamAI?.()}
                            >
                              <div className="relative z-[2] flex size-[16px] shrink-0 items-center justify-center overflow-clip rounded-[var(--hr-border-radius-round,100px)] bg-[#f8604a]">
                                <div className="relative aspect-square w-[10px] overflow-clip">
                                  <div className="absolute inset-[4.17%_4.18%_4.15%_4.17%]">
                                    <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgVector10} />
                                  </div>
                                </div>
                              </div>
                              <span className="relative z-[2] py-[var(--hr-control-space-text,10px)] font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                                Сгенерировать с Я Team AI
                              </span>
                            </button>
                            <button
                              type="button"
                              className="relative isolate inline-flex min-h-[40px] shrink-0 cursor-pointer items-center gap-2 rounded-[var(--hr-control-border-radius,12px)] bg-[var(--hr-control-color-background,rgba(0,0,0,0.04))] px-[var(--hr-control-space-action,12px)] transition-colors hover:bg-[rgba(0,0,0,0.07)] active:bg-[rgba(0,0,0,0.09)]"
                              data-node-id="I3352:16504;4015:24277;25662:18600;436:1970;4015:25242"
                              data-name="❇️ Button"
                            >
                              <div className="relative z-[2] size-[16px] shrink-0">
                                <div
                                  className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] bg-[var(--hr-color-text-secondary,rgba(0,0,0,0.6))]"
                                  style={{ maskImage: `url('${imgColor2}')` }}
                                />
                              </div>
                              <span className="relative z-[2] py-[var(--hr-control-space-text,10px)] font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                                Загрузить файл
                              </span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--hr-space-l,20px)] isolate items-start relative shrink-0 w-full" data-node-id="I3352:16504;4015:24278" data-name="❇️ Form Field">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--hr-space-xs,8px)] isolate items-start min-w-px relative z-[2]" data-node-id="I3352:16504;4015:24278;25662:18600" data-name="Form Field">
                      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[3]" data-node-id="I3352:16504;4015:24278;25662:18600;436:1969" data-name="Label">
                        <div className="content-stretch flex gap-[var(--hr-space-m,16px)] isolate items-start relative shrink-0 w-full z-[2]" data-node-id="I3352:16504;4015:24278;25662:18600;436:1969;13:966" data-name="Label">
                          <div className="content-stretch flex flex-[1_0_0] gap-[var(--hr-space-2-xs,4px)] isolate items-start min-w-px relative z-[2]" data-node-id="I3352:16504;4015:24278;25662:18600;436:1969;13:966;13:951" data-name="Text">
                            <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-control-font-size,14px)] text-ellipsis whitespace-nowrap z-[3]" data-node-id="I3352:16504;4015:24278;25662:18600;436:1969;13:966;13:952" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                              <p className="leading-[var(--hr-control-line-height,20px)] overflow-hidden text-[14px] text-ellipsis">Дополнительные материалы</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative flex w-full items-stretch rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))]"
                        data-node-id="I3352:16504;4015:24278;25662:18600;436:1970"
                        data-name="Component"
                      >
                        <input
                          type="url"
                          name="portfolio"
                          value={portfolioLink}
                          onChange={(e) => setDraft((d) => ({ ...d, portfolioLink: e.target.value }))}
                          placeholder="Ссылка на портфолио, GitHub, личный проект"
                          className="relative z-[2] min-h-[40px] w-full border-0 bg-transparent px-3 py-[var(--hr-control-space-text,10px)] font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-[var(--hr-space-xs,8px)] text-left"
                data-node-id="I3352:16504;4015:24170"
                data-name="❇️ Checkbox"
                aria-pressed={wantRecruiterOffers}
                onClick={() => setDraft((d) => ({ ...d, wantRecruiterOffers: !d.wantRecruiterOffers }))}
              >
                <span className="relative z-[2] flex shrink-0 items-center justify-center">
                  <CheckboxBox checked={wantRecruiterOffers} />
                </span>
                <span className="font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                  Хочу получать предложения о подходящих вакансиях от рекрутеров
                </span>
              </button>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--hr-space-m,16px)] items-start relative shrink-0 w-full" data-node-id="3352:16505" data-name="Блок с настройками">
            <div className="flex flex-col font-sans font-medium justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[0px] text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="3352:16506" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              <p className="font-sans font-medium not-italic overflow-hidden text-[20px] text-ellipsis">
                <span className="leading-[24px]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>{`Почему вы хотите сменить команду? `}</span>
                <span className="leading-[24px] text-[#da4e4e]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                  *
                </span>
              </p>
            </div>
            <div
              className="relative flex w-full flex-wrap content-start items-start gap-[var(--hr-space-xs,8px)]"
              data-node-id="3352:16507"
              data-name="❇️ Tag · Group"
              role="group"
              aria-label="Почему вы хотите сменить команду"
            >
              {REASON_OPTIONS.map((label, index) => {
                const selected = selectedReasonIndices.includes(index);
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleReason(index)}
                    className={`relative min-h-[32px] cursor-pointer rounded-[var(--hr-control-border-radius,10px)] border border-solid px-3 py-[var(--hr-control-space-text,6px)] text-left font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] transition-colors [font-feature-settings:'lnum'_1,'pnum'_1] ${
                      selected
                        ? "border-[rgba(0,0,0,0.28)] bg-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.92)] hover:bg-[rgba(0,0,0,0.09)]"
                        : "border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))] text-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.03)]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            {selectedReasonIndices.includes(OTHER_REASON_INDEX) ? (
              <div className="relative box-border h-[60px] w-full overflow-hidden rounded-[var(--hr-control-border-radius,12px)] border border-solid border-[var(--hr-control-color-border,rgba(0,0,0,0.12))] bg-[var(--hr-control-color-background,rgba(255,255,255,0))]">
                <textarea
                  name="other-reason-detail"
                  value={otherReasonDetail}
                  onChange={(e) => setDraft((d) => ({ ...d, otherReasonDetail: e.target.value }))}
                  placeholder="Расскажите подробнее"
                  className="box-border h-full min-h-0 w-full resize-none border-0 bg-transparent px-3 py-2 font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] text-[rgba(0,0,0,0.88)] outline-none [font-feature-settings:'lnum'_1,'pnum'_1] placeholder:text-[var(--hr-color-text-tertiary,rgba(0,0,0,0.4))]"
                />
              </div>
            ) : null}
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="3352:16508" data-name="Чекбокс + Ссылка">
              <button
                type="button"
                className="flex cursor-pointer items-center gap-[var(--hr-space-xs,8px)]"
                data-node-id="3352:16509"
                data-name="❇️ Checkbox"
                aria-pressed={rulesAccepted}
                onClick={() => setDraft((d) => ({ ...d, rulesAccepted: !d.rulesAccepted }))}
              >
                <span className="relative z-[2] flex shrink-0 items-center justify-center">
                  <CheckboxBox checked={rulesAccepted} />
                </span>
                <span className="font-sans font-normal text-[14px] leading-[var(--hr-control-line-height,20px)] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                  Подтверждаю, что ознакомлен с правилами
                </span>
              </button>
              <div className="content-stretch flex gap-[var(--hr-space-2-xs,4px)] isolate items-center justify-center relative shrink-0" data-node-id="3352:16510" data-name="❇️ Link">
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[0px] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-center text-ellipsis whitespace-nowrap z-[2]" data-node-id="I3352:16510;25185:241976" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                  <p className="decoration-solid font-sans font-normal leading-[20px] not-italic overflow-hidden text-[14px] text-ellipsis underline" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    программы перехода в другую команду
                  </p>
                </div>
              </div>
              <p className="font-sans font-normal leading-[var(--hr-control-line-height,20px)] relative shrink-0 text-[color:var(--hr-color-spectre-red-500,#da4e4e)] text-[length:var(--hr-control-font-size,14px)] whitespace-nowrap" data-node-id="3352:16511" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                *
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--hr-space-s,12px)] items-start relative shrink-0 w-full" data-node-id="3352:16512" data-name="Кнопка + Подпись">
            <button
              type="button"
              disabled={!canSubmit}
              className={`content-stretch flex isolate cursor-pointer items-center justify-center rounded-[var(--hr-control-border-radius,12px)] border-0 px-0 transition-colors ${
                canSubmit
                  ? "bg-[rgba(0,0,0,0.88)] text-white hover:bg-black active:bg-black"
                  : "cursor-not-allowed bg-[var(--hr-control-color-background,rgba(0,0,0,0.04))] text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.2))]"
              }`}
              data-node-id="3352:16513"
              data-name="❇️ Button"
            >
              <Component className="content-stretch flex gap-[var(--hr-control-space-action,16px)] isolate items-center justify-center min-h-[40px] relative shrink-0 z-[3]" />
              <div className="content-stretch flex flex-col isolate items-center justify-center py-[var(--hr-control-space-text,10px)] relative shrink-0 z-[2]" data-node-id="I3352:16513;29192:214492" data-name="Base">
                <div
                  className={`flex flex-col font-sans font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[length:var(--hr-control-font-size,14px)] text-center text-ellipsis whitespace-nowrap z-[1] ${
                    canSubmit ? "text-white" : "text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.2))]"
                  }`}
                  data-node-id="I3352:16513;29192:214493"
                  style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
                >
                  <p className="leading-[var(--hr-control-line-height,20px)] overflow-hidden text-[14px] text-ellipsis">Откликнуться</p>
                </div>
              </div>
              <Component className="content-stretch flex gap-[var(--hr-control-space-action,16px)] isolate items-center justify-center min-h-[40px] relative shrink-0 z-[1]" />
            </button>
            {submitFootnote ? (
              <div className="flex flex-[1_0_0] flex-col font-sans font-normal justify-end leading-[0] min-w-px relative text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)]" data-node-id="3352:16514" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="leading-[var(--hr-line-height-body-s,20px)]">{submitFootnote}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="col-3 h-[296px] row-1 self-start shrink-0 sticky top-0 w-[400px]" data-node-id="3352:16515">
          <div className="absolute bottom-0 h-[264px] left-0 pointer-events-none top-[32px]">
            <div className="bg-[var(--hr-color-spectre-grey-100,rgba(0,0,0,0.04))] content-stretch flex flex-col gap-[var(--hr-space-m,16px)] items-start p-[var(--hr-space-l,20px)] pointer-events-auto rounded-[var(--hr-border-radius-s,12px)] sticky top-0 w-[400px]" data-node-id="3352:16516" data-name="Настройки приватности">
              <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] text-[length:var(--hr-font-size-title-s,20px)] text-ellipsis w-full whitespace-nowrap" data-node-id="3352:16517" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                <p className="leading-[var(--hr-line-height-title-s,24px)] overflow-hidden text-[20px] text-ellipsis">Настройки приватности</p>
              </div>
              <div className="content-stretch cursor-pointer flex flex-col gap-[var(--hr-space-m,16px)] items-start relative shrink-0 w-full" data-node-id="3352:16518" data-name="Согласия">
                <button
                  type="button"
                  className="flex w-full items-start gap-[var(--hr-space-xs,8px)] text-left"
                  data-node-id="3352:16519"
                  data-name="❇️ Checkbox"
                  aria-pressed={hideFromManager}
                  onClick={() => setDraft((d) => ({ ...d, hideFromManager: !d.hideFromManager }))}
                >
                  <span className="relative z-[2] flex shrink-0 items-center justify-center">
                    <CheckboxBox checked={hideFromManager} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-[var(--hr-space-2-xs,4px)] font-sans font-normal text-left">
                    <span className="text-[14px] leading-[var(--hr-control-line-height,20px)] text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                      Cкрыть отклик от своего руководителя
                    </span>
                    <span className="text-[14px] leading-[var(--hr-line-height-caption-m,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                      Он не узнает о вашей ротации до беседы с нанимающим менеджером, но часть вакансий будет недоступна
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-start gap-[var(--hr-space-xs,8px)] text-left"
                  data-node-id="3352:16520"
                  data-name="❇️ Checkbox"
                  aria-pressed={hideFromHr}
                  onClick={() => setDraft((d) => ({ ...d, hideFromHr: !d.hideFromHr }))}
                >
                  <span className="relative z-[2] flex shrink-0 items-center justify-center">
                    <CheckboxBox checked={hideFromHr} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-[var(--hr-space-2-xs,4px)] font-sans font-normal text-left">
                    <span className="text-[14px] leading-[var(--hr-control-line-height,20px)] text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                      Cкрыть отклик от HR-партнёра
                    </span>
                    <span className="text-[14px] leading-[var(--hr-line-height-caption-m,20px)] text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] [font-feature-settings:'lnum'_1,'pnum'_1]">
                      При переходе в другую команду он поможет, но до беседы с нанимающим менеджером можно ничего не рассказывать
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}