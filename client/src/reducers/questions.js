const initialState = [{
    title: "",
    answers: [],
}];
const reducer = (questions = initialState, action) => {
    switch(action.type) {
        case 'FETCH_QUESTIONS':
            return action.payload;
            
        case 'CREATE':
            return [...questions, action.payload];

        default:
            return questions;
    }
}

export default reducer;