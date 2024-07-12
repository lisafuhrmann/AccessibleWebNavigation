const video = document.getElementById("video");
const menuLinks = document.querySelectorAll("nav ul li a");
const cursor = document.createElement("div");

const modelParams = {
  flipHorizontal: false, // Do not flip the video horizontally
  maxNumBoxes: 1, // Maximum number of boxes to detect
  iouThreshold: 0.5, // IOU threshold for non-max suppression
  scoreThreshold: 0.6, // Confidence threshold for predictions
};

// Ensure the video size is correct
video.style.width = "640px";
video.style.height = "320px";

// Style the cursor
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.backgroundColor = "red";
cursor.style.position = "absolute";
cursor.style.borderRadius = "50%";
cursor.style.pointerEvents = "none";
document.body.appendChild(cursor);

let model;

// Load the handtrack model
handTrack.load(modelParams).then((lmodel) => {
  model = lmodel;
  // Start the video stream
  handTrack.startVideo(video).then((status) => {
    if (status) {
      console.log("Video started");
      runDetection();
    } else {
      alert("Bitte aktivieren Sie Ihre Kamera.");
    }
  });
});

function runDetection() {
  model
    .detect(video)
    .then((predictions) => {
      console.log(predictions); // Debugging: Log predictions

      // Filter predictions to include various hand positions
      const handPredictions = predictions.filter(
        (prediction) =>
          prediction.label === "open" ||
          prediction.label === "closed" ||
          prediction.label === "point"
      );

      if (handPredictions.length > 0) {
        const hand = handPredictions[0];
        const bbox = hand.bbox;
        const centerX = bbox[0] + bbox[2] / 2;
        const centerY = bbox[1] + bbox[3] / 2;

        // Update cursor position
        const scaledX = (centerX / video.offsetWidth) * window.innerWidth;
        const scaledY = (centerY / video.offsetHeight) * window.innerHeight;
        cursor.style.left = `${scaledX}px`;
        cursor.style.top = `${scaledY}px`;

        // Check if the hand is over any menu link
        menuLinks.forEach((link) => {
          const rect = link.getBoundingClientRect();
          if (
            scaledX >= rect.left &&
            scaledX <= rect.right &&
            scaledY >= rect.top &&
            scaledY <= rect.bottom
          ) {
            link.style.backgroundColor = "yellow"; // Highlight the link
            console.log(`Hovering over: ${link.innerText}`); // Debugging: Log hovered link
            link.click();
          } else {
            link.style.backgroundColor = ""; // Remove highlight if not hovered
          }
        });
      } else {
        // Keep the cursor visible for debugging purposes
        cursor.style.left = "-9999px";
        cursor.style.top = "-9999px";
      }
      requestAnimationFrame(runDetection);
    })
    .catch((err) => {
      console.error(err); // Debugging: Log any errors
    });
}
