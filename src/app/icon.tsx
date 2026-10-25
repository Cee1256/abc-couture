import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1b1017",
          color: "#ff8fba",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          letterSpacing: -0.5,
          fontFamily: "Georgia",
        }}
      >
        B
      </div>
    ),
    size,
  );
}
