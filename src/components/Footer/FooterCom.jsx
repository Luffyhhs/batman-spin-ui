import React from "react";
import "./footerCom.scss";
import GridBox from "../Boxes/GridBox";
import NavBarLogo from "../Logo/NavBarLogo";
import ItemsBox from "../Boxes/ItemsBox";
import {
  Games,
  HelpSupport,
  HotLeagues,
  LiveCasino,
  Mobile,
  Sport,
} from "../../constants/Lists";
import RoundedIconWithImg from "../RoundedIconWithImg";

const FooterCom = () => {
  const date = new Date();

  return (
    <>
      <footer className="footer">
        <GridBox className={"grid grid-5"}>
          <NavBarLogo className={"footer-logo-container"} />
          <ItemsBox title={"Live Casino"} items={LiveCasino} />
          <ItemsBox title={"Games"} items={Games} />
          <ItemsBox title={"Hot Leagues"} items={HotLeagues} />
          <ItemsBox title={"Mobile"} items={Mobile} />
        </GridBox>
        <GridBox className={"grid grid-5"}>
          <ItemsBox title={"Sports"} items={Sport} className={"grid-pos-2"} />
          <ItemsBox
            title={"Help & Support"}
            items={HelpSupport}
            className={"grid-pos-3"}
          />
        </GridBox>
        <div className="redirect grid grid-3">
          <p className="copy-right">{`@${date.getFullYear()} Iris | All Rights Reserved`}</p>
          <div className="icons">
            <div className="icons-box">
              <RoundedIconWithImg
                className={"rounded-img"}
                bg={"/imgs/facebook.png"}
              />
              <p>Facebook</p>
            </div>
            <div className="icons-box">
              <RoundedIconWithImg
                className={"rounded-img"}
                bg={"/imgs/telegram.png"}
              />
              <p>Telegram</p>
            </div>
            <div className="icons-box">
              <RoundedIconWithImg
                className={"rounded-img"}
                bg={"/imgs/viber.png"}
              />
              <p>Viber</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCom;
