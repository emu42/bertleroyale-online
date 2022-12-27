// App.tsx
import {Client} from 'boardgame.io/react';

import {BertleRoyale} from './Game';

const App = Client({
    game: BertleRoyale,
});
export default App;
