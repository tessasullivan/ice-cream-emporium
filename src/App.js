import React from 'react';
import './App.css';
import IceCream from './components/IceCream';
import StoreHeader from './components/storeHeader';

function App() {
  return (
    <main className="container">
      <StoreHeader />
      <IceCream />
    </main>
  );
}

export default App;
