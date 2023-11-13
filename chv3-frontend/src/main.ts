import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Board from './components/board/ChessBoard.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')

// **************************************************************************************

const board = createApp(Board)

board.mount('#chess-board')