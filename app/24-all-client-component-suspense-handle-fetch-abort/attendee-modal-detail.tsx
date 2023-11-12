// When running this, because of strict mode, you will see the following error:
// fetch aborted when it first runs
// This is because strict mode causes the component to run twice.
// The first time it creates the promise, and then immediately kills it,
// the second time the popup stays open and the promise can run until completion or aborted

"use client";
import React, { Suspense, use, useEffect, useRef, useState } from "react";
import AttendeeDisplay from "@/app/24-all-client-component-suspense-handle-fetch-abort/attendee-display";
import { fetchAttendee } from "@/app/24-all-client-component-suspense-handle-fetch-abort/lib";

export default function AttendeeModalDetail({ attendee }: { attendee: any }) {
  const [messagePromise, setMessagePromise] = useState<any>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    console.log(
      "AttendeeModalDetail: useEffect: abortControllerRef.current:",
      abortControllerRef.current,
    );

    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;
    setMessagePromise(() => fetchAttendee(attendee.id, signal));

    console.log(
      "AttendeeModalDetail: useEffect: abortControllerRef.current:",
      abortControllerRef.current,
    );

    return () => {
      console.log(
        "AttendeeModalDetail:cleanup: useEffect: abortControllerRef.current:",
        abortControllerRef.current,
      );
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <>
      {messagePromise && (
        <Suspense
          fallback={
            <AttendeeDisplay
              attendee={{
                id: attendee.id,
                firstName: attendee.firstName,
                lastName: attendee.lastName,
              }}
            />
          }
        >
          <AttendeeDetailFull attendeePromise={messagePromise} />
        </Suspense>
      )}
    </>
  );
}

function AttendeeDetailFull({ attendeePromise }: { attendeePromise: any }) {
  const attendee: any = use(attendeePromise);
  //console.log("AttendeeDetailFull: attendee:", attendee);

  return (
    <div
      className="card position-absolute"
      style={{
        top: "150%",
        left: "70%",
        transform: "translateX(-50%)",
        zIndex: "1060",
        backgroundColor: "lightblue",
      }}
    >
      <AttendeeDisplay attendee={attendee} />
    </div>
  );
}
