import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import "./ButtonWithIcon.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  rounded?: "none" | "md" | "lg" | "full";
  icon?: string;
  onClick?: () => void;
}

export const ButtonWithIcon: FC<Props> = ({
  children,
  rounded = "none",
  icon,
  onClick,
  ...props
}) => {
  const borderRadius =
    rounded === "none" ? 0 : rounded === "md" ? 8 : rounded === "lg" ? 16 : 20;

  return (
    <button
      {...props}
      style={{
        borderRadius,
        ...props.style,
      }}
      className="button-with-icon"
      onClick={onClick}
    >
      <img src={icon} alt="icon" />
      {children}
    </button>
  );
};
