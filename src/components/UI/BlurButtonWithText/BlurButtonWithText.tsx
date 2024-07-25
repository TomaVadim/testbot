import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import "./BlurButtonWithText.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: "blur" | "white" | "blue";
  rounded?: "none" | "md" | "lg" | "full";
  onClick?: () => void;
}

export const BlurButtonWithText: FC<Props> = ({
  children,
  rounded = "none",
  bgColor = "blue",
  onClick,
  ...props
}) => {
  const borderRadius =
    rounded === "none" ? 0 : rounded === "md" ? 8 : rounded === "lg" ? 16 : 20;

  const backgroundColor =
    bgColor === "blue"
      ? "var(--tg-theme-button-color)"
      : bgColor === "white"
      ? "var(--white-color)"
      : "var(--medium-white-button)";

  return (
    <button
      {...props}
      style={{
        borderRadius,
        backgroundColor,
        ...props.style,
      }}
      className="blur-button-with-text"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
