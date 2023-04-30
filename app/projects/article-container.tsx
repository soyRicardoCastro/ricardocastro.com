"use client";

import type { Project } from "@/.contentlayer/generated";
import { useRouter } from "next/navigation";

interface Props {
  slug: Project["slug"];
  children: React.ReactNode;
  variant: "featured" | "normal";
}

export function ArticleContainer({
  slug,
  children,
  variant = "normal",
}: Props) {
  const router = useRouter();

  return (
    <article
      className={
        variant === "normal"
          ? "p-4 md:p-8"
          : "relative h-full w-full p-4 md:p-8"
      }
      onClick={() => router.push(`/project/${slug}`)}
    >
      {children}
    </article>
  );
}
