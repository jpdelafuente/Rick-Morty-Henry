import SearchBar from "../Search/SearchBar";
import style from "./Nav.module.css"
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const { onSearch, setAccess } = props;

  const { pathname }  = useLocation()

  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className={style.container}>

      {   
        pathname.includes("/home") &&
           <SearchBar onSearch={onSearch} />
      } 

      <Link to="/home" >
        <button className={style.btn}>Home</button>
      </Link>

      <Link to="/favorites" >
        <button className={style.btn}>Favorites</button>
      </Link>

      <Link to="/about" >
        <button className={style.btn}>About</button>
      </Link>
      
      <button onClick={handleLogOut} className={style.btn}>LOG OUT</button>
    </div>
  );
};

export default Nav;
