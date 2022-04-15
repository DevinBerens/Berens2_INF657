import React from "react";
import AppTextInput from "../shared/AppTextInput";
import ErrorHandler from "./ErrorHandler";
import { useFormikContext } from "formik";

let AppFormInput = (props) => {
  const { name } = props;
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...props}
      />
      <ErrorHandler error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormInput;
