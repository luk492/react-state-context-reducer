import React from 'react';
import './App.css';
import Red from './components/reducer/reducer';
import { StateProvider } from './components/state-provider/state-provider';
import ThemedButton from './components/themed-buttom/themed-button';

function App() {

  const initialState = {
    theme: { primary: 'green' }
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };
        
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Red clicks="Clicks" />
        <ThemedButton>Dugme</ThemedButton>
      </div>
    </StateProvider>
  );
}

export default App;
