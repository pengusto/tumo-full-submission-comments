# TUMO Full Submission Comments

[English](../../README.md) | **Deutsch** | [Français](README.fr.md) | [日本語](README.ja.md) | [Հայերեն](README.hy.md)

Ein kleines Userscript für den TUMO Activity Manager. Es zeigt abgeschnittene Kommentare unter hochgeladenen Dateien vollständig und mehrzeilig an.

[Userscript installieren](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)

## Was das Skript macht

- Es läuft nur auf Examiner-Seiten des Activity Managers.
- Es ersetzt das einzeilige Kommentarfeld durch einen umbrechenden Textblock.
- Es verändert keine Bewertung, kein Feedback und keine Abgabe.
- Es sendet keine Daten und speichert nichts.

## Voraussetzungen

Du brauchst Tampermonkey und die Berechtigung, Userscripts auf `activities.es.tumo.world` auszuführen. Den Zugriff auf Datei-URLs musst du nicht aktivieren.

## Installation

### Google Chrome

1. Installiere [Tampermonkey aus dem Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Klicke mit der rechten Maustaste auf das Tampermonkey-Symbol und wähle **Erweiterung verwalten**.
3. Aktiviere **Userscripts zulassen**. Chrome ab Version 138 bietet diesen Schalter an. Falls dein Browser ihn nicht anzeigt, aktiviere den **Entwicklermodus** unter `chrome://extensions`. Tampermonkey ab Version 5.3 benötigt in Chromium-Browsern eine dieser Einstellungen. Siehe die [Erklärung von Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209).
4. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
5. Tampermonkey öffnet eine Installationsseite. Klicke dort auf **Installieren**.
6. Lade den Activity Manager neu.

### Andere Chromium-basierte Desktop-Browser

Dieser Abschnitt gilt für Microsoft Edge, Vivaldi und den Ecosia Desktop Browser.

1. Installiere Tampermonkey aus dem Erweiterungs-Store deines Browsers. Für Edge gibt es [Microsoft Edge-Add-Ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd). Vivaldi unterstützt Erweiterungen aus dem [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Öffne die Erweiterungsdetails von Tampermonkey und aktiviere **Userscripts zulassen**, falls dein Browser den Schalter anbietet. Aktiviere andernfalls den **Entwicklermodus** auf der Erweiterungsseite. Tampermonkey erklärt diese Voraussetzung für Chromium-Browser in seiner [FAQ](https://www.tampermonkey.net/faq.php?q=Q209).
3. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
4. Bestätige die Installation in Tampermonkey.
5. Lade den Activity Manager neu.

Vivaldi unterstützt Chrome-Erweiterungen offiziell. Der Ecosia Desktop Browser basiert auf Chromium, die Installation von Tampermonkey wurde dort aber noch nicht geprüft. Das Userscript kann dort nur laufen, wenn sich Tampermonkey installieren lässt.

### Mozilla Firefox

1. Installiere [Tampermonkey von Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/tampermonkey/).
2. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
3. Bestätige die Installation in Tampermonkey.
4. Erlaube den Zugriff auf `activities.es.tumo.world`, falls Firefox danach fragt.
5. Lade den Activity Manager neu.

Firefox verwendet die Chrome-Einstellungen **Userscripts zulassen** und **Entwicklermodus** nicht.

### Safari unter macOS

1. Installiere [Tampermonkey aus dem App Store](https://apps.apple.com/app/tampermonkey/id6738342400). Die aktuelle Version benötigt macOS 11 oder neuer. Auf seiner [offiziellen Safari-Seite](https://www.tampermonkey.net/index.php?browser=safari&locale=de) führt Tampermonkey außerdem eine Classic-Version für ältere Safari-Versionen auf.
2. Öffne **Safari → Einstellungen → Erweiterungen** und aktiviere Tampermonkey.
3. Erlaube Tampermonkey den Zugriff auf `activities.es.tumo.world`.
4. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js) und bestätige die Installation.
5. Lade den Activity Manager neu.

Safari wurde noch nicht praktisch im Activity Manager getestet. Mobile Browser sind nicht Bestandteil dieser Anleitung.

## Benötigte Berechtigungen

Das Skript läuft nur auf Examiner-Seiten unter `https://activities.es.tumo.world/dashboard/activities/examiner/`. Tampermonkey muss auf diese Website zugreifen dürfen.

Aktiviere für dieses Skript nicht **Zugriff auf Datei-URLs erlauben**. Diese Berechtigung gilt für lokale `file://`-Seiten und hat nichts mit dem Activity Manager über HTTPS zu tun. Die [Tampermonkey-FAQ](https://www.tampermonkey.net/faq.php?q=Q204) beschreibt sie separat.

Das Userscript verwendet `@grant none`. Es nutzt keine externe API, kein Tracking und keinen eigenen Server.

## Installation überprüfen

1. Öffne eine Activity mit einem Kommentar unter einer hochgeladenen Datei.
2. Öffne Tampermonkey über die Browser-Symbolleiste und prüfe, ob **TUMO Full Submission Comments** aktiviert ist.
3. Ein langer Kommentar sollte ohne zusätzlichen Button oder Einstellungsbereich über mehrere Zeilen erscheinen.

## Falls nichts passiert

1. Prüfe im Tampermonkey-Dashboard, ob **TUMO Full Submission Comments** aktiviert ist.
2. Erlaube Tampermonkey in den Erweiterungseinstellungen des Browsers den Zugriff auf `activities.es.tumo.world`.
3. Prüfe in einem Chromium-Browser, ob **Userscripts zulassen** oder der **Entwicklermodus** aktiviert ist. Prüfe unter Safari, ob die Tampermonkey-Erweiterung aktiv ist.
4. Lade den Activity-Manager-Tab neu.
5. Installiere das Skript über den Link oben erneut, falls Tampermonkey eine ältere Version anzeigt.

## Skript deaktivieren oder entfernen

Öffne das Tampermonkey-Dashboard. Dort kannst du das Skript über den Schalter deaktivieren oder über das Papierkorb-Symbol entfernen.

## Datenschutz und Grenzen

Das Skript arbeitet nur im geöffneten Browser-Tab. Es liest den bereits sichtbaren Kommentar aus dem Activity Manager und ändert dessen Darstellung.

Version 1.0.3 wurde in Chrome getestet. Edge, Vivaldi, Ecosia, Firefox und Safari wurden mit dieser Version noch nicht praktisch geprüft. Wenn TUMO die Struktur des Activity Managers ändert, muss der CSS-Selektor eventuell angepasst werden.

Dieses unabhängige Projekt ist nicht mit TUMO verbunden oder von TUMO herausgegeben. TUMO ist eine Marke der jeweiligen Rechteinhaber.

## Entwicklungstest

```bash
python3 -m http.server 8000
```

Öffne danach `http://localhost:8000/test/fixture.html`. Die Seite muss **Test bestanden** anzeigen.

## Lizenz

Veröffentlicht unter der [Mozilla Public License 2.0](../../LICENSE). Wenn du diese Skriptdatei verändert weitergibst, musst du deine Änderungen ebenfalls unter der MPL 2.0 verfügbar machen.

Die übersetzten READMEs wurden maschinell unterstützt erstellt und sollten gemeinsam mit der englischen Ausgangsfassung gepflegt werden.
