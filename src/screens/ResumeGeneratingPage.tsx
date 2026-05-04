import SpaceLogotype from "../components/SpaceLogotype";

const imgImage = "https://www.figma.com/api/mcp/asset/68168bde-57f2-415e-8404-33ff7e57a0c4";
const imgVector = "https://www.figma.com/api/mcp/asset/bd1cf65c-efc7-4c22-8db3-798125289681";
const imgBefore = "https://www.figma.com/api/mcp/asset/fc2227aa-0761-41af-b890-36af1d21be53";
const imgAfter = "https://www.figma.com/api/mcp/asset/f400e867-fab3-4e04-be21-e92c578c9c01";
const imgBefore1 = "https://www.figma.com/api/mcp/asset/52a36848-d3fe-45f6-a34d-07fdce36e624";
const imgAfter1 = "https://www.figma.com/api/mcp/asset/a8b5dc74-d21b-4379-a207-27c2f2a2d2bf";
const imgVector1 = "https://www.figma.com/api/mcp/asset/3f8d18dc-f24f-453f-b55a-3750fc016b5e";
const imgVector2 = "https://www.figma.com/api/mcp/asset/36b79087-d62b-41ab-aa9a-fd7616a1a98b";
const imgVector3 = "https://www.figma.com/api/mcp/asset/4e1d74ac-510e-4e34-b628-a751b01cf87d";
const imgVector4 = "https://www.figma.com/api/mcp/asset/bd416516-8a68-4d9b-ada7-2d3e17d7d316";
const imgVector5 = "https://www.figma.com/api/mcp/asset/134c3b66-34c6-42d0-b757-78e1757ea399";

type ControlUserProps = {
  className?: string;
};

function ControlUser({ className }: ControlUserProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(----hr-color-surface-100,white)] content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-round,100px)] size-[var(----hr-size-control-m,40px)]"
      }
      data-node-id="3352:9805"
    >
      <div
        className="flex-[1_0_0] h-full min-w-px relative rounded-[var(----hr-border-radius-round,100px)] z-[1]"
        data-node-id="3352:9806"
        data-name="Image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(----hr-border-radius-round,100px)] size-full"
          src={imgImage}
        />
      </div>
    </div>
  );
}

