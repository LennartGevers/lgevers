import * as React from "react";
import type { Article } from "../types";
import { Chip } from "./Chip";

export interface ArticleCardProps extends Article {
  positionIndex: number;
}

export const ArticleCard = ({
  title,
  tags,
  desc,
  positionIndex,
}: ArticleCardProps): React.ReactNode => {
  return (
    <article
      className="bg-[var(--background-paper)]/90 border border-[var(--divider)] p-6 rounded-md shadow-lg transition hover:bg-[var(--background)]/100 hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${0.5 + positionIndex * 0.1}s` }}
    >
      <h2 className="text-lg font-semibold tracking-wide mb-1 text-[#e6e6e6]">
        {title}
      </h2>
      <p className="text-[#7fb4ff] text-sm mb-3">{desc}</p>
      <a
        href="#"
        className="text-[#7fb4ff] text-xs uppercase tracking-wider hover:underline mb-3 inline-block"
      >
        Read more
      </a>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
};
