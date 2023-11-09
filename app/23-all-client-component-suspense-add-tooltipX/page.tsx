"use client";

import { Suspense } from "react";
import { fetchMessage } from "@/app/23-all-client-component-suspense-add-tooltip/lib";
import Message from "@/app/23-all-client-component-suspense-add-tooltip/message";

export default function App() {
  const messagePromise1 = fetchMessage("9210bbec-432d-4f2d-aac9-8435e69d1ca9");
  // const messagePromise2 = fetchMessage("79cc02fa-e008-45d9-9785-f7784a66f585");
  // const messagePromise3 = fetchMessage("d914a9cd-9cb0-4c97-8ebf-e8f468d9b9b9");

  //const promises = [messagePromise1, messagePromise2, messagePromise3];



  return (
    <div className="container mt-5">
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<div>Loading...</div>}>
            <Message messagePromise={messagePromise1} />
          </Suspense>
          {/*{promises.map((promise) => (*/}
          {/*  <Suspense fallback={<p>waiting for message...</p>}>*/}
          {/*    <Message messagePromise={promise} />*/}
          {/*  </Suspense>*/}
          {/*))}*/}
        </tbody>
      </table>
    </div>
  );
}
