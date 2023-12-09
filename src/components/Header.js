import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";

const Header = () => {
  const showAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch(authActions.logout());
    console.log("isAuth", showAuth);
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {showAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onclickHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
