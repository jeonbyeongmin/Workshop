import types from '../actions/types';

const initialState = {
    notes: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case types.NEW_NOTE: {
            console.log("new note::", action.note);
            return {...state, notes: [action.note, ...state.notes]};
        }
        default:
            return state;
    }
};

export default reducer;