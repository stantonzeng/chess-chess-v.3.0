<h1 align="center">Chess Chess (v3.0)</h1>

Chess Chess is a version of Chess (obivously) that specializes in allowing players to set up their own boards and openings, allowing for more dynamic chess games rather than memorizing the first 20 moves of an opening.

As you can tell, I really dislike that part of Chess.

### System Requirements

1. Players will be able to set up the board in a turn-by-turn basis
2. Follow all of the other conventional Chess standard rules
3. Support two-player online play
4. Randomly assign players black or white
5. Store match logs
6. Determine when a game has ended (Concede, Checkmate, Disconnecting...)

### Class Diagram

Player: Holds the status of the player
Tile: Placeable box for chess pieces
Board: Builds the 8x8 chess board using Tile
GameObserver: Records the current game state
GameLogger: Records the previous game states and holds them
