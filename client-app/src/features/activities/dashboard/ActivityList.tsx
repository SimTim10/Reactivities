import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import React from "react";

interface IProps {
  activities: IActivity[];
  SelectActivity: (id: string) => void;
}

const ActivityList: React.FC<IProps> = ({ activities, SelectActivity }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date.toString()}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city},{activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => SelectActivity(activity.id)}
                  floated="right"
                  content="view"
                  color="blue"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
