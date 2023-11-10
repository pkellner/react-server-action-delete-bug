"use client";
import React, { useState } from "react";
import AttendeeModalDetail from "@/app/24-all-client-component-suspense-handle-fetch-abort/attendee-modal-detail";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({
  error,
}: {
  error: Error;
}) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default function AttendeeModal({
  children,
  attendee,
}: {
  children: React.ReactNode;
  attendee: any;
}) {
  const [showPopup, setShowPopup] = useState(false);

  console.log("AttendeeModal:render attendee:", attendee)

  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        console.log("onReset called", details);
      }}
    >
      <div className="position-relative d-inline-block">
        <div
          onMouseEnter={() => {
            setShowPopup(true);
          }}
          onMouseLeave={() => {
            setShowPopup(false);
          }}
        >
          {children}
        </div>
        {showPopup && <AttendeeModalDetail attendee={attendee} />}
      </div>
    </ErrorBoundary>
  );
}
