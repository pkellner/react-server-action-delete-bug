"use client";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Function to fetch attendee data from the API.
 * @param {string} id - The ID of the attendee.
 * @param {AbortSignal} signal - An optional abort signal to cancel the request.
 * @returns {Promise<any>} A promise that resolves to the attendee data.
 */
export async function fetchAttendee(id, signal) {
  const url = `http://localhost:3000/api/attendee/${id}`;

  try {
    const response = await fetch(url, { signal });

    if (!response.ok) {
      // Log and throw a new error with more context
      const error = new Error(`HTTP error! Status: ${response.status}`);
      console.error('Error fetching attendee data:', error);
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error('Error occurred during fetching attendee data:', error.name);

    // if (error.name === 'AbortError') {
    //   console.log('Fetch aborted');
    // } else {
    //   // Handle other errors
    // }

    // Instead of re-throwing the error, handle it here.
    // You can return a specific error object, null, or a default value.
    // This way, the calling function can decide how to handle this case.
    return { error: true, message: error.message };
  }
}




//
//
//
// export async function fetchAttendee(id, signal) {
//   try {
//     //console.log("fetchAttendee: starting to fetch data")
//     const response = await fetch(`http://localhost:3000/api/attendee/${id}`, { signal });
//
//     // Check if the response is OK (status in the range 200-299)
//     if (!response.ok) {
//       // Throw an error if the response is not OK
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//
//     const randomNumberBetween1000And5000 =
//       Math.floor(Math.random() * 1000) + 500;
//     //console.log(`Sleeping for ${randomNumberBetween1000And5000}ms`);
//     await sleep(randomNumberBetween1000And5000);
//
//     const data = await response.json();
//     //console.log("fetchAttendee: done fetching data",data);
//     return data;
//   } catch (e) {
//     console.log("fetchAttendee: e:",e);
//     throw e;
//   }
// }
//
export async function fetchAttendees() {
  const response = await fetch(`http://localhost:3000/api/attendee/`);
  const randomNumberBetween1000And5000 =
    Math.floor(Math.random() * 1000) + 500;
  //console.log(`Sleeping for ${randomNumberBetween1000And5000}ms`);
  await sleep(randomNumberBetween1000And5000);
  const data = await response.json();
  return data.slice(0, 2);
}
