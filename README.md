PC Builder Website
==================

This is a clean and straightforward PC Builder website for PC parts and components built using Next.js. The website allows users to browse and select PC components to build their own custom PC.

Table of Contents
-----------------

-   [Demo](#demo)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)

Demo
----

You can view a live demo of the ZABUILD PC Builder website at [Live Demo Link](https://pc-builder-v2-sigma.vercel.app/).
You can view a Code of the PC Builder website at [Live Code Link](https://github.com/un-earthly/pc-builder-v2).

Features
--------

-   Navbar: The website features a navigation bar with a "PC Builder" button and a Categories dropdown. Users can easily access the PC Builder page and browse different PC component categories.

-   Home Page: The home page displays 6 random Featured Products with product details, including image, name, category, price, status, and rating. Featured Categories are also showcased for easy navigation.

-   Featured Category Pages: Each Featured Category is clickable and leads to a page displaying at least 3 products of that category.

-   Product Detail Page: Each PC component has its own product detail page showing detailed information, including image, name, category, status, price, description, key features, individual rating, average rating, and reviews.

-   PC Builder Page: The PC Builder page allows users to select components from different categories to build their custom PC. The page uses Server-Side Rendering (SSR) to ensure the latest component data is available.

-   Add To Builder: Users can add selected components to their PC build using the "Add To Builder" button, updating the state of the selected category in real-time.

-   Complete Build: The "Complete Build" button becomes clickable when users add at least 5-6 required components (CPU, RAM, Power Supply, Storage, Motherboard, Casing) to their PC build.

-   User Authentication (Bonus): The PC Builder page is a protected/private route, accessible only to logged-in users. NextAuth.js with at least one social login provider (Google/Github) is used for user authentication.

-   Success Alert (Bonus): Clicking on the "Complete Build" button triggers a success alert for the user.

-   Responsive Design (Bonus): The entire application is responsive, providing an enjoyable user experience on both mobile and desktop devices.

Technologies Used
-----------------

-   Next.js
-   React
-   Redux 
-   NextAuth.js
-   Firebase
-   CSS (styled-components, Bootstrap, or any other CSS framework)

Getting Started
---------------

To run this project locally, follow these steps:

1.  Clone the repository:

bashCopy code

```
git clone https://github.com/un-earthly/pc-builder-v2
cd pc-builder-v2
```


1.  Install the dependencies:


```
yarn
```


1.  Run the development server:


```
yarn dev
```


1.  Open your browser and navigate to `http://localhost:3000` to view the website.

Usage
-----

-   Browse the home page to view Featured Products and Featured Categories.
-   Click on a Featured Product to view its detailed information on the Product Detail page.
-   Click on a Featured Category to view products of that category on the Featured Category page.
-   Visit the PC Builder page to start building your custom PC.
-   Choose components from each category and click "Add To Builder" to add them to your PC build.
-   When you have at least 5-6 components added, the "Complete Build" button will become clickable.
-   Click the "Complete Build" button to complete your PC build.

