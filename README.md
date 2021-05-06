# User Manager

Live preview: https://u-manager.netlify.app/

## Development Steps

When I start working on a project, I like to prepare a mockup or a complete design of the pages that I'm going to create. I thought that this project deserved a mockup too, so I've used my Figma skills to design a couple of pages which made the development stage very smooth and quick. Here is the link to the Figma document: https://www.figma.com/file/C41h9PNz8tFpQ9pkgUlGaP/User-Manager?node-id=3%3A4354

Then I started working on the implementation of pages and components. I tried to avoid using external UI libraries or components as much as possible. So, the implementation of all components (dropdown, pagination, modal, spinner) are custom. For styling, I created a styles folder in the src/ directory where I store all the global scss files, mixins, variables which are used all over the application. In addition, I created a shared.scss file in there to be able to import and use global styling and variables in separate component styling files without having to import all stylings.

I've utilized lazy-loading by splitting up different features into modules which might be not the best structure for this project since it's a relatively small application. But if we add more pages like products, categories, authentication etc. to the app, this strategy would be the best one to keep things structured.

Additionally, I've added features like sort and search to the app by creating utility functions to handle logic for arrays. But since the reqres APIs don't store or update any data in the database, all the changes are done locally and will be gone once the page gets reinitialized.

I've considered using NgRx for handling side-effects, but then I decided to go with services since we don't have a lot of API requests.

## Libraries

I've utilized 'ng-click-outside' library which helped me to close menus on click outside. For styling, I've only used bootstrap grid system.
