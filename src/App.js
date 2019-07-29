import React from 'react';
import './App.css';
// import Header from './Header/Header.react';
// import Footer from './Footer/Footer.react';
import Content from './Content/Content.react';
import ove from '../src/o+ve.jpg'

function App() {
  const request= {
    bloodGroup: 'O+ve',
    location: 'Chennai',
    requiredUnit: 1,
    imgRef: ove
  }
  return (
    <div className="App">
        <Content request={request} />
    </div>
  );
}

export default App;
