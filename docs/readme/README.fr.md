# TUMO Full Submission Comments

[English](../../README.md) | [Deutsch](README.de.md) | **Français** | [日本語](README.ja.md) | [Հայերեն](README.hy.md)

Un petit userscript pour TUMO Activity Manager. Il affiche en entier les commentaires tronqués sous les fichiers téléversés et répartit les textes longs sur plusieurs lignes.

[Installer le userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)

## Fonctionnement du script

- Il s'exécute uniquement sur les pages d'examen d'Activity Manager.
- Il remplace le champ de commentaire sur une seule ligne par un bloc de texte avec retour à la ligne.
- Il ne modifie ni les évaluations, ni les retours, ni les soumissions.
- Il n'envoie et ne stocke aucune donnée.

## Prérequis

Vous avez besoin de Tampermonkey et de l'autorisation d'exécuter des userscripts sur `activities.es.tumo.world`. Vous n'avez pas besoin d'autoriser l'accès aux URL de fichiers.

## Installation

### Google Chrome

1. Installez [Tampermonkey depuis le Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Faites un clic droit sur l'icône Tampermonkey et sélectionnez **Gérer l'extension**.
3. Activez **Autoriser les scripts utilisateur**. Chrome 138 et les versions ultérieures proposent ce réglage. Si votre navigateur ne l'affiche pas, activez le **Mode développeur** sur `chrome://extensions`. Tampermonkey 5.3 et les versions ultérieures exigent l'un de ces réglages dans les navigateurs basés sur Chromium. Consultez [l'explication de Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209).
4. Ouvrez [le userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
5. Tampermonkey ouvre une page d'installation. Cliquez sur **Installer**.
6. Rechargez Activity Manager.

### Autres navigateurs de bureau basés sur Chromium

Ces étapes s'appliquent généralement aux navigateurs de bureau basés sur Chromium, notamment Microsoft Edge, Vivaldi, Brave, Opera et le navigateur de bureau Ecosia. D'autres navigateurs basés sur Chromium peuvent fonctionner de la même manière s'ils prennent en charge Tampermonkey et l'exécution de userscripts.

1. Installez Tampermonkey depuis la boutique d'extensions de votre navigateur. Edge propose les [modules complémentaires Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd). Vivaldi prend en charge les extensions du [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Ouvrez les détails de l'extension Tampermonkey et activez **Autoriser les scripts utilisateur** si votre navigateur propose ce réglage. Sinon, activez le **Mode développeur** sur la page des extensions. Tampermonkey décrit cette exigence pour les navigateurs Chromium dans sa [FAQ](https://www.tampermonkey.net/faq.php?q=Q209).
3. Ouvrez [le userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
4. Confirmez l'installation dans Tampermonkey.
5. Rechargez Activity Manager.

Vivaldi, Brave et Opera prennent en charge les extensions Chrome. Le navigateur de bureau Ecosia repose sur Chromium, mais l'installation de Tampermonkey n'y a pas encore été vérifiée. Le userscript ne peut fonctionner dans ces navigateurs que si le navigateur autorise l'installation de Tampermonkey et l'exécution de userscripts.

### Mozilla Firefox

1. Installez [Tampermonkey depuis Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/tampermonkey/).
2. Ouvrez [le userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js).
3. Confirmez l'installation dans Tampermonkey.
4. Autorisez l'accès à `activities.es.tumo.world` si Firefox le demande.
5. Rechargez Activity Manager.

Firefox n'utilise pas les réglages Chrome **Autoriser les scripts utilisateur** ou **Mode développeur**.

### Safari sous macOS

1. Installez [Tampermonkey depuis l'App Store](https://apps.apple.com/app/tampermonkey/id6738342400). La version actuelle nécessite macOS 11 ou une version ultérieure. Tampermonkey propose aussi une version Classic pour les anciennes versions de Safari sur sa [page Safari officielle](https://www.tampermonkey.net/index.php?browser=safari&locale=fr).
2. Ouvrez **Safari → Réglages → Extensions** et activez Tampermonkey.
3. Autorisez Tampermonkey à accéder à `activities.es.tumo.world`.
4. Ouvrez [le userscript](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js) et confirmez l'installation.
5. Rechargez Activity Manager.

Safari n'a pas encore été testé dans Activity Manager. Les navigateurs mobiles ne sont pas couverts par ce guide.

## Autorisations nécessaires

Le script s'exécute uniquement sur les pages d'examen sous `https://activities.es.tumo.world/dashboard/activities/examiner/`. Tampermonkey doit avoir accès à ce site.

N'activez pas **Autoriser l'accès aux URL de fichiers** pour ce script. Cette autorisation concerne les pages locales `file://` et non Activity Manager via HTTPS. La [FAQ de Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q204) la décrit séparément.

Le userscript déclare `@grant none`. Il n'utilise aucune API externe, aucun service de suivi et aucun serveur distant.

## Vérifier l'installation

1. Ouvrez une Activity contenant un commentaire sous un fichier téléversé.
2. Ouvrez Tampermonkey depuis la barre d'outils du navigateur et vérifiez que **TUMO Full Submission Comments** est activé.
3. Un commentaire long doit apparaître sur plusieurs lignes, sans bouton ni panneau de réglages supplémentaire.

## Si rien ne se passe

1. Vérifiez que **TUMO Full Submission Comments** est activé dans le tableau de bord Tampermonkey.
2. Dans les paramètres d'extension du navigateur, autorisez Tampermonkey à accéder à `activities.es.tumo.world`.
3. Dans un navigateur Chromium, vérifiez que **Autoriser les scripts utilisateur** ou le **Mode développeur** est activé. Dans Safari, vérifiez que l'extension Tampermonkey est active.
4. Rechargez l'onglet Activity Manager.
5. Réinstallez le script depuis le lien ci-dessus si Tampermonkey affiche une ancienne version.

## Désactiver ou supprimer le script

Ouvrez le tableau de bord Tampermonkey. Utilisez l'interrupteur pour désactiver le script ou l'icône de corbeille pour le supprimer.

## Confidentialité et limites

Le script fonctionne uniquement dans l'onglet ouvert. Il lit le commentaire déjà affiché par Activity Manager et modifie sa présentation.

La version 1.0.3 a été testée dans Chrome. Les autres navigateurs basés sur Chromium, Firefox et Safari n'ont pas encore été testés avec cette version. Si TUMO modifie la structure de la page d'Activity Manager, le sélecteur CSS devra peut-être être mis à jour.

Ce projet indépendant n'est ni affilié à TUMO ni publié par TUMO. TUMO est une marque de ses propriétaires respectifs.

## Test de développement

```bash
python3 -m http.server 8000
```

Ouvrez `http://localhost:8000/test/fixture.html`. La page doit afficher **Test bestanden**.

## Licence

Publié sous la [Mozilla Public License 2.0](../../LICENSE). Si vous distribuez une version modifiée de ce fichier de script, vous devez également rendre vos modifications disponibles sous MPL 2.0.

Les README traduits ont été préparés avec une assistance automatique et doivent être maintenus avec la version source anglaise.
