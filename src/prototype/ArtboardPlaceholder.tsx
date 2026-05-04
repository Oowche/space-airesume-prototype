import { figmaFrameUrl } from "./registry";

type Props = {
  title: string;
  figmaFrameId: string;
};

export default function ArtboardPlaceholder({ title, figmaFrameId }: Props) {
  const url = figmaFrameUrl(figmaFrameId);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#f5f5f5] px-6 py-16">
      <div className="max-w-lg rounded-xl border border-black/10 bg-white p-8 shadow-sm">
        <h2 className="text-lg font-medium text-black/90">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-black/60">
          Экран из файла Figma (Page 18). Интерактивная вёрстка для этого артборда не сгенерирована — откройте макет в Figma или закажите перенос отдельных фреймов.
        </p>
        <p className="mt-4 font-mono text-xs text-black/40">node-id={figmaFrameId}</p>
        <a
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-black/85"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          Открыть в Figma
        </a>
      </div>
    </div>
  );
}
