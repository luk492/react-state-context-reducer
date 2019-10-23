import React from 'react';
import './App.css';
import { StateProvider } from './components/state-provider/state-provider';
import { useStateValue } from './components/state-provider/state-provider';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const ThemedButton = React.lazy(() => import('./components/themed-buttom/themed-button'));

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
    <React.Fragment>
      <Router>
        <div className="App">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/btn">Btn</Link>
          <Link className="link" to="/inc">Inc</Link>
          <React.Suspense fallback={<div>Loading...</div>}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <Switch>
                <div className="content">
                  <Route exact path="/"/>
                  <Route path="/btn" component={ThemedButton}/>
                  <Route path="/inc" component={IncBtn}/>
                </div>
              </Switch>
            </StateProvider>
          </React.Suspense>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
