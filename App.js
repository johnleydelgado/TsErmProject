import React from "react";
import { MainNav } from "./src/Navigator/index";
import { Provider } from "mobx-react";
import AppStore from "./src/Services/Store/store";
import {enableScreens} from 'react-native-screens';
const store = (window.store = new AppStore());

const App = () => {
  enableScreens(false);
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
};

export default App;
