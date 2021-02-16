import * as React from 'react';
import { FunctionComponent } from 'react';
import './App.scss';
import { Header } from './components/Header/HeaderContent';
import { FlipClock } from './components/FlipClock/FlipClock';

const App: FunctionComponent = () => {
    return (
      <div className='App'>
        <Header/>
        <FlipClock/>
      </div>
    );
  };

  export default App;