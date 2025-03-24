import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { CartProvider } from './Component/Context/CartContext'
import { WishlistProvider } from './Component/Context/WishlistContext'
import { Toaster } from 'react-hot-toast';

// Configure Redux Store
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Redux Provider */}
    <CartProvider> {/* Context API for Cart */}
      <WishlistProvider> {/* Context API for Wishlist */}
      <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  </Provider>
);
