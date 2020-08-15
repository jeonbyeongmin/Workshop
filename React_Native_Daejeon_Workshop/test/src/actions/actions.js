import types from './types';

export const newNote = note => {
    console.log("newNote:::", note);
    return {type: types.NEW_NOTE, note: note};
};