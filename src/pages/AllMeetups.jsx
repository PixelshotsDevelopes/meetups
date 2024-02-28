import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => { 
    setIsLoading(true);
    fetch("https://meetup2project-default-rtdb.firebaseio.com/allmeetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];
 
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <ul>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
