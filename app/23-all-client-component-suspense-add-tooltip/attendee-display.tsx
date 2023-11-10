import React from "react";

export default function AttendeeDisplay({ attendee }: { attendee: any }) {
  const formatDate = (date: Date) => {
    return date ? new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(date)) : null;
  };

  const DataPlaceholder = () => (
    <div
      className="data-placeholder"
      style={{
        height: '20px', // Fixed height for consistency
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        animation: 'placeholderPulse 1.5s infinite ease-in-out',
      }}
    ></div>
  );

  return (
    <>
      <style>
        {`
          @keyframes placeholderPulse {
            0% { background-color: #e0e0e0; }
            50% { background-color: #f0f0f0; }
            100% { background-color: #e0e0e0; }
          }

          .data-row {
            display: grid;
            grid-template-columns: minmax(100px, auto) minmax(200px, auto);
            grid-gap: 10px;
            align-items: center;
            margin-bottom: 10px;
          }

          .data-placeholder {
            width: 100%;
            min-height: 20px; // Ensures the placeholder has the same height as text
          }
        `}
      </style>
      <div
        className="card position-absolute"
        style={{
          top: "150%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "1060",
          backgroundColor: "lightblue",
          width: '24rem', // Increased width for more generous space
          padding: '2rem', // Increased padding for more space inside the card
          boxSizing: 'border-box',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{`${attendee.firstName} ${attendee.lastName}`}</h5>

          <div className="data-row">
            <strong>Email:</strong>
            {attendee.email ? <span>{attendee.email}</span> : <DataPlaceholder />}
          </div>

          <div className="data-row">
            <strong>Created:</strong>
            {formatDate(attendee.created) ? <span>{formatDate(attendee.created)}</span> : <DataPlaceholder />}
          </div>

          <div className="data-row">
            <strong>Updated:</strong>
            {formatDate(attendee.updatedAt) ? <span>{formatDate(attendee.updatedAt)}</span> : <DataPlaceholder />}
          </div>
        </div>
      </div>
    </>
  );
}