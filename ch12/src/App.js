import { Provider } from "react-redux";
// import Counter from "./NonToolkit/Counter";
// import store from "./NonToolkit/store";
import Counter from "./UseToolkit/Counter";
import store from "./UseToolkit/store";
import User from "./UseToolkit/User";

function App() {
  return (
    // <Provider store={store}>
    //   <Counter />
    // </Provider>
    <Provider store={store}>
      <Counter></Counter>
      <User></User>
    </Provider>
  );
}

export default App;
