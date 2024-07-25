import { FC, HTMLAttributes } from "react";
import "./Image.css";

interface Props extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

export const Image: FC<Props> = ({ src, alt, ...props }): JSX.Element => {
  return (
    <div className="image-fullwidth-wrapper" {...props}>
      <img src={src} className="image-fullwidth" alt={alt || "image"} />
    </div>
  );
};
