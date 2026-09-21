# TUMO Full Submission Comments

Ein kleines Userscript für den TUMO Activity Manager. Es zeigt abgeschnittene Kommentare unter hochgeladenen Dateien vollständig und mehrzeilig an.

[Userscript installieren](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)

## Was das Skript macht

- Es läuft nur auf Examiner-Seiten des Activity Managers.
- Es ersetzt das einzeilige Kommentarfeld durch einen umbrechenden Textblock.
- Es verändert keine Bewertung, kein Feedback und keine Abgabe.
- Es sendet keine Daten und speichert nichts.

## Installation

### Google Chrome

1. Installiere [Tampermonkey aus dem Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
3. Tampermonkey zeigt eine Installationsseite. Klicke dort auf **Installieren**.
4. Lade den Activity Manager neu.

### Microsoft Edge

1. Installiere [Tampermonkey aus Microsoft Edge-Add-Ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd).
2. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
3. Bestätige die Installation in Tampermonkey.
4. Lade den Activity Manager neu.

### Mozilla Firefox

1. Installiere [Tampermonkey von Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/tampermonkey/).
2. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
3. Bestätige die Installation in Tampermonkey.
4. Lade den Activity Manager neu.

## Benutzung

Öffne wie gewohnt eine Activity zur Prüfung. Ein langer Kommentar unter einer hochgeladenen Datei erscheint automatisch über mehrere Zeilen. Es gibt keine Einstellungen und keinen zusätzlichen Button.

## Falls nichts passiert

1. Öffne Tampermonkey über das Browser-Symbol.
2. Prüfe, ob **TUMO Full Submission Comments** aktiviert ist.
3. Erlaube Tampermonkey den Zugriff auf `activities.es.tumo.world`.
4. Lade die Seite neu.

## Deaktivieren oder entfernen

Öffne das Tampermonkey-Dashboard. Dort kannst du das Skript über den Schalter deaktivieren oder über das Papierkorb-Symbol entfernen.

## Datenschutz und Grenzen

Das Skript arbeitet nur im geöffneten Browser-Tab. Es liest den bereits sichtbaren Kommentar aus dem Activity Manager und stellt ihn anders dar. Es nutzt keine externe API, kein Tracking und keinen eigenen Server.

Chrome wurde mit Version 1.0.1 praktisch geprüft. Edge und Firefox verwenden dieselben Webstandards, wurden für diese Version aber noch nicht praktisch getestet. Wenn TUMO die Struktur des Activity Managers ändert, muss der CSS-Selektor eventuell angepasst werden.

Dieses unabhängige Projekt ist nicht mit TUMO verbunden oder von TUMO herausgegeben. TUMO ist eine Marke der jeweiligen Rechteinhaber.

## Entwicklungstest

```bash
python3 -m http.server 8000
```

Öffne danach `http://localhost:8000/test/fixture.html`. Die Seite muss **Test bestanden** anzeigen.

## Lizenz

Veröffentlicht unter der [Mozilla Public License 2.0](LICENSE). Wenn du diese Skriptdatei verändert weitergibst, müssen deine Änderungen ebenfalls unter der MPL 2.0 verfügbar sein.
