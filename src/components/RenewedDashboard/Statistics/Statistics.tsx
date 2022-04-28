import classes from './Statistics.module.css';
import { StatsIcon } from './StatsIcon';

export function Statistics() {
  return (
    <div className={classes.root}>
      <StatsIcon className={classes.stats} />
      <div className={classes.dashboard}>Viz Analytics</div>
    </div>
  );
}
