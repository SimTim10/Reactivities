import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activity: IActivity | null;
  setEditMode: (editMode: boolean) => void;
}

const ActivityForm: React.FC<IProps> = ({ activity, setEditMode }) => {
  const handleInitializedForm = () => {
    if (activity) return activity;
    else
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      };
  };
  const [activityOnFormInitiate, setActivityOnFormInitiate] =
    useState<IActivity>(handleInitializedForm());

  const handleOnSubmitForm = () => {
    console.log(activityOnFormInitiate);
  };
  const handleOnChangeInput = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivityOnFormInitiate({ ...activityOnFormInitiate, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={() => handleOnSubmitForm()}>
        <Form.Input
          onChange={handleOnChangeInput}
          name="title"
          placeholder="title"
          value={activityOnFormInitiate?.title}
        />
        <Form.TextArea
          onChange={handleOnChangeInput}
          name="description"
          rows={2}
          placeholder="Description"
          value={activityOnFormInitiate?.description}
        />
        <Form.Input
          onChange={handleOnChangeInput}
          name="category"
          placeholder="Category"
          value={activityOnFormInitiate?.category}
        />
        <Form.Input
          onChange={handleOnChangeInput}
          name="date"
          type="date"
          placeholder="Date"
          value={activityOnFormInitiate?.date}
        />
        <Form.Input
          onChange={handleOnChangeInput}
          name="city"
          placeholder="City"
          value={activityOnFormInitiate?.city}
        />
        <Form.Input
          onChange={handleOnChangeInput}
          name="venue"
          placeholder="Venue"
          value={activityOnFormInitiate?.venue}
        />
        <Button floated="right" type="submit" color="green" content="Submit" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
