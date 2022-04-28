import classes from './App.module.css';
import { RenewedDashboard } from './components/RenewedDashboard/RenewedDashboard';

export function App() {
  return (
    <div className={classes.root}>
      <RenewedDashboard />
    </div>
  );
}
