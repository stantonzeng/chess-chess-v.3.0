<script setup>
import { TheChessboard } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';

const boardConfig = {
  events: {
    change: () => {
      // called after the situation changes on the board
      console.log('Something changed!');
    },
    move: (from, to, capture) => {
      // the move function fires after each move on the board, you can access the values from, to, and capture
      // use @move event to access values from the board api. The move function is executed before the state is updated in the board.
      console.log(from, to, capture);
    },
    select(key) {
      // called when a square is selected
      // the param key is the square being selected: e.g. d2 or e2...
      console.log(key);
    },
  },
};
</script>

<template>
  <TheChessboard :board-config="boardConfig" />
</template>