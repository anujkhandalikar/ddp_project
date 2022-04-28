import { Group18 } from '../Group18/Group18';
import { Group30 } from '../Group30/Group30';
import { Group31 } from '../Group31/Group31';
import { Group32 } from '../Group32/Group32';
import { Group33 } from '../Group33/Group33';
import classes from './Group36.module.css';

export function Group36() {
  return (
    <div className={classes.root}>
      <Group18 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
    </div>
  );
}
