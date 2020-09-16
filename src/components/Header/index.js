import React from "react";

import { ToogleButton } from "../ToogleButton";

import "./styles.css";

export const Header = (props) => {
  return (
    <header className="header">
      <ToogleButton handleTheme={props.handleTheme} />
      <h1>
        Rick <span>and</span> Morty
      </h1>
    </header>
  );
};
