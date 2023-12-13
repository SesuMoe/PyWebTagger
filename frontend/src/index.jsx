import * as React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from "./theme";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
);