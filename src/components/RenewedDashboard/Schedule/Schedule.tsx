import classes from './Schedule.module.css';
import { ScheduleIcon } from './ScheduleIcon';

export function Schedule() {
  return (
    <div className={classes.root}>
      <ScheduleIcon className={classes.schedule} />
      <div className={classes.dashboard}>Page 2</div>
    </div>
  );
}
