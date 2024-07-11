const video = document.getElementById("video");
const menuLink = document.getElementById("menu");

const modelParams = {
  flipHorizontal: true, // Flip the video horizontally
  maxNumBoxes: 1, // Maximum number of boxes to detect
  iouThreshold: 0.5, // IOU threshold for non-max suppression
  scoreThreshold: 0.6, // Confidence threshold for predictions
};

// Ensure the video size is correct
video.style.width = "640px";
video.style.height = "320px";

// Load the handtrack model
handTrack.load(modelParams).then((lmodel) => {
  model = lmodel;
  // Start the video stream
  handTrack.startVideo(video).then((status) => {
    if (status) {
      runDetection();
    } else {
      console.error("Please enable video");
    }
  });
});

function runDetection() {
  model.detect(video).then((predictions) => {
    if (predictions.length > 0) {
      const hand = predictions[0];
      const bbox = hand.bbox;
      const centerX = bbox[0] + bbox[2] / 2;

      // Get the width of the video element
      const videoWidth = video.offsetWidth;

      // Check if the hand is in the right half of the video
      if (centerX > videoWidth / 2) {
        menuLink.click();
      }
    }
    requestAnimationFrame(runDetection);
  });
}
