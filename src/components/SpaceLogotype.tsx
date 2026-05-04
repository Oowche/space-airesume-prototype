/** Figma ni019tIFEDibMqnuKM005o · node 3370:20830 «Logotype» */

const SPACE_LOGO_MASK = "https://www.figma.com/api/mcp/asset/1858dedf-0fd2-48af-8c0f-103db44b48e5";
const SPACE_LOGO_MARK = "https://www.figma.com/api/mcp/asset/d93af6e4-83bc-4d30-a65a-25d4770c7ce7";
const SPACE_LOGO_WORDMARK = "https://www.figma.com/api/mcp/asset/7f30dccc-db18-4613-8cc3-31b4ed0342c6";

type SpaceLogotypeProps = {
  className?: string;
};

export default function SpaceLogotype({ className }: SpaceLogotypeProps) {
  return (
    <div
      className={`isolate flex items-end justify-center gap-[var(--hr-space-xs,8px)] ${className ?? ""}`}
      data-node-id="3370:20830"
      data-name="Logotype"
    >
      <div className="relative z-[2] size-[32px] shrink-0" data-name="Logo Space">
        <div className="absolute left-[1.6px] top-[1.6px] contents">
          <div
            className="absolute left-[-3.95px] top-[-4.04px] h-[40.484px] w-[40.308px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.547px_5.637px] mask-size-[28.8px_28.8px]"
            style={{ maskImage: `url('${SPACE_LOGO_MASK}')` }}
          >
            <div className="absolute inset-[0_0_-1.19%_0]">
              <img alt="" className="block size-full max-w-none" src={SPACE_LOGO_MARK} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] h-[32px] w-[74px] shrink-0">
        <img alt="Space" className="absolute inset-0 block size-full max-w-none" src={SPACE_LOGO_WORDMARK} />
      </div>
    </div>
  );
}
