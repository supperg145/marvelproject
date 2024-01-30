# Marvel Heroes React App Documentation


# Setting Up Marvel API in Your React Application

To access the Marvel API in your React application, follow these steps:

## 1. Create a Marvel Developer Account:

- Visit the [Marvel Developer Portal](https://developer.marvel.com/).
- If you don't have an account, sign up for a Marvel developer account.

## 2. Create a New Application:

- Once logged in, navigate to the "My Applications" section.
- Click on "Create Application" to generate a new application.
- Fill in required information like the application name, description, and the website URL of your React application. For development, you can use http://localhost:3000.

## 3. Get Your API Keys:

- After creating the application, you'll receive your API keys (public and private).
- Note your public API key, which will be used in your React application.

## 4. Configure React Application:

- In your React application, create a file named `.env` in the root directory if it doesn't exist.
- Add the following lines to the `.env` file, replacing `<your api key here>` and `<private api key here>` with your Marvel API public and private keys, respectively as seen in .env.example file

## SearchBar Component

The `SearchBar` component is a React functional component responsible for rendering a search bar in the UI. It utilizes the `useRef` hook to capture user input and triggers a hero search through the `fetchHeroes` function upon clicking the "Search" button.

## Card Component

The `Card` component is a React functional component designed to display information about a hero. It includes an image, the hero's name, and a link to the hero's details page.

## Container Component

The `Container` component is a React functional component that serves as a wrapper, providing consistent styling for the main content of the application.

## HeroDetails Component

The `HeroDetails` component is responsible for displaying detailed information about a specific hero. It fetches hero data using the `fetchHero` function and renders the hero's image, name, description, and series.

## Home Component

The `Home` component is the main page of the application, showcasing a title, a search bar (`SearchBar`), and a grid of hero cards (`Card`). It uses the `fetchHeroes` function to retrieve hero data.

## Utilities

### fetchHeroes Function

The `fetchHeroes` function is a utility function that facilitates an API request to fetch a list of heroes based on a search term. It relies on the Marvel API and requires appropriate API key authentication.

### fetchHero Function

The `fetchHero` function is a utility function responsible for making an API request to fetch detailed information about a specific hero. It also requires valid API key authentication.

### getHash Function

The `getHash` function is a utility function that generates an MD5 hash used for API key authentication in conjunction with the timestamp, private key, and public key.

**Note:** Ensure that the required environment variables (`REACT_APP_API_KEY` and `REACT_APP_PRIVATE_KEY`) are set before using the utility functions.

# Running Your React Application

Follow these steps to run your React application after setting up your Marvel API keys and configuring the application:

## 1. Install Dependencies

If not done already, navigate to your React application's root directory in the terminal and run the following command to install dependencies:

```bash
npm install

# 2. Start the Development Server

Once the dependencies are installed, launch the development server with the following command:

```bash
npm start

## 3. View Your Application

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) if it doesn't open automatically. You should see your Marvel-themed React application.

## 4. Explore and Test

Explore the different components, interact with the search bar, and view hero details to ensure that the Marvel API integration is functioning as expected.
