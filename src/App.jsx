import React from "react";
import "./styles/App.scss";

// external libs
import { BrowserRouter, Route } from "react-router-dom";

// screens
import Main from "./screens/Main";

// components
import Menu from "./components/Menu";

const screens = [
  { label: `Project list`, url: `/`, exact: true, component: Main },
  {
    label: `About`,
    url: `/about`,
    exact: true,
    component: props => <div>about</div>
  },
  {
    label: `Contact`,
    url: `/contact`,
    exact: true,
    component: props => <div>contact</div>
  }
];

const App = () => (
  <BrowserRouter>
    <div className="app">
      <div className="topBar">
        <div className="menu">
          <Menu items={screens} />
        </div>
      </div>
      {screens.map(({ url, exact, component, render }, i) => (
        <Route
          key={`screen_${i}`}
          path={url}
          exact={exact}
          component={component}
          render={render}
        />
      ))}
    </div>
  </BrowserRouter>
);

export default App;
