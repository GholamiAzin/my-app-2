import './App.css';
import Header from './Header.js';
import Body from "./Body.js";
import Url from "./Url.js";
import SubUrl from './SubUrl.js';
import Askmenu from './Askmenu.js';

function App() {
  return (
    <>
      <Header/>
      {/* <Body/>why? */}
      <Url name={'Item1'}/>
      <SubUrl name={'sub-item1'}/>
      <SubUrl name={'sub-item2'}/>
      <SubUrl name={'sub-item3'}/>
      <SubUrl name={'sub-item4'}/>
      <Url name={'Item2'}/>
      <Url name={'Item3'}/>
      <Url name={'Item4'}/>
      <Askmenu/>
      <Url name={'Item5'}/>
      <Url name={'Item6'}/>
    </>
  );
}

export default App;
