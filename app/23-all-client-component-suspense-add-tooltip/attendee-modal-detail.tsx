"use client";
import React from "react";

export default function({id, email} : { id: string, email: string}) {

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
      <div className="card-body">{email}</div>
    </div>
  )
}