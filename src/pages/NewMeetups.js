import { useHistory } from "react-router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();

  function postNewMeetup(meetupData) {
    fetch(
      "https://react-tutorial-course-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h1>Create a new meetup</h1>
      <NewMeetupForm postNewMeetup={postNewMeetup} />
    </div>
  );
}

export default NewMeetupsPage;
