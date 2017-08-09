const initialState = '';

export default function asyncTracks(state = initialState, action) {
    if(action.type == 'FETCH_TRACKS') {
        return action.payload
    }
    return state
}