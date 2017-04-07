export function getPhotos() {
    return (dispatch) => {
        dispatch({
            type: 'START_FETCHING'
        });

        setTimeout( () => {
           dispatch({
               type: 'FINISH_FETCHING',
               payload: {photos: ["photo1","photo2","photo3","photo4"], isLoading: false}
           })
        },5000)
    }
}