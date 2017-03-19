const initialState = [
    'Smells like spirit',
    'Enter sandman'
];
function tracks(state = initialState, action) {
    if(action.type == "ADD_TRACK"){
        return [
            ...state,
            action.payload
        ]
    }
    return state
}
export default tracks