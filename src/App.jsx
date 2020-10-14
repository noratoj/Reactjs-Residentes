import React from '../Reactjs-Residentes-1/src/react';
import '../Reactjs-Residentes-1/src/typeface-roboto'

import {ThemeProvider} from '../Reactjs-Residentes-1/src/@material-ui/core/styles'

import theme from './temaConfig'
import Contenedor from './components/Contenedor';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Contenedor />
    </ThemeProvider>
  );
}

export default App;
