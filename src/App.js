import React from 'react';
import './App.css';
import { StateProvider } from './components/state-provider/state-provider';
import ThemedButton from './components/themed-buttom/themed-button';
import { useStateValue } from './components/state-provider/state-provider';

function App() {

  const initialState = {
    theme: { primary: 'green' },
    counter: 0
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };
      case 'increment':
        return {
          ...state,
          counter: state.counter + 1
        };
        
      default:
        return state;
    }
  };

  const IncBtn = () => {
    const [{ counter }, dispatch] = useStateValue();
    return (
      <button onClick={() => dispatch({type:'increment'})}>Click {counter}</button>
    );
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <IncBtn />
        <ThemedButton>Dugme</ThemedButton>
      </div>
    </StateProvider>
  );
}

export default App;
