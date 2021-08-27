import * as api from '../api/indexAPI';


export const getBestiary = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBestiary();
        
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
    
    
}