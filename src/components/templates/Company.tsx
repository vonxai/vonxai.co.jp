import React from "react";
import { CompanyInformation } from "../organisms/CompanyInformation";
import Base from "./Base";

const Company = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext} title="会社概要">
      <CompanyInformation />
    </Base>
  );
};

export default Company;
