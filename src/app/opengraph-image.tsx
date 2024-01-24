import { ImageResponse } from "next/og";

export const alt = "Ikram Maulana Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Ikram Maulana Portfolio
      </div>
    ),
    size
  );
}
