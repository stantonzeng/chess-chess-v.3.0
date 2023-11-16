import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ChessBoard from './components/board/ChessBoard.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')

const chessBoard = createApp(ChessBoard)

chessBoard.mount('#chess_board')