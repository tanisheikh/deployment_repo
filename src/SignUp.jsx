import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Input from "./common/Input";
import { Button } from "primereact/button";
import { object, string, number, date, InferType } from "yup";

const SignUp = () => {
  let validationSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email(),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log("formik.values.error", formik.errors.lastName);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        htmlFor="firstName"
        label="FirstName"
        errorsMsg={formik.errors.lastName}
      />
      <Input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        htmlFor="lastName"
        label="lastName"
      />
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        htmlFor="email"
        label="Email Address"
      />
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        htmlFor="password"
        label="Password"
      />
      <Button type="submit">SignUp</Button>
    </form>
  );
};

export default SignUp;
