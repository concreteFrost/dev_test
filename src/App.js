import style from './App.module.scss';
import Home from './components/Home/Home';
import Hero from './components/Hero/Hero';
import PlanetsData from './components/PlanetsData/PlanetsData'
import ExplorePlanets from './components/ExplorePlanets/ExplorePlanets';

const App = () => (
  <div className={style.main}>
    <ExplorePlanets/>
    <Hero />
    <Home />
    <div id='planets'><PlanetsData/></div>
  </div>
);

export default App;
