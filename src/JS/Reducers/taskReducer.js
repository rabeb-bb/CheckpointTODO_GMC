import { ADD_TASK, DEL_TASK, EDIT_TASK, FIN_TASK } from "../Constants/action-types";

const initialState={
    tasks: []
};

function taskReducer(state=initialState,action){
    switch(action.type){
        //Add a task to the list
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
            //delete a task from the list
            case DEL_TASK:
                return {
                    ...state,
                    tasks: [...state.tasks.filter(el=>el.id!==action.payload)]
                }
                // edit a task inside the list
            case EDIT_TASK:
            //         const i=state.tasks.findIndex(el=> el.id === action.payload.id) 
            //     const editedTasks=[...state.tasks]
            //     editedTasks[i].description=action.payload.description
            // return {
            //     ...state,
            //     tasks: editedTasks
            // }
            return {...state,tasks:state.tasks.map(el=> el.id == action.payload.id?{...el,description:action.payload.description}:el)}
            
            //mark a task as finished
            case FIN_TASK:
               const index=state.tasks.findIndex(el=> el.id === action.payload) 
                const newTasks=[...state.tasks]
                newTasks[index].isDone=!newTasks[index].isDone
               return {
                ...state,
                tasks: newTasks
            }
           
        default:
            return state
    }
};
export default taskReducer