# Wordle Clone

This is a simple client-side Wordle clone implemented in React. The game allows players to guess a 6-letter word within 8 attempts.

The real goal was to see how well copilot could generate/iterate on development with GPT 4o.

## Features

- 6-letter word to guess
- Up to 8 guesses
- Visual feedback for each guess (correct, misplaced, incorrect)
- On-screen keyboard for input

## License

This project is open-source and available under the [MIT License](LICENSE).

## TODO work

* Store current guesses to localStorage or similar to support offline.

* Only allow words from a dictionary, instead of arbitrary words.

* Share support after complete

* Visual sizzle:
  * Virtual keyboard bounces keys when pressed, particularly on physical keyboard
  * Slow reveal of word status, similar to regular wordle.
  * Confetti upon success

* Unit tests
