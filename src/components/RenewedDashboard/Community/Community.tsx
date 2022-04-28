import classes from './Community.module.css';
import { CommunityIcon } from './CommunityIcon';

export function Community() {
  return (
    <div className={classes.root}>
      <CommunityIcon className={classes.community} />
      <div className={classes.dashboard}>Help</div>
    </div>
  );
}
