"use client";
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const API_KEY = process.env.GOOGLE_API_KEY as string;
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

interface Event {
  summary: string;
  start: {
    dateTime: string;
  };
}

const GoogleCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(
          () => {
            handleAuthentication();
          },
          (error: Error) => {
            console.error(error);
          }
        );
    });
  }, []);

  const handleAuthentication = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance) {
      gapi.auth2.init({ client_id: CLIENT_ID, scope: SCOPES }).then(() => {
        authenticateWithGoogle();
      });
    } else {
      authenticateWithGoogle();
    }
  };

  const authenticateWithGoogle = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(
        () => {
          listUpcomingEvents();
        },
        (error: Error) => {
          console.error(error);
        }
      );
  };

  const listUpcomingEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      })
      .then((response: any) => {
        setEvents(response.result.items as Event[]);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=renthousedev%40gmail.com&ctz=America%2FArgentina%2FCordoba"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      {events.map((event, i) => (
        <div key={i}>
          <h3>{event.summary}</h3>
          <p>{event.start.dateTime}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleCalendar;
