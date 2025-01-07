//import UseContextExample from "./components/UseContextExample/UseContextExample";
import UseMemoExample from "./components/UseMemoExample";
import UseRefRenderCountExample from "./components/UseRefRenderCountExample";
//import UseRefStoreValueExample from "./components/UseRefStoreValueExample";
//import UseRefForwardRefExample from "./components/UseRefForwardRefExample";

const App = () => {
  return (
    <div>
      {/*<Header /> */}
      <main>
        <UseMemoExample />
        <UseRefRenderCountExample />
        {/*<UseRefStoreValueExample /> */}
        {/*<UseRefForwardRefExample /> */}
        {/* <UseContextExample /> */}
      </main>
    </div>
  );
};

export default App;
