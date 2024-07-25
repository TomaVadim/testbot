import { FC, ReactNode } from "react";

import CheckedIcon from "@/assets/CheckedIcon.svg";

import "./Stepper.css";

interface Props {
  children?: string | ReactNode;
  status?: "active" | "completed" | "disabled";
}

export const Stepper: FC<Props> = ({ status, children }): JSX.Element => {
  return (
    <div className={`stepper stepper-${status}`}>
      <div className={`stepper-icon stepper-${status}-icon`}>
        {status === "completed" && <img src={CheckedIcon} alt="checkmark" />}
      </div>

      <span className={`stepper-text stepper-${status}-text`}>{children}</span>
    </div>
  );
};
