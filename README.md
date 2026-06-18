# Random Advice & Items API

This project is a simple Node.js Express API that returns:
- a list of items from a local DAL
- a specific item by ID
- a random advice message retrieved from an external API

## Run instructions

1. Open a terminal in the project folder: `c:\Users\maaya\Downloads\nodeTamplet\nodeTamplet`
2. Install dependencies:
   - `npm install`
3. Start the server:
   - `npm start`
4. The server listens on `http://localhost:3000` by default.

## Available routes

- `GET /api/advice/api` - fetches a random advice string from `https://api.adviceslip.com/advice`
- `GET /api/jokes/api` - fetches a random joke from `https://icanhazdadjoke.com`
- `GET /` - serves the frontend UI from `public/index.html`

## Example requests

- `http://localhost:3000/`
- `http://localhost:3000/api/advice/api`
- `http://localhost:3000/api/jokes/api`
