# React Collection

A website built with React.js.

[Check out the website here.](https://react-collection.netlify.app/)

This collection was created as a portfolio piece and a showcase for
several mini-apps built during my time as a software developer. I have
tried to create a fun and vibrant experience where the individual apps
can be enjoyed as much as the website as a whole. This is mainly a
front-end project, with the exception of the banking-app interacting
with an
[exchange rate API](https://www.exchangerate-api.com/)
to get up to date exchange rates.

## Planned updates:

- As of Ver. 1.0.0 the website doesn't support mobile view. It is
  built with flexbox therefore responsive by default. More media
  queries needed however and some structural styling changes to
  fully support mobile screens.

- The 3 apps have been developed in 3 different stages throughout my
  software developer career. The Cocktail Recipe Generator was one
  of the first fully fledged app I have built with React.js. The
  Task Tracker is a recent development using hooks. I would like to
  bring all apps' code to an even codebase to make it more unified
  and easier to support in the future.

- Due to the class based code style of the Cocktail Recipe
  Generator, the page animation hasn't been applied to the app. This
  will be corrected once the codebase is even across all apps.

- Currently only the Task Tracker app has an about page which
  details functionality and user journey. I would like to add this
  feature to the other apps as well.

Feel free to look through the code and check out how it's structured. Please
let me know if you'd like to clone the project or contribute to it.

Libraries used throughout the projects include:

- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-icons](https://react-icons.github.io/react-icons/)
- [axios](https://github.com/axios/axios)
- [moment.js](https://momentjs.com/)
- [react-spring](https://react-spring.io/basics)

## Version 1.0.1

- Homepage is now optimised for smaller laptops, tablets & mobile.
- Footer is now optimised for smaller laptops, tablets & mobile.
- "Choose screen" is now optimised for smaller laptops, tablets & mobile.
- "About Page" is now optimised for smaller laptops, tablets & mobile.
- Background images have been scaled for faster loading times.

## Version 1.0.0 (production update)

- Animated the Banking Interface and the Task Tracker Page.
- Added an 'about' page to the website.
- Populated the 'about' page.
- Added an 'about' link to the navbar.
- Added a version indicator to footer.
- Code linting.
- Minor changes in CSS styling.
- Separate style sheets has been created for footer and navbar.
- Gitignore has been updated.
- Updated 'Readme' with correct markdown syntax.
- Added metadata for optimal link sharing.

## Version 0.8.2

- Installed react-springs dependency for animations.
- Animated homepage and 'choose project' page.

## Version 0.8.0

- Footer has been set up correctly and fully styled.
- Navbar has been integrated.
- Navbar has been fully styled.
- Minor changes in CSS styling to accomodate navbar.
- Changed a few file names for consistency.
- Code linting.

## Version 0.7.0

- Banking interface is fully styled.
- Minor changes in Banking Interface's codebase to help with styling.
- Code linting.
- Deleted unnecessary files.

## Version 0.6.0

- Cocktail Recipe Generator is fully styled.
- Code linting.
- Minor changes in Cocktail Recipe Generator's codebase to help with styling.

## Version 0.5.0

- Further CSS styling applied to homepage and 'choose project' page.
- Task Tracker App is fully styled.
- Task Tracker App's 'about' page is populated.
- Minimal CSS styling applied to Cocktail Recipe Generator.
- Bug fixes to Cocktail Recipe Generator.

## Version 0.4.5

- Created a folder for styles.
- Created separate stylesheets for components.
- Further CSS styling applied to homepage and 'choose project' page.
- CSS styling applied to footer.
- Code linting.
- Deleted unnecessary files.

## Version 0.4.0

- CSS styling applied to homepage and 'choose project' page.
- Added descriptions to project cards on 'choose project' page.
- Code linting.

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
