function getLocation() {
  if (navigator.geolocation) {
    // Attempt to get the current position, calling 'success' or 'error' functions
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    // If the browser doesn't support Geolocation
    console.log("Geolocation is not supported by this browser.");
  }
}

function success(position) {
  // Extract coordinates from the position object
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Print the coordinates to the console
  console.log("Location Retrieved Successfully!");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
}

function error(err) {
  // Handle any errors that occur (e.g., user denies permission)
  console.error("Sorry, could not retrieve position.");
  // The 'err' object has a 'code' and 'message' for more detail
  console.error("Error code:", err.code, "Message:", err.message);
}

// You will need to call the function to start the process,
// usually in response to a user action (like a button click)
// or when the page loads.
// For this example, we'll call it immediately.
getLocation();
