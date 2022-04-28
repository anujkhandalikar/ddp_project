import classes from './Documents.module.css';
import { FileIcon } from './FileIcon';

export function Documents() {
  return (
    <div className={classes.root}>
      <FileIcon className={classes.file} />
      <div className={classes.dashboard}>Page 3</div>
    </div>
  );
}
