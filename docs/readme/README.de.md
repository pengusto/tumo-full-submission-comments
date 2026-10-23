<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/comment-unfolding-paper-dark-v1.png">
  <source media="(prefers-color-scheme: light)" srcset="../assets/comment-unfolding-paper-v2.png">
  <img src="../assets/comment-unfolding-paper-v2.png" alt="Illustration: Ein Pinguin entfaltet eine Sprechblase zu einem vollständigen Kommentar." width="2172" height="724">
</picture>

# TUMO Full Submission Comments

[English](../../README.md) | **Deutsch** | [Français](README.fr.md) | [日本語](README.ja.md) | [Հայերեն](README.hy.md)

**Den ganzen Kommentar lesen. Mit der Bewertung weitermachen.**

Für TUMO-Prüfende, die hochgeladene Arbeiten sichten: Dieses kleine Userscript macht aus abgeschnittenen, einzeiligen Abgabe-Kommentaren lesbaren Text mit Zeilenumbruch im Activity Manager.

[Userscript installieren](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)

## Der Unterschied auf einen Blick

| Ohne Skript | Mit Skript |
| --- | --- |
| Die Animation ist fertig. Bitte prüfe… | Die Animation ist fertig. Bitte prüfe das Timing in der letzten Szene. |

Illustrativer Beispieltext; keine Schülerdaten oder TUMO-Oberflächenassets.

## Hier starten

1. Richte Tampermonkey mit der [Browser-Anleitung unten](#installation) ein.
2. [Installiere das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js) und bestätige in Tampermonkey.
3. Lade eine Examiner-Seite neu und lies einen langen Kommentar unter einer hochgeladenen Datei.

Für die Installation brauchst du keinen Build, kein Terminal und keine TUMO-Zugangsdaten. Zur Nutzung benötigst du deinen bestehenden Zugang zum Activity Manager.

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

Diese Schritte gelten allgemein für Chromium-basierte Desktop-Browser, darunter Microsoft Edge, Vivaldi, Brave, Opera und der Ecosia Desktop Browser. Weitere Chromium-basierte Browser können genauso funktionieren, sofern sie Tampermonkey und die Ausführung von Userscripts unterstützen.

1. Installiere Tampermonkey aus dem Erweiterungs-Store deines Browsers. Für Edge gibt es [Microsoft Edge-Add-Ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd). Vivaldi unterstützt Erweiterungen aus dem [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Öffne die Erweiterungsdetails von Tampermonkey und aktiviere **Userscripts zulassen**, falls dein Browser den Schalter anbietet. Aktiviere andernfalls den **Entwicklermodus** auf der Erweiterungsseite. Tampermonkey erklärt diese Voraussetzung für Chromium-Browser in seiner [FAQ](https://www.tampermonkey.net/faq.php?q=Q209).
3. Öffne [das Userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
4. Bestätige die Installation in Tampermonkey.
5. Lade den Activity Manager neu.

Vivaldi, Brave und Opera unterstützen Chrome-Erweiterungen. Der Ecosia Desktop Browser basiert auf Chromium, die Installation von Tampermonkey wurde dort aber noch nicht geprüft. Das Userscript kann in diesen Browsern nur laufen, wenn sich Tampermonkey installieren und die Ausführung von Userscripts freigeben lässt.

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

Es kann nur Text sichtbar machen, der bereits im Kommentarfeld der Seite vorhanden ist. Es stellt keine fehlenden Texte wieder her und umgeht keine TUMO-Zugriffsrechte.

Version 1.0.4 wurde in Chrome getestet. Andere Chromium-basierte Browser, Firefox und Safari wurden mit dieser Version noch nicht praktisch geprüft. Wenn TUMO die Struktur des Activity Managers ändert, muss der CSS-Selektor eventuell angepasst werden.

Dieses unabhängige Projekt ist nicht mit TUMO verbunden oder von TUMO herausgegeben. TUMO ist eine Marke der jeweiligen Rechteinhaber.

## Entwicklungstest

In einem Terminal mit installiertem Git und Python 3:

```bash
git clone https://github.com/pengusto/tumo-full-submission-comments.git
cd tumo-full-submission-comments
python3 -m http.server 8000 --bind 127.0.0.1
```

Öffne danach `http://127.0.0.1:8000/test/fixture.html`. Die Seite muss **Test bestanden** anzeigen.

Die Testseite lädt das Skript direkt; ein TUMO-Login oder eine Tampermonkey-Installation ist nicht nötig. Sie prüft mehrere Kommentare, leere Felder, dynamisch ergänzte Kommentare, Aktualisierungen nach einer DOM-Änderung und ein unabhängiges Read-only-Feld. Dieser lokale Check prüft weder die Installation über Tampermonkey noch die aktuelle TUMO-Oberfläche.

## Lizenz

Veröffentlicht unter der [Mozilla Public License 2.0](../../LICENSE). Wenn du diese Skriptdatei verändert weitergibst, musst du deine Änderungen ebenfalls unter der MPL 2.0 verfügbar machen.

Die übersetzten READMEs wurden maschinell unterstützt erstellt und sollten gemeinsam mit der englischen Ausgangsfassung gepflegt werden.
