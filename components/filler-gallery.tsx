"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/lightbox";

export default function FillerGallery({ sources }: { sources: string[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sources.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View shredded paper filler photo ${i + 1}`}
            className="block w-full cursor-zoom-in border border-line bg-surface text-left"
          >
            <Image
              src={src}
              alt=""
              width={800}
              height={600}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox
          imgs={sources}
          name="Shredded paper filler"
          index={open}
          onClose={() => setOpen(null)}
          onNext={setOpen}
        />
      )}
    </>
  );
}