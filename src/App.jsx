//import UseMemoExample from "./components/UseMemoExample";
//import UseRefRenderCountExample from "./components/UseRefRenderCountExample";
//import UseRefStoreValueExample from "./components/UseRefStoreValueExample";
//import UseRefForwardRefExample from "./components/UseRefForwardRefExample";
import Header from "./components/Header/Header";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider/AuthProvider";
import FormLogin from "./components/FormLogin";

const App = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <FormLogin />;
  }

  return (
    <div>
      <Header />
      <main>
        {/*<UseMemoExample /> */}
        {/*<UseRefRenderCountExample /> */}
        {/*<UseRefStoreValueExample /> */}
        {/*<UseRefForwardRefExample /> */}
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          illo incidunt harum laudantium ad ratione at fugiat cupiditate, vero
          delectus repellendus, labore architecto accusamus recusandae sed esse.
          Dolore, et possimus.
        </h2>
        <button onClick={logout}>Logout</button>
      </main>
    </div>
  );
};

export default App;
