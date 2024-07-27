import NavBarLogo from "../Logo/NavBarLogo";
import "./navBar.scss";
import NavItems from "../NavList/NavItems";
import { useSelector } from "react-redux";
import { selectLoginUser } from "../../app/slices/auth/AuthSlice";
import AfterLoginItems from "../NavList/AfterLoginItems";

const NavBar = () => {
  const loginUser = useSelector(selectLoginUser);

  return (
    <nav className="bar nav-bar">
      <NavBarLogo className={"logo-container"} />
      {loginUser !== null ? (
        <AfterLoginItems deposit={loginUser.deposits} />
      ) : (
        <NavItems />
      )}
    </nav>
  );
};

export default NavBar;
