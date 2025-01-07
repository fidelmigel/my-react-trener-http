import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const FormLogin = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} type="text" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default FormLogin;
