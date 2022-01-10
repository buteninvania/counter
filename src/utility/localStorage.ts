import {AppStateType} from '../brms/store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state-counter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state-counter', serializedState);
    } catch {
        // ignore write errors
    }
};