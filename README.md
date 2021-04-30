# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

- I wrote a simple unit test to test the Card component UI and interaction.  If I had more time I'd look into how prop changes will affect the UI, specifically the favorites prop.  I'd also test the container `PropertyListings.js` and stub the api call and test user interaction.
- I used styled components as I find that it provides an easy way to modularize and extend CSS.
- I used a simple fetch which would be called on mount using `useEffect`
- I used Ramda because it is a functional programming utility library with currying, immutability and data-argument-last approach, which keeps the code cleaner, more reusable and easier to debug.
- I used hooks wherever I can
- I used reflexbox / rebass for layout components as it providers a simple and straightforward API for responsive design because it uses the styled-system approach and can be extended via styled-components.

## If I had more time

- I would create seperate `Button`, `Text`, and `Icon` components.
- Write more tests for the Card component and how it interacts with prop changes.
- Write tests for PropertyListings to test general user interaction and state updates to the component.
- Consider use CSS-grids or custom layout components for the layout.
- I'd remove `React-Router` and use `Universal-Router` Universal router is vanilla JS and I find that the intent of JSX is to represent/extend html elements, not browser/javascript APIs.
-

<!-- Please document your code & design decisions here. -->
