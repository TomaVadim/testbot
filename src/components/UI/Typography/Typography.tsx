import { FC, HTMLAttributes } from "react";

import "./Typography.css";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  variant?: "h1" | "h2" | "h3" | "tiny";
  weight?: "bold" | "semibold" | "medium";
  textAlign?: "left" | "center" | "right";
  textColor?: "white" | "black" | string;
}

export const Typography: FC<Props> = ({
  children,
  variant = "h3",
  weight = "medium",
  textAlign = "left",
  textColor = "black",
  ...props
}) => {
  const fontSize =
    variant === "h1" ? 32 : variant === "h2" ? 20 : variant === "h3" ? 16 : 13;

  const fontWeight =
    weight === "bold" ? 800 : weight === "semibold" ? 500 : 400;

  const color =
    textColor === "white"
      ? "var(--white-color)"
      : textColor === "black"
      ? "var(--bg-color)"
      : textColor;

  return (
    <span
      className="typography"
      {...props}
      style={{
        fontSize,
        fontWeight,
        textAlign,
        color,
        ...props.style,
      }}
    >
      {children}
    </span>
  );
};
