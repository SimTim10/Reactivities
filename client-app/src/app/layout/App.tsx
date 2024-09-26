import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter((a) => a.id === id)[0]);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5283/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar setEditMode={setEditMode} />
      <Container style={{ marginTop: "11em" }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          activity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
        ></ActivityDashboard>
      </Container>
    </Fragment>
  );
};

export default App;
