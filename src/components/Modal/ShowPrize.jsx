import React from "react";
import Modal from "./Modal";
import "./showPrize.scss";
import { useSelector } from "react-redux";
import { selectLuckyObj } from "../../app/slices/WheelSlice";

const ShowPrize = (props) => {
  const luckyObj = useSelector(selectLuckyObj);
  return (
    <Modal onClose={props.onClose}>
      <div className="popup">
        <h1>Congratulations</h1>
        <div className="popup-detail">
          <div className="popup-detail-box">
            <span>Reward</span>
            <div className="popup-detail-box-item">{"demo"}</div>
          </div>
          <div className="popup-detail-box">
            <span>Lucky id.</span>
            <div className="popup-detail-box-item">{"demo"}</div>
          </div>
        </div>
        {/*<div className="reward-img">
          <img src={userReward.rewardImage} alt="Reward" />
        </div>*/}
        <div className="mm-text">
          Screen Shot ရိုက်ပြီး ကစားထားသော Agent တွင်ထုတ်ယူပါ
        </div>
      </div>
    </Modal>
  );
};

export default ShowPrize;
