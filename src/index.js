import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from './components/app';

// ReactDOM.render(<App/>, document.getElementById('root'));
render(<App/>, document.getElementById('root'))