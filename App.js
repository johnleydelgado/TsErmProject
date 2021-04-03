import React from "react";
import { MainNav } from "./src/Navigator/index";
import { Provider } from "mobx-react";
import AppStore from "./src/Services/Store/store";
const store = (window.store = new AppStore());

const App = () => {
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
};

export default App;
