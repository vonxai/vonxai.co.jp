import React from "react";
import { Works } from "../organisms/Works";
import Base from "./Base";

const Business = (data) => {
  return (
    <Base {...data}>
      <Works />
    </Base>
  );
};

export default Business;
export { Head } from "../Head";
