import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [loadingState, setLoadingState] = useState(true);
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-tutorial-course-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.unshift(meetup);
        }
        setDataState(meetups);
        setLoadingState(false);
      });
  }, []);

  if (loadingState) {
    return (
      <div>
        <p>Content is loading ...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>This is the AllMeetups page</h1>
      <MeetupList meetups={dataState} />
    </div>
  );
}

export default AllMeetupsPage;
