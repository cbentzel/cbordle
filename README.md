# Wordle Clone

This is a simple client-side Wordle clone implemented in React. The game allows players to guess a 6-letter word within 8 attempts.

## Features

- 6-letter word to guess
- Up to 8 guesses
- Visual feedback for each guess (correct, misplaced, incorrect)
- On-screen keyboard for input

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/wordle-clone.git
   cd wordle-clone
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

- `public/index.html`: Main HTML file for the React application.
- `src/components/`: Contains all the React components for the game.
  - `Board.tsx`: Manages game state and renders guessed words.
  - `Cell.tsx`: Represents a single letter cell in the game board.
  - `Keyboard.tsx`: Displays the on-screen keyboard for input.
  - `Row.tsx`: Represents a row of guessed letters.
- `src/App.tsx`: Main application component that sets up the game.
- `src/index.tsx`: Entry point of the React application.
- `src/styles/App.css`: CSS styles for the application.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: npm configuration file.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements!

## License

This project is open-source and available under the [MIT License](LICENSE).