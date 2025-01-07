import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider.jsx";
import { LangContext } from "../../context/LangProvider/LangProvider.jsx";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { lang, changeLang } = useContext(LangContext);
  return (
    <header>
      <h2> Hooks</h2>
      <h3>Welcom,{user}</h3>
      <h3>Lang:{lang}</h3>
      <button onClick={changeLang}>Swich Lang</button>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
export default Header;
