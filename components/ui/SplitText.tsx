import { cn } from "@/lib/utils";
import type { ElementType } from "react";

/**
 * Renders a semantic heading whose words are wrapped in overflow-hidden masks
 * so a client island can "set" them (translateY 110% -> 0) like letterpress.
 *
 * SSR-safe: the real text is in the DOM and visible by default. The reveal
 * gating CSS (html.js:not(.rm)) only hides the inner spans once JS confirms
 * motion is allowed, so no-JS / reduced-motion users see finished headings.
 */
type Props = {
  as?: ElementType;
  lines: string[];
  className?: string;
  lineClassName?: string;
  /** A single word to highlight with a sunflower knockout (matched case-insensitively, ignoring punctuation). */
  accent?: string;
};

const normalize = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();

export function SplitText({
  as: Tag = "h2",
  lines,
  className,
  lineClassName,
  accent,
}: Props) {
  const accentKey = accent ? normalize(accent) : null;

  return (
    <Tag className={cn("font-display", className)}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          <span key={li} className={cn("block", lineClassName)}>
            {words.map((word, wi) => {
              const isAccent = accentKey !== null && normalize(word) === accentKey;
              const isLast = wi === words.length - 1;
              return (
                <span
                  key={wi}
                  data-mask
                  className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]"
                >
                  <span data-mask-inner className="inline-block">
                    {isAccent ? (
                      <mark className="bg-sun px-[0.08em] text-surface">{word}</mark>
                    ) : (
                      word
                    )}
                    {!isLast ? " " : ""}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
