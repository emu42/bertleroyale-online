// Board.tsx
import type {BoardProps} from 'boardgame.io/react';
import type {BertleRoyaleState} from './Game.js'

interface MyGameProps extends BoardProps<BertleRoyaleState> {
    // Additional custom properties for your component
}

export function MyGameBoard(props: MyGameProps) {
    // Your game board
}
