<script setup lang="ts">
import { TheChessboard, type BoardConfig } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';

const boardConfig: BoardConfig = {
  coordinates: false,
  autoCastle: false,
  orientation: 'black',
};
</script>

<template>
  <TheChessboard :board-config="boardConfig" />
  <div>Position: </div>
</template>