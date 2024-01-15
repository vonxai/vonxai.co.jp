import React from "react";
import { CompanyInformation } from "../organisms/CompanyInformation";
import Base from "./Base";
import { Profile } from "../organisms/Profile";

const Company = (data) => {
  return (
    <Base {...data}>
      <CompanyInformation />
      <Profile />
    </Base>
  );
};

export default Company;
export { Head } from "../Head";
