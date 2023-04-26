import { DesignCardProps } from "@/types";
import Link from "next/link";
import CloudOpImage from "./cloudop-image";

export default function DesignCard({ item }: DesignCardProps) {
  return (
    <div className="w-full">
      <Link href={item.dribbble_url} target="_blank" rel="noopener noreferrer">
        <CloudOpImage
          className="mr-0 transition-all rounded-lg brightness-100 hover:brightness-75"
          src={item.image_url}
          width={800}
          height={600}
          alt={item.name}
          priority={true}
        />
      </Link>
    </div>
  );
}
