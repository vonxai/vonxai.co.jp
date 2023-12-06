import React from "react";
import Base from "./Base";

const NotFound = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <p className="text-center">404 Not Found.</p>
    </Base>
  );
};

export default NotFound;
export { Head } from "../Head";
