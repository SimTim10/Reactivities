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
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}
const ActivityDashboard: React.FC<IProps> = ({
  activities,
  SelectActivity,
  activity,
  editMode,
  setEditMode
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
        {activity && !editMode && <ActivityDetails activity={activity} setEditMode={setEditMode} />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
