import * as React from 'react';
import ReactDOM from 'react-dom';

import {useContext} from "react";

import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
    SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from '@giphy/react-components'

// the search experience consists of the manager and its child components that use SearchContext
const SearchExperience = () => (
    <SearchContextManager apiKey={"u3Ro9JQ5EzjkWOHIN0iNBe5WBA5Q7bOW"}>
        <Components />
    </SearchContextManager>
)

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern
const Components = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    return (
        <>
            <SearchBar className="miro-giphy-searchbar" autoFocus placeholder="Search GIPHY & send to your team"/>
            {/**
             key will recreate the component,
             this is important for when you change fetchGifs
             e.g. changing from search term dogs to cats or type gifs to stickers
             you want to restart the gifs from the beginning and changing a component's key does that
             **/}
            <Grid
                className="miro-giphy-grid"
                key={searchKey}
                columns={2}
                width={305}
                fetchGifs={fetchGifs}
                onGifClick={(gif, e) => {
                    e.preventDefault()
                    addEmbed(gif.images.original.url, gif.embed_url)
                }}
            />
        </>
    )
}

async function addEmbed(imageUrl: string, url: string) {
    let size, x, y

    const embeds = await miro.board.get({type: 'image'})
    if (embeds.length > 0) {
        const firstEmbed = embeds[0]
        size = firstEmbed.width
        x = firstEmbed.x

        let maxY = firstEmbed.y
        embeds.forEach(embed => {
            if (embed.y > maxY) {maxY = embed.y}
        })
        y = maxY + size + 10
    } else {
        const viewPort = await miro.board.viewport.get()

        size = viewPort.height / 2

        x = viewPort.x + viewPort.width / 2
        y = viewPort.y + viewPort.height / 2
    }

    // const widget = await miro.board.createEmbed({
    //     url,
    //     mode: 'inline',
    //     x, y,
    //     width: size,
    //     height: size,
    // });

    const image = await miro.board.createImage({
        url: imageUrl,
        x, y,
        width: size,
        // height: size,
    })
}

function App() {
    return (
        <SearchExperience/>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
