var mockApiData = [
    {
        id: 1,
        name: 'welcome to the jungle'
    },
    {
        id: 2,
        name: 'lion king'
    },
    {
        id: 3,
        name: 'trata'
    }
];
export const getTracks = () =>
{
    return dispatch => {
        setTimeout(() => {
            console.log('I have got tracks');
            dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
        }, 2000)
    }
};