/** Те же маски и разметка, что на `JobApplicationPage` — узел «Грейд + Перформанс» */

const imgTagEmpty = "https://www.figma.com/api/mcp/asset/3b5b0b21-b727-45d8-a705-b5a5d97000aa";
const imgPerfPlus = "https://www.figma.com/api/mcp/asset/60aea194-f7f7-4b77-a29e-ea92fe6bcb7f";
const imgPerfPlusPlus = "https://www.figma.com/api/mcp/asset/4e55a507-cce4-46f9-8501-a6099846c058";

export default function GradePerformanceMarks() {
  return (
    <div className="relative flex shrink-0 items-center gap-[var(--hr-space-2-xs-compact,2px)]" data-name="Перформанс">
      <div className="relative flex shrink-0 items-center justify-center gap-[var(--hr-space-2-xs,4px)] isolate" data-name="Mark">
        <div className="relative z-[2] flex w-[50px] shrink-0 items-center justify-center isolate rounded-[var(--hr-control-border-radius-inner,6px)] bg-[var(--hr-color-spectre-green-100,rgba(62,163,79,0.08))]" data-name="Tag">
          <div className="relative z-[3] flex min-h-[24px] shrink-0 items-center justify-center gap-[var(--hr-control-space-action,8px)] isolate">
            <div className="relative z-[2] size-0 shrink-0 opacity-[var(--opacity\/transparent,1)]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgTagEmpty} />
            </div>
            <div className="relative z-[1] size-0 shrink-0 opacity-[var(--opacity\/transparent,1)]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgTagEmpty} />
            </div>
          </div>
          <div className="relative z-[2] flex min-w-px flex-[1_0_0] flex-col items-start isolate py-[var(--hr-control-space-text,2px)]">
            <div className="relative z-[1] w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-sans font-normal leading-[0] text-[color:var(--hr-color-spectre-green-900,#3a8146)] text-[length:var(--hr-control-font-size,14px)]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              <p className="overflow-hidden text-ellipsis text-[14px] leading-[var(--hr-control-line-height,20px)]">16</p>
            </div>
          </div>
          <div className="relative z-[1] flex shrink-0 items-center justify-center px-[var(--hr-control-space-slot,0px)] min-h-[24px] isolate">
            <div className="relative z-[1] flex min-h-[24px] min-w-[24px] shrink-0 items-center justify-center isolate">
              <div className="relative z-[1] size-[16px] shrink-0">
                <div
                  className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] bg-[var(--hr-color-spectre-green-900,#3a8146)]"
                  style={{ maskImage: `url('${imgPerfPlus}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex shrink-0 items-center justify-center gap-[var(--hr-space-2-xs,4px)] isolate" data-name="Mark">
        <div className="relative z-[2] flex w-[50px] shrink-0 items-center justify-center isolate rounded-[var(--hr-control-border-radius-inner,6px)] bg-[var(--hr-color-spectre-blue-100,rgba(43,149,202,0.08))]" data-name="Tag">
          <div className="relative z-[3] flex min-h-[24px] shrink-0 items-center justify-center gap-[var(--hr-control-space-action,8px)] isolate">
            <div className="relative z-[2] size-0 shrink-0 opacity-[var(--opacity\/transparent,1)]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgTagEmpty} />
            </div>
            <div className="relative z-[1] size-0 shrink-0 opacity-[var(--opacity\/transparent,1)]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgTagEmpty} />
            </div>
          </div>
          <div className="relative z-[2] flex min-w-px flex-[1_0_0] flex-col items-start isolate py-[var(--hr-control-space-text,2px)]">
            <div className="relative z-[1] w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-sans font-normal leading-[0] text-[color:var(--hr-color-spectre-blue-900,#2b7aa2)] text-[length:var(--hr-control-font-size,14px)]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              <p className="overflow-hidden text-ellipsis text-[14px] leading-[var(--hr-control-line-height,20px)]">16</p>
            </div>
          </div>
          <div className="relative z-[1] flex shrink-0 items-center justify-center px-[var(--hr-control-space-slot,0px)] min-h-[24px] isolate">
            <div className="relative z-[1] flex min-h-[24px] min-w-[24px] shrink-0 items-center justify-center isolate">
              <div className="relative z-[1] size-[16px] shrink-0">
                <div
                  className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] bg-[var(--hr-color-spectre-blue-900,#2b7aa2)]"
                  style={{ maskImage: `url('${imgPerfPlusPlus}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex shrink-0 items-center justify-center gap-[var(--hr-space-2-xs,4px)] isolate" data-name="Mark">
        <div className="relative z-[2] flex w-[50px] shrink-0 items-center justify-center isolate rounded-[var(--hr-control-border-radius-inner,6px)] bg-[var(--hr-color-spectre-blue-100,rgba(43,149,202,0.08))]" data-name="Tag">
          <div className="relative z-[3] flex min-h-[24px] shrink-0 items-center justify-center gap-[var(--hr-control-space-action,8px)] isolate">
            <div className="relative z-[2] size-0 shrink-0 opacity-[var(--opacity\/transparent,1)]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgTagEmpty} />
            </div>
            <div className="relative z-[1] size-0 shrink-0 opacity-[var(--opacity\/transparent,1)]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgTagEmpty} />
            </div>
          </div>
          <div className="relative z-[2] flex min-w-px flex-[1_0_0] flex-col items-start isolate py-[var(--hr-control-space-text,2px)]">
            <div className="relative z-[1] w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-sans font-normal leading-[0] text-[color:var(--hr-color-spectre-blue-900,#2b7aa2)] text-[length:var(--hr-control-font-size,14px)]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              <p className="overflow-hidden text-ellipsis text-[14px] leading-[var(--hr-control-line-height,20px)]">17</p>
            </div>
          </div>
          <div className="relative z-[1] flex shrink-0 items-center justify-center px-[var(--hr-control-space-slot,0px)] min-h-[24px] isolate">
            <div className="relative z-[1] flex min-h-[24px] min-w-[24px] shrink-0 items-center justify-center isolate">
              <div className="relative z-[1] size-[16px] shrink-0">
                <div
                  className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] bg-[var(--hr-color-spectre-blue-900,#2b7aa2)]"
                  style={{ maskImage: `url('${imgPerfPlusPlus}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
