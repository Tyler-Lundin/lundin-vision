"use client"
import Image from "next/image";

export default function BackgroundTexture({ x = true, top = true, bottom = true }: { x?: boolean; top?: boolean; bottom?: boolean }) {
  return (
    <>
      <Image quality={20} src="/images/paper-texture.webp" alt="Paper texture" fill className="object-cover opacity-25 dark:invert absolute inset-0 -z-10" />
      {x && <div className="absolute inset-0  bg-gradient-to-r from-white via-transparent to-white/75 -z-10 dark:from-black dark:via-transparent dark:to-black/75" />}
      {bottom && <div className="absolute inset-0  bg-gradient-to-b from-transparent via-transparent to-white/75 -z-10 dark:from-black dark:via-transparent dark:to-black/75" />}
      {top && <div className="absolute inset-0  bg-gradient-to-t from-transparent via-transparent to-white/75 -z-10 dark:from-black dark:via-transparent dark:to-black/75" />}
      </>
  );
}