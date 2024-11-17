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
        <GridBox className={"flex footer-icons"}>
          <NavBarLogo className={"footer-logo-container"} />
          <div className="icons">
            <div className="flex gap-2">
              <div className="icons-box">
                <p className="">Iris</p>
                <RoundedIconWithImg
                  className={"rounded-img"}
                  bg={"/imgs/facebook.png"}
                  link={"https://www.facebook.com/slots.iris"}
                />
              </div>
              <div className="icons-box">
                <p className="">Iris</p>
                <RoundedIconWithImg
                  className={"rounded-img"}
                  bg={"/imgs/telegram.png"}
                  link={"https://t.me/irisslot"}
                />
              </div>
              <div className="icons-box">
                <p className="">Iris</p>
                <RoundedIconWithImg
                  className={"rounded-img"}
                  bg={"/imgs/viber.png"}
                  link={"https://msng.link/o?959969000045=vi"}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="icons-box">
                <p className="">Queen</p>
                <RoundedIconWithImg
                  className={"rounded-img"}
                  bg={"/imgs/facebook.png"}
                  link={"https://www.facebook.com/slotqueen007"}
                />
              </div>
              <div className="icons-box">
                <p className="">Queen</p>
                <RoundedIconWithImg
                  className={"rounded-img"}
                  bg={"/imgs/telegram.png"}
                  link={"https://t.me/slotqueen007"}
                />
              </div>
              <div className="icons-box">
                <p className="">Queen</p>
                <RoundedIconWithImg
                  className={"rounded-img"}
                  bg={"/imgs/viber.png"}
                  link={"https://msng.link/o?959969000018=vi"}
                />
              </div>
            </div>
          </div>
        </GridBox>
        <GridBox className={"grid grid-3"}>
          <ItemsBox
            title={"Live Casino"}
            items={LiveCasino}
            // className={"grid-pos-2"}
          />
          <ItemsBox title={"Games"} items={Games} />
          <ItemsBox title={"Hot Leagues"} items={HotLeagues} />
          <ItemsBox title={"Mobile"} items={Mobile} />
          <ItemsBox title={"Sports"} items={Sport} />
          <ItemsBox
            title={"Help & Support"}
            items={HelpSupport}
            // className={"grid-pos-3"}
          />
        </GridBox>
        <div className="redirect">
          <p className="copy-right">
            {`@${date.getFullYear()} Iris | All Rights Reserved`}
            <a
              href="https://t.me/luffy_out"
              target="_blank"
              className="ownerShip"
            >
              Developed by Luffy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterCom;
