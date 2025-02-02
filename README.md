# Pokémon Search App

## Description
This is a simple Pokémon search web application that allows users to enter a Pokémon's name and retrieve its image from the PokeAPI. The application provides a user-friendly interface with an input field and a search button. If the Pokémon exists, its image will be displayed; otherwise, an error message will appear below the input box.

## Features
- Search for Pokémon by name.
- Fetches Pokémon images using the [PokeAPI](https://pokeapi.co/).
- Handles invalid Pokémon names with error messages.
- Allows searching by pressing the "Enter" key.
- Responsive design with a fixed background image.

## Technologies Used
- HTML
- CSS
- JavaScript (Fetch API for data retrieval)

## How to Use
1. Open the `index.html` file in your browser.
2. Enter the name of a Pokémon in the search bar.
3. Click the "Search" button or press "Enter".
4. If the Pokémon exists, its image will be displayed below.
5. If the Pokémon is not found, an error message will appear below the input box.

## Example Pokémon Names to Try
- Pikachu
- Bulbasaur
- Charmander
- Squirtle
- Jigglypuff
- Snorlax
- Gengar
- Eevee
- Mewtwo

## API Reference
This application uses the [PokeAPI](https://pokeapi.co/) to fetch Pokémon details. The API request format is:
```
https://pokeapi.co/api/v2/pokemon/{pokemon_name}
```
where `{pokemon_name}` is the name entered by the user.

## Future Enhancements
- Display additional Pokémon details (e.g., type, abilities, stats).
- Improve UI with animations and styling.
- Support for searching by Pokémon ID.

## Author  
James Dorbor Jallah, Jr.  
