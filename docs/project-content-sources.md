# Project content sources

Project narratives are maintained in `src/data/projectStories.js`. Screenshots and primary descriptions are in `src/data/portfolioData.js`.

The following local manuals were reviewed on October 5, 2026. Page numbers refer to PDF pages, not printed page numbers. Image-only pages in the PetSymp and Kismet documents were read with local text recognition.

| Project | Document | Evidence used |
| --- | --- | --- |
| PetSymp | `Documents/Projects/PetSymp_UserManual.pdf` | Pages 2, 13–29: pet context and guided assessment; 32–38: rankings, Forward Chaining, Gradient Boosting, AdaBoost, and comparisons; 39–40: educational scope and saved assessments; 43–54: symptom catalog, profiles, and health history. |
| Kismet | `Documents/Projects/Kismet & ArtHub.pdf` | Pages 1–10: sign-in, profile setup, discovery, pending likes, mutual matches, messaging, unmatching, and profile details. Pages 11–18 describe ArtHub and are not used for Kismet. |
| KPOP-ON | `Documents/Projects/KPOP-On_UserManual.docx.pdf` | Pages 1–4: academic React project and five artists; 15–20: shop, cart, checkout, confirmation, about, and contact; 21 onward: mobile layouts. |
| TaskMaster | `Documents/Projects/TaskMaster_UserManual.pdf` | Pages 1–4: intended PSBA audience; 8–11: projects, deadlines, priorities, invitations, roles, and three task states; 12–17: dark mode, help, and profile management. |

## Editorial boundaries

- Describe documented behavior rather than inventing adoption, revenue, conversion, or performance results.
- The manuals do not establish each contributor's ownership. PetSymp names three developers, including Christian. Add personal contribution details only after confirmation.
- PetSymp's prior “85%+ classification accuracy” claim was removed from the project description and replaced in the summary metrics with three documented analysis methods. The manual does not provide an evaluation dataset, test split, or measured accuracy result.
- PetSymp confidence scores are model outputs, not measured model accuracy or a clinical validation claim.
- Kismet's landing-page marketing mentions security and verification. The walkthrough does not establish those guarantees, so the narrative describes observed account, matching, and messaging workflows without repeating the claims.
- KPOP-ON is an academic storefront. Its checkout screenshots do not establish production payment processing or commercial transactions.
- TaskMaster's intended audience is PSBA; the manual alone does not establish deployment or adoption there.
- Existing technology tags and employment metrics are prior portfolio data. The user manuals do not independently verify every stack item or employment claim.

User-provided screenshots remain unaltered. The device presentation is handled in CSS, including edge-to-edge phone image fitting.
