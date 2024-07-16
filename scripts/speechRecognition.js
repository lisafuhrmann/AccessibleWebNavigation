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
    const searchInput = document.querySelector(
      '.search-container input[type="text"]'
    );

    if (command.includes("menü")) {
      document.querySelector('a[href="https://www.spiegel.de/"]').click();
    } else if (command.includes("schlagzeilen")) {
      document
        .querySelector('a[href="https://www.spiegel.de/schlagzeilen/"]')
        .click();
    } else if (command.includes("igel+")) {
      document.querySelector('a[href="https://www.spiegel.de/plus/"]').click();
    } else if (command.includes("fußball-em")) {
      document
        .querySelector(
          'a[href="https://www.spiegel.de/thema/fussball_em_2024/"]'
        )
        .click();
    } else if (command.includes("klimakrise")) {
      document
        .querySelector('a[href="https://www.spiegel.de/thema/klimawandel/"]')
        .click();
    } else if (command.includes("politik")) {
      document.querySelector('a[href=""]').click();
    } else if (command.includes("ausland")) {
      document.querySelector('a[href=""]').click();
    } else if (command.includes("panorama")) {
      document.querySelector('a[href=""]').click();
    } else if (command.includes("sport")) {
      document.querySelector('a[href=""]').click();
    } else if (command.includes("wirtschaft")) {
      document.querySelector('a[href=""]').click();
    } else if (command.includes("wissenschaft")) {
      document.querySelector('a[href=""]').click();
    } else if (command.includes("suche")) {
      searchInput.focus();
      recognition.onresult = function (event) {
        const searchQuery =
          event.results[event.resultIndex][0].transcript.trim();
        searchInput.value = searchQuery;
      };
    }
  }

  recognition.onerror = function (event) {
    console.error("Speech recognition error detected: " + event.error);
    alert("Ein Fehler ist aufgetreten: " + event.error);
  };
} else {
  alert("Ihr Browser unterstützt die Web Speech API nicht.");
}
