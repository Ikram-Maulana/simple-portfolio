"use client";

import { CloudOpImageProps } from "@/types";
import { CldImage } from "next-cloudinary";

export default function CloudOpImage({
  className,
  width,
  height,
  src,
  alt,
  style,
  priority,
}: CloudOpImageProps) {
  return (
    <CldImage
      className={className}
      width={width}
      height={height}
      src={src}
      alt={alt}
      format="webp"
      quality={75}
      style={style}
      priority={priority}
    />
  );
}
