const initialState = '';

function filter(state = initialState, action) {
    if(action.type == "FIND_TRACK"){
        return action.payload
    }
    return state
}
export default filter