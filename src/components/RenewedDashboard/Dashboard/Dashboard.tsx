import classes from './Dashboard.module.css';
import { DashboardIcon } from './DashboardIcon';

export function Dashboard() {
  return (
    <div className={classes.root}>
      <DashboardIcon className={classes.dashboard} />
      <div className={classes.dashboard_2}>HomePage</div>
    </div>
  );
}
