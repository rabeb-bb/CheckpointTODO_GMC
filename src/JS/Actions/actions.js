import { ADD_TASK, DEL_TASK, EDIT_TASK, FIN_TASK } from "../Constants/action-types";

export const addTask = newTask => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}
export const deleteTask = task => {
    return {
        type: DEL_TASK,
        payload: task
    }
}
export const editTask = newTask => {
    return {
        type: EDIT_TASK,
        payload: newTask
    }
}
export const finishTask = task => {
    return {
        type: FIN_TASK,
        payload: task
    }
}