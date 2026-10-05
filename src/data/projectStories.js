// Evidence and page references are recorded in docs/project-content-sources.md.
export const projectStories = {
  petsymp: {
    domain: 'Pet health · Guided assessment',
    summary: 'A guided symptom assessment for dogs and cats, with ranked results, model comparisons, and a health history for each pet.',
    challenge: 'Pet owners can describe a change in behavior without knowing which details matter. PetSymp organizes those observations into a structured assessment that considers the animal’s species, breed, age, size, and symptoms.',
    facts: [['2', 'Species: dogs and cats'], ['3', 'Analysis methods'], ['Top 10', 'Ranked possible illnesses']],
    workflow: [
      { title: 'Build the pet’s context', text: 'Choose a saved pet or create a profile, then select a breed, birth date, and size. Returning pets with complete profiles can move straight to symptom selection.' },
      { title: 'Ask the next useful question', text: 'Search the symptom catalog and answer follow-up questions about the selected symptoms. Review the collected observations before submitting the assessment.' },
      { title: 'Make the results inspectable', text: 'Explore ranked possible illnesses and compare scores from Forward Chaining, Gradient Boosting, and AdaBoost. Saved assessments keep the symptoms and results connected to the pet’s history.' },
    ],
    focusTitle: 'More context behind every result',
    focus: 'The chart view exposes the individual algorithm scores, while a separate comparison shows symptom weighting, model adjustments, and subtype coverage for the leading results. Expandable illness details keep the results list readable without hiding the supporting information.',
    note: 'PetSymp provides educational health insights to support conversations with a veterinarian. Its scores are assessment outputs, not confirmed diagnoses.',
  },
  kismet: {
    domain: 'Social platform · Matching and messaging',
    summary: 'A dating platform that connects profile creation, discovery, mutual matches, and messaging in one continuous experience.',
    challenge: 'Meeting someone online involves more than browsing a profile. Kismet brings the steps before and after a match into one experience, with clear places to discover people, respond to interest, and continue a conversation.',
    facts: [['Discover', 'Browse people and profiles'], ['Match', 'Respond to mutual interest'], ['Message', 'Continue the conversation']],
    workflow: [
      { title: 'Start with a personal profile', text: 'Create a profile with a photo, name, age, and biography. The profile view brings interests, personality, and motivations together so people have more context than a name and picture.' },
      { title: 'Separate interest from a match', text: 'Discover profiles, review pending likes, and choose whether to respond. Pending interest and mutual matches have distinct states, with cancellation available before a connection is made.' },
      { title: 'Carry the connection into chat', text: 'Select a match to open a conversation, search the match list, and exchange messages. Unmatching removes the conversation and returns the interface to a clear empty state.' },
    ],
    focusTitle: 'A connected journey with clear states',
    focus: 'Discover, Matches, and Messages share persistent navigation. Profile previews, pending likes, matched contacts, and empty states make the next available action visible throughout the journey.',
  },
  'kpop-on': {
    domain: 'E-commerce · Artist discovery',
    summary: 'A React storefront that connects five K-pop artists with their music and merchandise, from discovery to cart and checkout.',
    challenge: 'Fans want to browse by the artists they follow, then find the albums and merchandise associated with them. KPOP-ON connects artist discovery with shopping through a consistent set of artist pages, product catalogs, and cart screens.',
    facts: [['5', 'Featured artists'], ['3', 'Catalog filters: all, album, merch'], ['Web + mobile', 'Documented layouts']],
    workflow: [
      { title: 'Discover an artist', text: 'Browse aespa, LE SSERAFIM, SEVENTEEN, TREASURE, and TWICE. Individual artist pages introduce members, albums, and singles before leading into the shop.' },
      { title: 'Find the right merchandise', text: 'Switch between artist catalogs and filter the selection by albums or merchandise. Product cards bring images, names, prices, and add-to-cart actions into the same browsing view.' },
      { title: 'Complete the shopping flow', text: 'Collect products in the cart, proceed to the checkout form, and reach an order-confirmation screen. Contact and about pages support the wider storefront experience.' },
    ],
    focusTitle: 'Artist context carries through to shopping',
    focus: 'React connects the artist directory, individual artist pages, shop, cart, and checkout. Repeated catalog patterns keep navigation familiar as visitors move between artists, with separate desktop and mobile layouts documented in the manual.',
  },
  taskmaster: {
    domain: 'Team productivity · Project coordination',
    summary: 'A project workspace designed for PSBA faculty and students, with team invitations, deadlines, priorities, and visual task tracking.',
    challenge: 'A shared project needs visible ownership, deadlines, and progress. TaskMaster was designed for the Philippine School of Business Administration to bring those pieces into a workspace that faculty and students can use to coordinate work.',
    facts: [['3', 'Task states'], ['Team roles', 'Invitations with status tracking'], ['Deadlines', 'Project and task planning']],
    workflow: [
      { title: 'Define the project', text: 'Create a project with a title, description, deadline, and priority. The dashboard provides the starting point for opening the project’s workspace.' },
      { title: 'Bring the team together', text: 'Invite members with a role and an optional message. Accepted, rejected, and pending invitation states make it clear who has joined the project.' },
      { title: 'Keep progress visible', text: 'Create tasks with descriptions, deadlines, and priorities, then track them through To-Do, Doing, and Done. A dark workspace theme, editable profiles, FAQs, and issue reporting support everyday use.' },
    ],
    focusTitle: 'Coordination at both project and task level',
    focus: 'Project setup captures the overall goal; the workspace breaks it into actionable tasks. Explicit invitation and task states help teams understand who is involved and where work stands without relying on separate status messages.',
  },
}
