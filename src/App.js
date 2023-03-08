import React, { Component } from 'react'
import Clikcount from './component/clikcount';
import Form from './component/Form';
import Fragment from './component/Fragment';
import Hero from './component/Hero';
import Onhover from './component/Onhover';
import Portaldemo from './component/Portaldemo';
import Refdemo from './component/Refdemo';
//import Home from './pages/Home'
//import About from './pages/About'
import Stylesheet from './component/Stylesheet'
import Table from './component/Table';


class App extends Component {
 
  render() {
    return (
      <>
     
      <Clikcount/>
      <Onhover/>
    

      {/*<Fragment />
      <Form/>
      <Hero heroname="batman"/>
      <Hero heroname="superman"/>
      <Hero heroname="ajitkumar"/>
       <Portaldemo/>
      <Table/>
      <Refdemo/>
    */}
    
      </>
      );
    }

}

export default App