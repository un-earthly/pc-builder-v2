PC Builder Website
==================

This is a clean and straightforward PC Builder website for PC parts and components built using Next.js. The website allows users to browse and select PC components to build their own custom PC.

Table of Contents
-----------------

-   [Demo](https://chat.openai.com/#demo)
-   [Features](https://chat.openai.com/#features)
-   [Technologies Used](https://chat.openai.com/#technologies-used)
-   [Getting Started](https://chat.openai.com/#getting-started)
-   [Usage](https://chat.openai.com/#usage)
-   [API Endpoints](https://chat.openai.com/#api-endpoints)
-   [Authentication (Bonus)](https://chat.openai.com/#authentication-bonus)
-   [Responsive Design (Bonus)](https://chat.openai.com/#responsive-design-bonus)
-   [Deployment](https://chat.openai.com/#deployment)
-   [Contributing](https://chat.openai.com/#contributing)
-   [License](https://chat.openai.com/#license)

Demo
----

You can view a live demo of the PC Builder website at [Live Demo Link](https://chat.openai.com/insert_live_demo_link_here).

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
-   Redux (optional) / Context API (optional)
-   NextAuth.js (optional)
-   CSS (styled-components, Bootstrap, or any other CSS framework)

Getting Started
---------------

To run this project locally, follow these steps:

1.  Clone the repository:

bashCopy code

`git clone <repository_url>
cd pc-builder-website`

Save to grepper

1.  Install the dependencies:

Copy code

`npm install`

Save to grepper

1.  Run the development server:

arduinoCopy code

`npm run dev`

Save to grepper

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

API Endpoints
-------------

If you are using a separate backend for managing product data, list the API endpoints here.

Authentication (Bonus)
----------------------

To enable user authentication using NextAuth.js, follow these steps:

1.  Set up your preferred social login provider(s) (Google/Github) and obtain the necessary credentials.
2.  Update the NextAuth.js configuration with the appropriate credentials and providers.

Responsive Design (Bonus)
-------------------------

The website is designed to be responsive, ensuring optimal user experience across various devices and screen sizes.

Deployment
----------

The PC Builder website can be deployed on platforms like Vercel or any other preferred hosting service.

Contributing
------------

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

License
-------

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).