import { Link } from 'react-scroll/modules';
import s from './ExplorePlanets.module.scss';

const ExplorePlanets = () => {
  return (
    <div>
      <Link to="planets" smooth="true" duration={200}>
        <button className={s.scroll_button}>Explore Planets</button>
      </Link>
    </div>
  );
};

export default ExplorePlanets;
