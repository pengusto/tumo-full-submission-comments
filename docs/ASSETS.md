# Asset provenance

## Comment-unfolding banner (2026-10-23)

- File: [`assets/comment-unfolding-banner-v1.png`](assets/comment-unfolding-banner-v1.png).
- Created with OpenAI's built-in image generation tool, with the user's supplied `profile-banner-purple.png` as the actual visual reference for the penguin and purple island style. AI-generated illustration, not a screenshot or evidence of product behavior.
- Brief: the same penguin unfolds an accordion speech bubble to make a complete comment visible; dark plum, lavender, painted stone island; project title only. No real comments, student data, TUMO logo or interface assets were supplied or added.
- The supplied reference's underlying authorship and reuse rights have not been independently verified. Generated output is not a guarantee of exclusive rights. This entry does not extend the code's MPL-2.0 license to third-party marks or reference material.
- TUMO remains a trademark of its respective owners. This independent project and its illustration do not imply affiliation or endorsement.

## Paper alternative (2026-10-23)

- File: [`assets/comment-unfolding-paper-v2.png`](assets/comment-unfolding-paper-v2.png).
- Created with the same built-in image tool and actual penguin reference. This alternative uses warm paper, teal and coral rather than the first draft's stone island. The penguin unfolds a paper speech bubble with abstract text strokes; it is not a real UI or student submission.
- Design clarification: use the shared profile image as a character reference only. Choose each project's environment, composition and palette independently. The earlier island version is retained, not overwritten; the user selected the paper alternative B for all five READMEs on 2026-10-23.
- The same reference-rights, AI-origin and trademark limitations above apply. No new asset license is asserted.

## Paper theme pair (2026-10-23)

- Light: [`assets/comment-unfolding-paper-v2.png`](assets/comment-unfolding-paper-v2.png), the selected original B, unchanged.
- Dark: [`assets/comment-unfolding-paper-dark-v1.png`](assets/comment-unfolding-paper-dark-v1.png), edited with the built-in image tool using the actual B image as reference. Same penguin, paper speech bubble and composition; midnight petrol background, ivory lettering, warm paper and lavender rim light. Not a color inversion.
- All five READMEs use native `picture` / `source` with `prefers-color-scheme`, plus a Light `img` fallback and localized alt text. Both themes retain the same 3:1 ratio.
- Existing AI-origin and rights limitations apply. Original B and island alternative A are retained. No new license or affiliation is asserted. No automation or status graphics were added.
- Local theme preview checked at 1200, 390 and 320 px: the browser selected the intended source in all six cases, without cropping or page overflow. At 320 px the title, penguin and unfolding action remain recognizable; no separate mobile composition was needed. This is not a live GitHub acceptance check.

## Responsive embed verification

Keep the banner `img` free of fixed width/height attributes so GitHub can preserve its intrinsic 3:1 ratio. On the live desktop README, `width="2172" height="724"` was rendered at 838 × 724 px: GitHub constrained width but retained the fixed height. A local preview with `height:auto` masked this defect. Verify geometry with actual GitHub CSS at desktop and 320–390 px, rather than relying only on preview styling.
