import { type FC, HTMLAttributes, ReactNode } from "react";

import "./ShareButton.css";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  rounded?: "none" | "md" | "lg" | "full";
  url: string;
  text?: string;
  icon?: string;
}

export const ShareButton: FC<Props> = ({
  children,
  rounded = "none",
  icon,
  url,
  text = "Share",
  ...props
}) => {
  const borderRadius =
    rounded === "none" ? 0 : rounded === "md" ? 8 : rounded === "lg" ? 16 : 20;

  return (
    <a
      href={`https://t.me/share/url?url=${url}&text=${text}`}
      {...props}
      style={{
        borderRadius,
        ...props.style,
      }}
      className="share-button"
    >
      <img src={icon} alt="icon" />
      {children}
    </a>
  );
};
