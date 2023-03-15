import React, { Component, useContext } from 'react'
import ClickHovertwo from './component/ClickHovertwo';
import Clikcount from './component/clikcount';
import Clikcountertwo from './component/Clikcountertwo';
import { valnum } from './component/Context';
import Countertwo from './component/Countertwo';
import Datafetching from './component/Datafetching';
import Form from './component/Form';
import Fragment from './component/Fragment';
import Hero from './component/Hero';
import HookMouse from './component/HookMouse';
import IntervelHookcounter from './component/IntervelHookcounter';
import Mousecontainer from './component/Mousecontainer';
import Onhover from './component/Onhover';
import Portaldemo from './component/Portaldemo';
import Refdemo from './component/Refdemo';
//import Home from './pages/Home'
//import About from './pages/About'
import Stylesheet from './component/Stylesheet'
import Table from './component/Table';
import User from './component/User';


class App extends Component {

   
 
  render() {
    return (
      <>
      
   <Datafetching/>
  

      {/*<Fragment />
      <Form/>
         <IntervelHookcounter/>
      <Mousecontainer/>
          <HookMouse/>
      <Clikcountertwo/>
        <Countertwo render={(counter,increment)=><Clikcountertwo counter={counter} increment={increment}/>}/>
      <ClickHovertwo/>
      <Clikcountertwo/>
       <User render={(isloggedin)=>isloggedin ? "Ajitkumar" :"guest" }/>
       <Clikcount name="A"/>
      <Onhover name="B"/>
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