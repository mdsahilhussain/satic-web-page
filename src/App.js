// import logo from './logo.svg';
import './App.css';

import{ Article, Brand, CTA, Feature, Navbar } from './components'
import{Footer , Blog, Possibility, Features, Header, WhatGPT3} from './containers'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
