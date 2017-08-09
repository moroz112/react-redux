export const getAsyncTracks = () => dispatch => {
    setTimeout(() => {
        console.log('fetch tracks');
        dispatch({type: "FETCH_TRACKS", payload: [{name: 'track1'}, {name: 'tracks2'}]})
    }, 2000)
};