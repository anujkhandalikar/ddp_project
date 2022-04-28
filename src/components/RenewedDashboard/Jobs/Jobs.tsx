import { JobIcon } from './JobIcon';
import classes from './Jobs.module.css';

export function Jobs() {
  return (
    <div className={classes.root}>
      <JobIcon className={classes.job} />
      <div className={classes.dashboard}>Page 1</div>
    </div>
  );
}
