"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/lightbox";

export default function FaqImage({ src, question }: { src: string; question: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View answer sheet: ${question}`}
        className="block w-full max-w-sm cursor-zoom-in text-left"
      >
        <Image
          src={src}
          alt={`Answer: ${question}`}
          width={776}
          height={1024}
          className="w-full border border-line bg-surface"
        />
      </button>
      {open && (
        <Lightbox
          imgs={[src]}
          name={question}
          index={0}
          onClose={() => setOpen(false)}
          onNext={() => setOpen(false)}
        />
      )}
    </>
  );
}