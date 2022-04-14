// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import { AppProvider } from "./AppProvider";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <AppProvider />
//   </StrictMode>
// );

import React from 'react';
import { render } from 'react-dom';

import { AppProvider } from './AppProvider';

render(<AppProvider />, document.querySelector('#root'));
