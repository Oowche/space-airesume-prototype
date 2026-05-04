/** Figma: Trash : Alternative · node 3367:20805 (mask asset from MCP) */
const TRASH_ALTERNATIVE_MASK_URL =
  "https://www.figma.com/api/mcp/asset/dbb07258-5915-4ada-ac46-2989974e4fd1";

type IconTrashAlternativeProps = {
  className?: string;
};

/**
 * Контурная корзина из макета; цвет и размер — через `className`
 * (например `size-4 text-[rgba(0,0,0,0.45)]`).
 */
export function IconTrashAlternative({ className }: IconTrashAlternativeProps) {
  return (
    <span
      aria-hidden
      className={`box-border shrink-0 bg-current ${className ?? ""}`}
      style={{
        maskImage: `url("${TRASH_ALTERNATIVE_MASK_URL}")`,
        WebkitMaskImage: `url("${TRASH_ALTERNATIVE_MASK_URL}")`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
