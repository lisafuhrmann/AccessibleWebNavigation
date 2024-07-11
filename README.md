# Alternative Techniken und Methoden zur barrierefreien Website-Navigation und Steuerung

Dieses Projekt untersucht und implementiert alternative Techniken zur barrierefreien Navigation und Steuerung von Websites, insbesondere durch Sprach- und Gestensteuerung. Ziel ist es, die digitale Zugänglichkeit für Menschen mit motorischen Einschränkungen zu verbessern.

## Über das Projekt

Die Digitalisierung bringt viele Vorteile, aber auch Herausforderungen mit sich, insbesondere wenn es um die Zugänglichkeit von Webseiten für alle Nutzergruppen geht. Dieses Projekt konzentriert sich auf innovative Ansätze zur Verbesserung der Barrierefreiheit im Web durch alternative Eingabemethoden wie Sprach- und Gestensteuerung. Es soll zeigen, wie diese Technologien die Nutzung von Webseiten für Menschen mit motorischen Einschränkungen erleichtern können.

## Implementierte Funktionen

### Sprachsteuerung

- **Navigation zu Menüpunkten:** Die Sprachsteuerung ermöglicht es Benutzern, verschiedene Menüpunkte anzusteuern, indem sie einfache Sprachbefehle verwenden.
- **Befehle:** Benutzer können Befehle wie "Menü" oder "Schlagzeilen" um direkt zu den entsprechenden Seiten zu navigieren.

### Gestensteuerung

- **Handverfolgung:** Die Gestensteuerung nutzt eine Kamera, um die Handbewegungen des Benutzers zu verfolgen und diese Bewegungen in Cursorbewegungen auf dem Bildschirm umzusetzen.
- **Navigation zu Menüpunkten:** Benutzer können Menüpunkte durch Handgesten auswählen. Der Cursor wird durch Handbewegungen gesteuert und kann verschiedene Menüpunkte ansteuern.
- **Visuelles Feedback:** Ein roter Punkt zeigt die aktuelle Position der Hand auf dem Bildschirm an, um eine bessere Orientierung zu ermöglichen.

## Voraussetzungen

- Eine Webcam zur Handverfolgung
- Ein moderner Browser, der die Web Speech API und WebRTC unterstützt
- Ein Miktofon für die Sprachsteuerung

## Technologien

- HTML, CSS, JS: Für die Website-Struktur und das Design
- HandTrack.js: Für die Handverfolgung und Gestenerkennung
- Web Speech API: Für die Sprachsteuerung
