# Capstone Project - Public API

This is the repository for the **Capstone Project** of the **Web Development Bootcamp**. The project utilizes public APIs to interact with different kinds of data and display it to the user in a user-friendly interface.

## Project Features

- **Public API Integration**: The project interacts with a publicly available API to fetch and display data.
- **Dynamic Views**: Uses **EJS templating** to dynamically render content on the page based on the API data.
- **User-Friendly Interface**: The UI is designed with simplicity and functionality in mind, offering ease of navigation and interaction.
- **Node.js and Express**: The project uses **Express.js** for routing and handling server-side requests.

## Technologies Used

- **Node.js**: JavaScript runtime environment to build the backend.
- **Express.js**: Web framework for building the web server and API routing.
- **EJS**: Templating engine for dynamically rendering HTML content.
- **Axios**: Promise-based HTTP client for making requests to public APIs.

## API Used: JLPT (Japanese-Language Proficiency Test) API

For this project, we use the **JLPT API** to fetch words from different levels of the Japanese-Language Proficiency Test (JLPT). The API provides a list of Japanese words, their meanings, readings (hiragana), and romaji.

### **API Endpoints**

- **Get Words by JLPT Level**:
    - Endpoint: `/api/words?level={level}`
    - Description: Fetch words for a specific JLPT level (N5, N4, N3, N2, N1).
    - Example: `/api/words?level=N5`
    
- **Get Random Word**:
    - Endpoint: `/api/words/random`
    - Description: Fetch a random word from any JLPT level.
    
- **Search for Specific Words**:
    - Endpoint: `/api/words?word={search_term}`
    - Description: Search for words based on a specific query (e.g., word or romaji).
    - Example: `/api/words?word=night`

### **How It's Used**

The JLPT API is integrated into this project to allow users to:
- View words based on the JLPT level.
- Search for specific words or find random words.
- Display these words dynamically on the frontend using **EJS** templates.

The API returns the word along with its **meaning**, **reading** (hiragana), and **romaji**, which are displayed in an easy-to-understand format for the users.

## Project Structure

- **`public/`**: Contains the static files such as CSS.
- **`views/`**: Contains the EJS templates for rendering the data.
- **`routes/`**: Contains the Express routes for handling the API requests and rendering views.
- **`index.js`**: The main file where the Express server is initialized.

