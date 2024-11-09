import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTerms } from "../app/slices/TermsSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./terms.scss";
import CustomButton from "../components/Buttons/CustomButton";

const Terms = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const terms = useSelector((state) => state.terms.terms);
  useEffect(() => {
    dispatch(fetchTerms({ api: "uiThing?settingName=Terms" }));
  }, []);
  console.log(terms);
  const text = terms?.split("\n");
  console.log(text);
  const termsAndPolicy = text?.map((tx, i) => {
    return (
      <p className="terms-text" key={i}>
        {tx}
      </p>
    );
  });
  return (
    <>
      <div className="btn-bar">
        <CustomButton
          text={"Back"}
          icon={<FaArrowLeft />}
          className={"flex flex-reverse btn btn-next"}
          onClickFun={() => nav(-1)}
        />
        <CustomButton
          text={"Winner List"}
          icon={<FaArrowRight />}
          className={"flex btn btn-next"}
          onClickFun={() => nav("/winners")}
        />
      </div>
      <div className="terms">{termsAndPolicy}</div>
    </>
  );
};

export default Terms;
