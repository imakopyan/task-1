import React, { Component } from 'react';
import s from './App.module.scss';
import FirstBlock from './components/FirstBlock/FirstBlock';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';

class App extends Component {
  render() {
    return (
      <div className={s.app}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />

      </div>
    );
  }
}

export default App;
