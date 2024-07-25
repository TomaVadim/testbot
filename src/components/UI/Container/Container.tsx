import { FC, HTMLAttributes, ReactNode } from "react";

import "./Container.css";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  padding?: number;
}

export const Container: FC<Props> = ({
  children,
  padding = 20,
  ...props
}): JSX.Element => {
  return (
    <section {...props} style={{ padding, ...props.style }}>
      {children}
    </section>
  );
};
