import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
  SelectActivity: (id: string) => void;
  activity: IActivity | null;
}
const ActivityDashboard: React.FC<IProps> = ({
  activities,
  SelectActivity,
  activity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          SelectActivity={SelectActivity}
        ></ActivityList>
      </Grid.Column>
      <Grid.Column width={6}>
        {activity && <ActivityDetails activity={activity} />}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
