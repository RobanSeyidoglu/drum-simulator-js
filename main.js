// Select all <audio> elements on the page
let audioKey = document.querySelectorAll("audio");

// Select all elements with the class "key" on the page
let keyboard = document.querySelectorAll(".key");

// Add an event listener for keydown events (when a key is pressed)
window.addEventListener("keydown", (e) => {
  // Loop through all <audio> elements
  audioKey.forEach((element) => {
    // Check if the current <audio> element has a class that matches the pressed key
    if (element.classList.contains(e.key)) {
      // Reset the audio to the beginning and play it
      element.currentTime = 0;
      element.play();
    }
  });

  // Loop through all elements with the class "key"
  keyboard.forEach((k) => {
    // Check if the current element has a class that matches the pressed key
    if (k.classList.contains(e.key)) {
      // Add the "playing" class to the matching key element
      k.classList.add("playing");
    }
  });
});

