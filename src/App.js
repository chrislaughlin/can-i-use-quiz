import React from 'react';

import Start from './views/startView';

import { APIs, getRandomApi } from "./utils/dataUtils";

console.log(APIs)

function App() {
    console.log(getRandomApi(APIs));

    return (
        <div>
            <Start/>
        </div>
    );
}

export default App;
