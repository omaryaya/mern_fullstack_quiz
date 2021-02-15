import * as api from '../api';

// Action creators
export const getQuestions = () => async (dispatch) => {

    try {
        const { data } = await api.getQuestions();
        console.debug("actions/data", data);
        const action = {
            type: 'FETCH_QUESTIONS',
            payload: data
        }

        dispatch(action);

    } catch (err) {
        console.error(err.message);
    }
}