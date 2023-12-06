import React from "react";
import { CompanyInformation } from "../organisms/CompanyInformation";
import Base from "./Base";

const Company = (data) => {
  return (
    <Base {...data}>
      <CompanyInformation />
    </Base>
  );
};

export default Company;
export { Head } from "../Head";
