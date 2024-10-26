import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <div className="bg-primaryBlack h-20 w-full flex items-center p-5 justify-between my-2">
      <h4 className="uppercase text-xl font-bold text-primaryCream">
        <NavLink to="/">
          Goat <br></br>Electronics
        </NavLink>
      </h4>
      <div>
        <li className="flex p-3">
          <ul className="mx-2 px-2">
            <NavLink to="/Cart ">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-2xl  text-slate-300"
              />
            </NavLink>
          </ul>
          <ul className="mx-2 px-2">
            {" "}
            <NavLink to="/Profile ">
              <FontAwesomeIcon
                icon={faUser}
                className="text-2xl  text-slate-300 "
              />
            </NavLink>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
