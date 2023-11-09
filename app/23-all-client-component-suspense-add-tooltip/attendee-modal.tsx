'use client'
import React, {useState} from "react";

export default function AttendeeModal({children, attendee}: { children: React.ReactNode, attendee: any }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="position-relative d-inline-block">
      <div
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >
        {children}
      </div>
      {showPopup && (
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
          <div className="card-body">{attendee.email}</div>
        </div>
      )}
    </div>
  );
}