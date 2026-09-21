// ==UserScript==
// @name         TUMO Full Submission Comments
// @namespace    https://activities.es.tumo.world/
// @version      1.0.1
// @description  Zeigt abgeschnittene Abgabe-Kommentare vollständig und mehrzeilig an.
// @match        https://activities.es.tumo.world/dashboard/activities/examiner/*
// @homepageURL  https://github.com/pengusto/tumo-full-submission-comments
// @supportURL   https://github.com/pengusto/tumo-full-submission-comments/issues
// @downloadURL  https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js
// @updateURL    https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js
// @license      MPL-2.0
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  'use strict';

  const render = () => {
    document.querySelectorAll('.t-single-file-item-description input[readonly]').forEach((input) => {
      const container = input.closest('.t-single-file-item-description');
      if (!container) return;

      let output = container.querySelector(':scope > .tumo-full-submission-comment');
      if (!output) {
        output = document.createElement('div');
        output.className = 'tumo-full-submission-comment';
        output.style.cssText = 'padding:10px 12px;border:1px solid #9e9e9e;border-radius:4px;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.5;';
        container.append(output);
        input.closest('.t-single-file-item-description-input').style.display = 'none';
      }

      if (output.textContent !== input.value) output.textContent = input.value;
    });
  };

  new MutationObserver(render).observe(document.body, { childList: true, subtree: true });
  render();
})();
