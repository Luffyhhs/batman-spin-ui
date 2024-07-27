import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  getSpin,
  login,
  selectLoginMessage,
  selectLoginStatus,
  selectLoginUser,
} from "../../app/slices/auth/AuthSlice";
import { useEffect } from "react";
import CustomInput from "../CustomInput";
import Modal from "./Modal";
import NavBarLogo from "../Logo/NavBarLogo";
import "./login.scss";

let schema = yup.object().shape({
  name: yup.string().required("UserName is required."),
  password: yup.string().required("Password is required"),
});

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      dispatch(login({ api: "user/auth", userData: values }));
    },
  });
  const loginStatus = useSelector(selectLoginStatus);
  const loginUser = useSelector(selectLoginUser);
  const loginMessage = useSelector(selectLoginMessage);

  // console.log(loginStatus);
  useEffect(() => {
    if (loginStatus === "success") {
      props.onClose();
    } else {
      navigate("");
    }
  }, [loginUser, loginStatus]);
  return (
    <Modal onClose={props.onClose}>
      <NavBarLogo className={"popup-logo"} />
      <div className="message">{loginStatus == "fail" ? loginMessage : ""}</div>
      <form onSubmit={formik.handleSubmit} className="login">
        <CustomInput
          type="text"
          label="Please Enter GameId"
          placeholder="GameId"
          id="name"
          name="name"
          onChg={formik.handleChange("name")}
          onBlr={formik.handleBlur("name")}
          val={formik.values.name}
          containerClass={"login-input"}
          cls={""}
        />
        <div className="message">
          {formik.touched.name && formik.errors.name}
        </div>
        <CustomInput
          type="password"
          label="Password"
          placeholder="Enter Password"
          id="password"
          name="password"
          onChg={formik.handleChange("password")}
          onBlr={formik.handleBlur("password")}
          val={formik.values.password}
          containerClass={"login-input"}
          cls={""}
        />
        <div className="message">
          {formik.touched.password && formik.errors.password}
        </div>
        <button type="Submit" className="btn">
          Login
        </button>
      </form>
    </Modal>
  );
};

export default Login;
