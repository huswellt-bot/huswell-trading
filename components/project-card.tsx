"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/lightbox";
import type { Project } from "@/lib/site-data";

export default function ProjectCard({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  const count = project.imgs.length;
  const rest = project.imgs.slice(1, 4);

  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={() => setOpen(index)}
        aria-label={`View ${project.name} photos`}
        className="block w-full cursor-zoom-in text-left"
      >
        <div className="relative aspect-[4/3] border border-line bg-surface transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1">
          <Image
            key={project.imgs[index]}
            src={project.imgs[index]}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </button>
      <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{project.name}</h3>
      {rest.length > 0 && (
        <div className="mt-4 flex gap-3">
          {rest.map((src, i) => {
            const thumbIndex = i + 1;
            const active = thumbIndex === index;
            return (
              <button
                key={src}
                type="button"
                onClick={() => {
                  setIndex(thumbIndex);
                  setOpen(thumbIndex);
                }}
                aria-label={`View image ${thumbIndex + 1} of ${count}`}
                className={`border transition-colors duration-300 ${
                  active ? "border-accent-hover" : "border-line"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  width={400}
                  height={300}
                  className={`aspect-[4/3] w-14 object-cover transition-opacity duration-300 sm:w-16 md:w-20 ${
                    active ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
      {open !== null && (
        <Lightbox
          imgs={project.imgs}
          name={project.name}
          index={open}
          onClose={() => setOpen(null)}
          onNext={setOpen}
        />
      )}
    </article>
  );
}
