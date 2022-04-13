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
            <SearchBar />
            <SuggestionBar />
            {/**
             key will recreate the component,
             this is important for when you change fetchGifs
             e.g. changing from search term dogs to cats or type gifs to stickers
             you want to restart the gifs from the beginning and changing a component's key does that
             **/}
            <Grid key={searchKey} columns={3} width={800} fetchGifs={fetchGifs} />
        </>
    )
}

// async function addSticky() {
//     const stickyNote = await miro.board.createStickyNote({
//         content: 'Hello, World!',
//     });
//
//     await miro.board.viewport.zoomTo(stickyNote);
// }

function App() {

    React.useEffect(() => {
        // addSticky();
    }, []);

    return (
        <SearchExperience/>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
