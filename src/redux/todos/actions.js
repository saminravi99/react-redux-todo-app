import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    LOADED,
    TOGGLED,
    UPDATE_TEXT,
} from "./actionTypes";

export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos,
    };
};

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId,
    };
};

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color,
        },
    };
};

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    };
};

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    };
};

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    };
};

export const updateText = (todoId, text) => {
    return {
        type: UPDATE_TEXT,
        payload: {
            todoId,
            text,
        },
    };
}
