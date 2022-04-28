import { Community } from '../Community/Community';
import { Dashboard } from '../Dashboard/Dashboard';
import { Documents } from '../Documents/Documents';
import { Jobs } from '../Jobs/Jobs';
import { Logout } from '../Logout/Logout';
import { Schedule } from '../Schedule/Schedule';
import { Statistics } from '../Statistics/Statistics';
import classes from './MenuNavigation.module.css';

export function MenuNavigation() {
  return (
    <div className={classes.root}>
      <div className={classes.rectangle1}></div>
      <div className={classes.frame2}>
        <Dashboard />
      </div>
      <Jobs />
      <Schedule />
      <Documents />
      <Statistics />
      <Community />
      <Logout />
      <div className={classes.upgradeIllustration}></div>
      <div className={classes.logo}>
        RBG <br />
        Crash-Analytics
        <br />
        Dashboard
      </div>
    </div>
  );
}
