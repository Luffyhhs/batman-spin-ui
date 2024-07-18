import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  login,
  selectLoginMessage,
  selectLoginStatus,
  selectLoginUser,
} from "../app/slices/auth/AuthSlice";
import { useEffect } from "react";
import CustomInput from "../components/CustomInput";

let schema = yup.object().shape({
  name: yup.string().required("UserName is required."),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login({ api: "user/auth", userData: values }));
    },
  });
  const loginStatus = useSelector(selectLoginStatus);
  const loginUser = useSelector(selectLoginUser);
  const loginMessage = useSelector(selectLoginMessage);

  // console.log(loginStatus);
  useEffect(() => {
    if (loginStatus === "success") {
      navigate("user");
    } else {
      navigate("");
    }
  }, [loginUser, loginStatus]);
  return (
    <div>
      <h3>Login</h3>
      <p>Login to your account.</p>
      <div>{loginStatus == "fail" ? loginMessage : ""}</div>
      <form onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          label="Enter name"
          id="name"
          name="name"
          onChg={formik.handleChange("name")}
          onBlr={formik.handleBlur("name")}
          val={formik.values.name}
        />
        <div>{formik.touched.name && formik.errors.name}</div>
        <CustomInput
          type="password"
          label="Enter Password"
          id="password"
          name="password"
          onChg={formik.handleChange("password")}
          onBlr={formik.handleBlur("password")}
          val={formik.values.password}
        />
        <div>{formik.touched.password && formik.errors.password}</div>
        <button type="Submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
