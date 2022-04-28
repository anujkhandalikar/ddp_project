import { Component2 } from './Component2/Component2';
import { Group13 } from './Group13/Group13';
import { Group21 } from './Group21/Group21';
import { Group22 } from './Group22/Group22';
import { Group23 } from './Group23/Group23';
import { Group24 } from './Group24/Group24';
import { Group26Icon } from './Group26Icon';
import { Group36 } from './Group36/Group36';
import { MenuNavigation } from './MenuNavigation/MenuNavigation';
import classes from './RenewedDashboard.module.css';
import { VariableGroupIcon } from './VariableGroupIcon';

export function RenewedDashboard() {
  return (
    <div className={classes.root}>
      <MenuNavigation />
      <div className={classes.visualAnalytics}>Visual Analytics</div>
      <div className={classes.rectangle11}></div>
      <Component2 />
      <div className={classes.group38}>
        <div className={classes.rectangle4}></div>
        <div className={classes.overallStatistics}>Overall Statistics</div>
        <Group36 />
      </div>
      <div className={classes.variableGroup}>
        <VariableGroupIcon className={classes.variableGroup_2} />
        <div className={classes.frame26}>
          <div className={classes.analyticsOutline}>
            <div className={classes.line27}></div>
            <div className={classes.line28}></div>
            <Group26Icon className={classes.group26} />
          </div>
        </div>
        <div className={classes.chartType}>Chart-Type</div>
        <div className={classes.location}>Location</div>
        <div className={classes.xAxis}>X-Axis</div>
        <div className={classes.accidentSeverity}>
          Accident-
          <br />
          Severity
        </div>
        <div className={classes.timeFrame}>Time Frame</div>
        <div className={classes.yAxis}>Y-Axis*</div>
        <Group13 />
        <div className={classes.variables}>Variables</div>
        <Group24 />
        <Group21 />
        <Group22 />
        <Group23 />
      </div>
    </div>
  );
}
