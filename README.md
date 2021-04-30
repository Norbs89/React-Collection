# React Collection

### (work in progress)

A website featuring several mini applications built with React.js.

Libraries used throughout the projects include:

- react-router-dom
- react-icons
- axios
- moment.js

## Version 0.3.7

- Minimal CSS styling applied (flexbox).
- Homepage has been populated with first draft of data.
- Footer has been fixed to bottom of the page - consistent on every page/render.

## Version 0.3.5

- Stripped the project from react-bootstrap and react-modal to prevent bloated codebase.
- Restructured the Cocktail Recipe Generator App to function similarly to Task Tracker: Added a new component, recipe output is now rendered separately.
- Disabled most CSS files to prevent style clashes and specificity issues with classes.

## Version 0.3.0

- Gitignore has been updated.
- Migrated code for the 3rd and final planned project - Cocktail Recipe Generator App.
- Installed react-bootstrap and react-modal as these were required dependencies for the Recipe Generator App.

## Version 0.2.1

- Fixed unsopported API requests in Banking App. The current API used for conversion rates is: https://www.exchangerate-api.com/
- Minor styling clashes with classes are fixed.

## Version 0.1.5

- Migrated code for the second mini app - Banking App. Whilst the app itself is functional (styling is conflicting) the API for exchange rates (that was used back when the app was created) is no longer supporting certain endpoints that are integral for core features.
- Some code linting done.

State handling methods are different across the apps. Long time optimisation goal added to unify state handling methods.

## Version 0.1.0 (initial commit)

The project has been created with the purpose of bundling my smaller React.js SPA's together.
It is currently planned to feature 3 mini apps:

- Task Tracker
- Banking App
- Cocktail Recipe Generator

Some basic routing and loose site structure (as components) has been created and migrated the first mini app over - Task Tracker.
No styling has been done, still a lot of linting requried.
