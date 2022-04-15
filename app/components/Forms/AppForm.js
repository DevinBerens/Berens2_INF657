import React from "react";
import { Formik } from "formik";

let AppForm = (props) => {
  const { children } = props;

  return <Formik {...props}>{() => <>{children}</>}</Formik>;
};

export default AppForm;
