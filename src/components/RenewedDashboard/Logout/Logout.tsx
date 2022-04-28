import classes from './Logout.module.css';
import { LogOutIcon } from './LogOutIcon';

export function Logout() {
  return (
    <div className={classes.root}>
      <LogOutIcon className={classes.logOut} />
      <div className={classes.dashboard}>Logout</div>
    </div>
  );
}
