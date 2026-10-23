<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/comment-unfolding-paper-dark-v1.png">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/comment-unfolding-paper-v2.png">
  <img src="docs/assets/comment-unfolding-paper-v2.png" alt="Illustration: a penguin unfolds a speech bubble to reveal a complete comment." width="2172" height="724">
</picture>

# TUMO Full Submission Comments

**English** | [Deutsch](docs/readme/README.de.md) | [Français](docs/readme/README.fr.md) | [日本語](docs/readme/README.ja.md) | [Հայերեն](docs/readme/README.hy.md)

**Read the whole comment. Keep the review moving.**

For TUMO examiners reviewing uploaded work: this small userscript turns clipped, single-line submission comments into readable, wrapping text inside the Activity Manager.

[Install the userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)

## The difference at a glance

| Without the script | With the script |
| --- | --- |
| The animation is ready. Please check… | The animation is ready. Please check the timing in the final scene. |

Illustrative text only; no student data or TUMO interface assets.

## Start here

1. Set up Tampermonkey using the [browser instructions below](#installation).
2. [Install the userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js) and confirm in Tampermonkey.
3. Reload an examiner page and read a long comment below an uploaded file.

No build, terminal, or TUMO account credentials are needed to install the script. Using it requires your existing access to the Activity Manager.

## What the script does

- Runs only on examiner pages in the Activity Manager.
- Replaces the single-line comment field with a wrapping text block.
- Does not change ratings, feedback, or submissions.
- Sends no data and stores nothing.

## Requirements

You need Tampermonkey and permission to run userscripts on `activities.es.tumo.world`. You do not need to enable access to file URLs.

## Installation

### Google Chrome

1. Install [Tampermonkey from the Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Right-click the Tampermonkey icon and select **Manage extension**.
3. Enable **Allow User Scripts**. Chrome 138 and newer provide this switch. If your browser does not show it, enable **Developer mode** on `chrome://extensions`. Tampermonkey 5.3 and newer requires one of these settings in Chromium-based browsers. See the [Tampermonkey explanation](https://www.tampermonkey.net/faq.php?q=Q209).
4. Open [the userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
5. Tampermonkey opens an installation page. Select **Install**.
6. Reload the Activity Manager.

### Other Chromium-based desktop browsers

These steps generally apply to Chromium-based desktop browsers, including Microsoft Edge, Vivaldi, Brave, Opera, and the Ecosia Desktop Browser. Other Chromium-based browsers may work in the same way if they support Tampermonkey and userscript execution.

1. Install Tampermonkey from your browser's extension store. Edge users can use [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd). Vivaldi supports extensions from the [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Open Tampermonkey's extension details and enable **Allow User Scripts** if the browser offers the switch. Otherwise, enable **Developer mode** on the browser's Extensions page. Tampermonkey documents this requirement for Chromium-based browsers in its [FAQ](https://www.tampermonkey.net/faq.php?q=Q209).
3. Open [the userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
4. Confirm the installation in Tampermonkey.
5. Reload the Activity Manager.

Vivaldi, Brave, and Opera support Chrome extensions. The Ecosia Desktop Browser is Chromium-based, but installing Tampermonkey in Ecosia has not yet been verified. The userscript can run in any of these browsers only if the browser allows Tampermonkey to be installed and userscripts to run.

### Mozilla Firefox

1. Install [Tampermonkey from Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/tampermonkey/).
2. Open [the userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
3. Confirm the installation in Tampermonkey.
4. Allow access to `activities.es.tumo.world` if Firefox asks.
5. Reload the Activity Manager.

Firefox does not use Chrome's **Allow User Scripts** or **Developer mode** settings.

### Safari on macOS

1. Install [Tampermonkey from the App Store](https://apps.apple.com/app/tampermonkey/id6738342400). The current version requires macOS 11 or newer. Tampermonkey also lists a Classic version for older Safari releases on its [official Safari page](https://www.tampermonkey.net/index.php?browser=safari&locale=en).
2. Open **Safari → Settings → Extensions** and enable Tampermonkey.
3. Allow Tampermonkey to access `activities.es.tumo.world`.
4. Open [the userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js) and confirm the installation.
5. Reload the Activity Manager.

Safari support has not yet been tested in the Activity Manager. Mobile browsers are not covered by this guide.

## Required permissions

The script runs only on examiner pages below `https://activities.es.tumo.world/dashboard/activities/examiner/`. Tampermonkey must have access to this website.

Do not enable **Allow access to file URLs** for this script. That permission applies to local `file://` pages and is unrelated to the HTTPS Activity Manager. The [Tampermonkey FAQ](https://www.tampermonkey.net/faq.php?q=Q204) describes it separately.

The userscript declares `@grant none`. It uses no external API, tracking service, or remote server.

## Verify the installation

1. Open an Activity with a comment below an uploaded file.
2. Open Tampermonkey from the browser toolbar and check that **TUMO Full Submission Comments** is enabled.
3. A long comment should appear across multiple lines without an extra button or settings panel.

## If nothing happens

1. Check that **TUMO Full Submission Comments** is enabled in the Tampermonkey dashboard.
2. Check the browser's extension settings and allow Tampermonkey to access `activities.es.tumo.world`.
3. In a Chromium-based browser, confirm that **Allow User Scripts** or **Developer mode** is enabled. In Safari, confirm that the Tampermonkey extension is enabled.
4. Reload the Activity Manager tab.
5. Reinstall the script from the link above if Tampermonkey shows an older version.

## Disable or remove the script

Open the Tampermonkey dashboard. Use the switch to disable the script or the trash icon to remove it.

## Privacy and limitations

The script works only inside the open browser tab. It reads the comment already displayed by the Activity Manager and changes its presentation.

It can only reveal text present in the page’s comment input. It cannot recover missing text or bypass TUMO access permissions.

Version 1.0.4 was tested in Chrome. Other Chromium-based browsers, Firefox, and Safari have not yet been tested with this version. If TUMO changes the Activity Manager's page structure, the CSS selector may need an update.

This independent project is not affiliated with or published by TUMO. TUMO is a trademark of its respective owners.

## Development test

From a terminal with Git and Python 3 installed:

```bash
git clone https://github.com/pengusto/tumo-full-submission-comments.git
cd tumo-full-submission-comments
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/test/fixture.html`. The page must display **Test passed** (`Test bestanden` in the fixture).

The fixture loads the script directly; no TUMO login or Tampermonkey installation is needed. It checks multiple comments, empty fields, dynamically added comments, updates after a DOM change, and an unrelated read-only field. This local check does not verify installation through Tampermonkey or the current live TUMO interface.

## License

Released under the [Mozilla Public License 2.0](LICENSE). If you distribute a modified version of this script file, you must also make your modifications available under MPL 2.0.

The translated READMEs were prepared with machine assistance and should be maintained together with this English source.
