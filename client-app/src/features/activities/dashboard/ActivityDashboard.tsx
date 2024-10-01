import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
  activity: IActivity | null;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  editMode: boolean;
  onSelectActivity: (id: string) => void;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}
const ActivityDashboard: React.FC<IProps> = ({
  activities,
  activity,
  createActivity,
  editActivity,
  editMode,
  onSelectActivity: SelectActivity,
  setEditMode,
  setSelectedActivity,
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
        {activity && !editMode && (
          <ActivityDetails
            activity={activity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        )}
        {editMode && (
          <ActivityForm
            key={activity?.id || 0}
            activity={activity}
            createActivity={createActivity}
            editActivity={editActivity}
            setEditMode={setEditMode}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
