import { ReactElement } from "react";

interface FloatingSquareProps {
  location: "top" | "bottom";
  background: string;
}

export default function FloatingSquare({
  location,
}: FloatingSquareProps): ReactElement {
  const positionClass =
    location === "top"
      ? "-top-[200px] -left-[210px] lg:-top-[310px] lg:-left-[320px]"
      : "bottom-[-200px] -right-[210px] lg:bottom-[-310px] lg:-right-[320px]";

  return (
    <div
      className={`w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] absolute bg-cover bg-[url('/space.jpg')] ${positionClass} rotate-45 saturate-200 border-2 border-white`}
    />
  );
}
