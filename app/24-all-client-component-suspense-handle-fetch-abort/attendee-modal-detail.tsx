"use client";
import React, {Suspense, use, useEffect, useRef} from "react";
import AttendeeDisplay from "@/app/24-all-client-component-suspense-handle-fetch-abort/attendee-display";
import { fetchAttendee } from "@/app/24-all-client-component-suspense-handle-fetch-abort/lib";

import { ErrorBoundary } from "react-error-boundary";

export default function AttendeeModalDetail({ attendee }: { attendee: any }) {

    const abortControllerRef = useRef<AbortController | null>(null);
    console.log("AttendeeModalDetail:render abortControllerRef:", abortControllerRef.current);

    useEffect(() => {
        abortControllerRef.current = new AbortController();
        console.log("useEffect running", abortControllerRef.current);


        // Cleanup function to abort fetch when the component is unmounted
        return () => {
            console.log("useEffect cleanup running", abortControllerRef.current);
            // Abort the fetch operation when the component unmounts
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    const attendeePromise = fetchAttendee(attendee.id, abortControllerRef.current?.signal);

    return (
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
        <AttendeeDetailFull attendeePromise={attendeePromise} />
      </Suspense>

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
