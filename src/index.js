import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Apptodo from './Apptodo';

// Import thirdweb provider and Goerli ChainId
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Matic=80001;

// Wrap your app with the thirdweb provider
const container1 = document.getElementById('root');
const root = createRoot(container1);
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    
    </ThirdwebProvider>
  </React.StrictMode>,
);
const container2 = document.getElementById('todo');
const todo = Apptodo(container2);
todo.render(
  <React.StrictMode>
    <Apptodo />
  </React.StrictMode>
);