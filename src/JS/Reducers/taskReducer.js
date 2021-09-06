import { ADD_TASK, DEL_TASK, EDIT_TASK, FIN_TASK } from "../Constants/action-types";

const initialState={
    tasks: []
};

function taskReducer(state=initialState,action){
    switch(action.type){
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload]
            }
            case DEL_TASK:
                return {
                    tasks: [...state.tasks.filter(el=>el.id!==action.payload)]
                }
                case EDIT_TASK:
                    const i=state.tasks.findIndex(el=> el.id === action.payload.id) 
                const editedTasks=[...state.tasks]
                editedTasks[i].description=action.payload.description
            return {
                tasks: editedTasks
            }
            // return {...state,tasks:state.tasks.map(el=> el.id == action.payload.id?{...el,description:action.payload.description}:el)}
            case FIN_TASK:
               const index=state.tasks.findIndex(el=> el.id === action.payload) 
                const newTasks=[...state.tasks]
                newTasks[index].isDone=true 
               return {
                tasks: newTasks
            }
        default:
            return state
    }
};
export default taskReducer