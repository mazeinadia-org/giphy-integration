import * as React from 'react';
import ReactDOM from 'react-dom';

import {GiphyFetch} from "@giphy/js-fetch-api";
import {IGif} from "@giphy/js-types";
import {
    Gif,
} from "@giphy/react-components";
import {useAsync} from "react-async-hook";
import {useState} from "react";

const giphyFetch = new GiphyFetch("u3Ro9JQ5EzjkWOHIN0iNBe5WBA5Q7bOW");

function GifDemo() {
    const [gif, setGif] = useState<IGif | null>(null);
    useAsync(async () => {
        const {data} = await giphyFetch.gif("fpXxIjftmkk9y");
        setGif(data);
    }, []);
    return gif && <Gif gif={gif} width={200}/>;
}

async function addSticky() {
    const stickyNote = await miro.board.createStickyNote({
        content: 'Hello, World!',
    });

    await miro.board.viewport.zoomTo(stickyNote);
}

function App() {
    React.useEffect(() => {
        addSticky();
    }, []);

    return (
        <div className="grid wrapper">
            <div className="cs1 ce12">
                <img src="/src/assets/congratulations.png" alt=""/>
            </div>
            <div className="cs1 ce12">
                <h1>Congratulations!</h1>
                <p>You've just created your first Miro app!</p>
                <p>
                    To explore more and build your own app, see the Miro Developer
                    Platform documentation.
                </p>
            </div>
            <img src="./logo.gif" width="200" alt="Powered by GIPHY"/>
            <h4>Gif</h4>
            <GifDemo/>
            <div className="cs1 ce12">
                <a
                    className="button button-primary"
                    target="_blank"
                    href="https://beta.developers.miro.com"
                >
                    Read the documentation
                </a>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
