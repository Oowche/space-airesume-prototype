import { ASSETS } from "../assets/images";

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
        maskImage: `url("${ASSETS.trashIcon}")`,
        WebkitMaskImage: `url("${ASSETS.trashIcon}")`,
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
