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
      ? "-top-[100px] -left-[320px] md:-top-[310px] md:-left-[320px]"
      : "bottom-0 -right-[160px] md:bottom-[-310px] md:-right-[320px]";

  return (
    <div
      className={`w-[300px] h-[300px] md:w-[600px] md:h-[600px] absolute bg-cover bg-[url('/space.jpg')] ${positionClass} rotate-45 saturate-200 border-2 border-white`}
    />
  );
}
