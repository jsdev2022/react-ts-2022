import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { AppProvider } from './AppProvider';

render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
  document.querySelector('#root')
);
