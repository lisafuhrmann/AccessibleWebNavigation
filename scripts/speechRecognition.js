// Prüfe, ob der Browser die Web Speech API unterstützt
if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "de-DE";

  // Event-Listener für Sprachereignisse
  recognition.onresult = function (event) {
    const transcript = event.results[event.resultIndex][0].transcript
      .trim()
      .toLowerCase();
    handleVoiceCommand(transcript);
  };

  // Sprachsteuerung starten
  recognition.start();

  // Funktion zur Verarbeitung von Sprachbefehlen
  function handleVoiceCommand(command) {
    if (command.includes("menü")) {
      document.querySelector('a[href="https://www.spiegel.de/"]').click();
    }
  }
} else {
  alert("Ihr Browser unterstützt die Web Speech API nicht.");
}