export default function ResumeGeneratingPage() {
  return (
    <div
      className="bg-[var(--hr-color-surface-100,white)] content-stretch flex flex-col gap-[var(--hr-space-2-xl,32px)] items-center pb-[80px] relative min-h-screen w-full"
      data-node-id="3352:16521"
      data-name="Х"
    >
      <div
        className="content-stretch flex gap-[var(----hr-space-2-xl,32px)] isolate items-center justify-center px-[var(----hr-space-2-xl,32px)] py-[var(----hr-space-s,12px)] relative shrink-0 w-full"
        data-node-id="3352:16522"
        data-name="Page · Header"
      >
        <div
          className="content-stretch flex gap-[var(----hr-space-xs,8px)] isolate items-center justify-center relative shrink-0 z-[3]"
          data-node-id="I3352:16522;9434:6746"
          data-name="← Left"
        >
          <div
            className="content-stretch flex isolate items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 z-[2]"
            data-node-id="I3352:16522;9434:6747"
            data-name="Icon Button"
          >
            <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16522;9434:6747;4383:7041" data-name="← Icon">
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2"
                data-node-id="I3352:16522;9434:6747;4383:7041;922:2465"
                data-name="Vector"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
          <SpaceLogotype className="relative shrink-0 z-[1]" />
        </div>
        <div
          className="content-stretch flex flex-[1_0_0] gap-[var(----hr-space-xs,8px)] isolate items-center min-w-px relative z-[2]"
          data-node-id="I3352:16522;11296:9967"
          data-name="Tab Menu"
        >
          <div
            className="content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 z-[8]"
            data-node-id="I3352:16522;11296:10074"
            data-name="_ Page Header / Tab Menu / Item"
          >
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16522;11296:10074;11296:7770" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore} />
            </div>
            <div
              className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]"
              data-node-id="I3352:16522;11296:10074;11296:7772"
              data-name="Text"
            >
              <div
                className="flex flex-col font-[family-name:var(----hr-font-family-default,'YS Text',sans-serif)] font-[var(----hr-font-weight-400,normal)] justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]"
                data-node-id="I3352:16522;11296:10074;11296:7773"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Главная</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16522;11296:10074;11296:7774" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter} />
            </div>
          </div>
          <div
            className="content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 z-[7]"
            data-node-id="I3352:16522;11296:10053"
            data-name="_ Page Header / Tab Menu / Item"
          >
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16522;11296:10053;11296:7584" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore} />
            </div>
            <div
              className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]"
              data-node-id="I3352:16522;11296:10053;11296:7586"
              data-name="Text"
            >
              <div
                className="flex flex-col font-[family-name:var(----hr-font-family-default,'YS Text',sans-serif)] font-[var(----hr-font-weight-400,normal)] justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-primary,rgba(0,0,0,0.9))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]"
                data-node-id="I3352:16522;11296:10053;11296:7587"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Вакансии</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16522;11296:10053;11296:7588" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter} />
            </div>
          </div>
          <div
            className="content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 z-[6]"
            data-node-id="I3352:16522;11296:10060"
            data-name="Item"
          >
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16522;11296:10060;11296:7770" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore1} />
            </div>
            <div
              className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]"
              data-node-id="I3352:16522;11296:10060;11296:7772"
              data-name="Text"
            >
              <div
                className="flex flex-col font-[family-name:var(----hr-font-family-default,'YS Text',sans-serif)] font-[var(----hr-font-weight-400,normal)] justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]"
                data-node-id="I3352:16522;11296:10060;11296:7773"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Мой кабинет</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16522;11296:10060;11296:7774" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter1} />
            </div>
          </div>
          <div
            className="content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-s,12px)] shrink-0 z-[5]"
            data-node-id="I3352:16522;11296:10046"
            data-name="Item"
          >
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[3]" data-node-id="I3352:16522;11296:10046;11296:7770" data-name="Before">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBefore1} />
            </div>
            <div
              className="content-stretch flex isolate items-center justify-center min-h-[40px] relative shrink-0 z-[2]"
              data-node-id="I3352:16522;11296:10046;11296:7772"
              data-name="Text"
            >
              <div
                className="flex flex-col font-[family-name:var(----hr-font-family-default,'YS Text',sans-serif)] font-[var(----hr-font-weight-400,normal)] justify-center leading-[0] overflow-hidden relative shrink-0 text-[color:var(----hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(----hr-font-size-s,14px)] text-center text-ellipsis whitespace-nowrap z-[1]"
                data-node-id="I3352:16522;11296:10046;11296:7773"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                <p className="leading-[var(----hr-font-size-s,20px)] overflow-hidden text-[14px] text-ellipsis">Как всё устроено</p>
              </div>
            </div>
            <div className="h-[40px] min-h-[40px] relative shrink-0 w-[12px] z-[1]" data-node-id="I3352:16522;11296:10046;11296:7774" data-name="After">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAfter1} />
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[var(----hr-space-m,16px)] isolate items-center justify-center relative shrink-0 z-[1]"
          data-node-id="I3352:16522;9434:6749"
          data-name="→ Right"
        >
          <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-node-id="I3352:16522;10648:54597" data-name="Button · Group">
            <div
              className="content-stretch flex isolate items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0"
              data-node-id="I3352:16522;10648:54599"
              data-name="Icon Button"
            >
              <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16522;10648:54599;4383:7041" data-name="Icon">
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2"
                  data-node-id="I3352:16522;10648:54599;4383:7041;922:2595"
                  data-name="Vector"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex isolate items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0"
              data-node-id="I3352:16522;10648:54600"
              data-name="Icon Button"
            >
              <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16522;10648:54600;4383:7041" data-name="Icon">
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.877px] left-[calc(50%+0.47px)] top-1/2 w-[21.395px]"
                  data-node-id="I3352:16522;10648:54600;4383:7041;922:2570"
                  data-name="Vector"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex isolate items-center justify-center p-[var(----hr-space-s,12px)] relative rounded-[var(----hr-border-radius-s,12px)] shrink-0"
              data-node-id="I3352:16522;10648:54601"
              data-name="Icon Button"
            >
              <div className="relative shrink-0 size-[16px] z-[2]" data-node-id="I3352:16522;10648:54601;4383:7041" data-name="Icon">
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[22px] left-1/2 top-1/2 w-[18px]"
                  data-node-id="I3352:16522;10648:54601;4383:7041;922:2562"
                  data-name="Vector"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
          </div>
          <ControlUser className="bg-[var(----hr-color-surface-100,white)] content-stretch flex isolate items-center justify-center relative rounded-[var(----hr-border-radius-round,100px)] shrink-0 size-[40px] z-[1]" />
        </div>
      </div>
      <div
        className="grid max-w-[1280px] w-full shrink-0 grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] gap-x-5 gap-y-[var(--hr-space-xl,24px)] px-[var(--hr-space-xl,24px)] relative rounded-[var(--hr-border-radius-l,20px)]"
        data-node-id="3352:16523"
        data-name="Content"
      >
        <div
          className="col-[3/span_8] row-2 flex shrink-0 flex-col items-center justify-center justify-self-stretch self-start py-[var(--hr-space-4-xl,48px)] relative isolate"
          data-node-id="3352:16524"
          data-name="❇️ State · Empty"
        >
          <div
            className="relative z-[1] flex w-full shrink-0 flex-col items-center justify-center gap-[var(--hr-space-m,16px)] isolate"
            data-node-id="I3352:16524;35781:81069"
            data-name="Component"
          >
            <div
              className="relative z-[4] h-[132px] w-[198px] max-w-full shrink-0 overflow-clip"
              data-node-id="I3352:16524;35781:81069;47626:269127"
              data-name="Image"
            >
              <div className="absolute inset-[11.05%_17.15%_7.51%_16.67%]" data-node-id="I3352:16524;35781:81069;47626:269127;6088:22407" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
              </div>
              <div className="absolute inset-[6.83%_15.59%_16.02%_19.13%]" data-node-id="I3352:16524;35781:81069;47626:269127;6088:22424" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[var(--hr-space-2-xs,4px)] isolate items-center justify-center leading-[0] relative shrink-0 text-center w-full z-[3]"
              data-node-id="I3352:16524;35781:81069;47626:269128"
              data-name="Text"
            >
              <div
                className="flex flex-col font-[family-name:var(--hr-font-family,'YS Text',sans-serif)] font-[var(--hr-font-weight-medium,normal)] justify-center overflow-hidden relative shrink-0 text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))] text-[length:var(--hr-font-size-body-m,16px)] text-ellipsis w-full z-[2]"
                data-node-id="I3352:16524;35781:81069;47626:269128;3126:790"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                <p className="leading-[var(--hr-line-height-body-m-compact,20px)] text-[16px]">Генерируем резюме</p>
              </div>
              <div
                className="flex flex-col font-[family-name:var(--hr-font-family,'YS Text',sans-serif)] font-[var(--hr-font-weight-regular,normal)] justify-center overflow-hidden relative shrink-0 text-[color:var(--hr-color-text-secondary,rgba(0,0,0,0.6))] text-[length:var(--hr-font-size-body-s,14px)] text-ellipsis w-full z-[1]"
                data-node-id="I3352:16524;35781:81069;47626:269128;3126:791"
                style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
              >
                <p className="leading-[var(--hr-line-height-body-s,20px)] text-[14px]">Это займёт пару минут</p>
              </div>
            </div>
            <div
              className="relative z-[1] flex shrink-0 items-center justify-center isolate"
              data-node-id="I3352:16524;35781:81069;47626:269132"
              data-name="Button · Group"
            >
              <div
                className="size-6 shrink-0 rounded-full border-2 border-solid border-[rgba(0,0,0,0.12)] border-t-[rgba(0,0,0,0.55)] animate-spin"
                role="status"
                aria-label="Загрузка"
              />
            </div>
          </div>
        </div>
        <div
          className="col-[3/span_8] content-stretch flex flex-col gap-[var(--hr-space-2-xs,4px)] items-start justify-self-stretch leading-[0] relative row-1 self-start shrink-0 text-[color:var(--hr-color-text-primary,rgba(0,0,0,0.88))]"
          data-node-id="3352:16525"
          data-name="Заголовок + Подпись"
        >
          <div
            className="flex flex-col font-[family-name:var(--hr-font-family-alt,'YS_Display:Medium',sans-serif)] font-[var(--hr-font-weight-medium,normal)] justify-end overflow-hidden relative shrink-0 text-[length:var(--hr-font-size-display-s,32px)] text-ellipsis whitespace-nowrap"
            data-node-id="3352:16526"
            style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
          >
            <p className="leading-[var(--hr-line-height-display-s,36px)] text-[32px]">Черновик резюме</p>
          </div>
          <div
            className="flex flex-col font-[family-name:var(--hr-font-family,'YS Text',sans-serif)] font-[var(--hr-font-weight-regular,normal)] justify-end min-w-full relative shrink-0 text-[length:var(--hr-font-size-body-s,14px)] w-[min-content]"
            data-node-id="3352:16527"
            style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
          >
            <p className="leading-[var(--hr-line-height-body-s,20px)]">
              {
                "Отредактируйте резюме на\u00A0этой странице: мы соберём из\u00A0него PDF-файл и\u00A0приложим его к\u00A0отклику, чтобы рекрутер и\u00A0нанимающий менеджер могли лучше вас узнать"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
