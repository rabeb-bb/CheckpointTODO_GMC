import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, finishTask } from '../JS/Actions/actions'

const Task = ({task}) => {
    const dispatch = useDispatch()

    //local state
    const [edit, setEdit] = useState(false)
    const [edited, setEdited] = useState(task.description)

    //click and change functions
    const handleDelete= ()=>{
        dispatch(deleteTask(task.id))
    }
    const handleDone= ()=>{
        dispatch(finishTask(task.id))
        // alert(`Bravo! ${task.description} is done!`)
    }
    const handleEdit=()=>{
        setEdit(!edit)
    }
    const handleChange=(e)=>{
        setEdited(e.target.value)
        
    }
    const handleSave=(e)=>{
        e.preventDefault()
        dispatch(editTask({id: task.id, description: edited}))
        setEdit(false)
    }

    //style for the finished tasks
    const styleDone= task.isDone? {textDecoration:"line-through"}:null

    return (
        <div style={{display:"flex", 
                    justifyContent:"space-between", 
                    alignItems:"center", 
                    margin:'2%', 
                    padding:'1%', 
                    fontSize:'1.5em', 
                    width:'80%', 
                    height:'3vh', 
                    border:"solid", 
                    borderRadius:'5px',
                    }} >

            {/* Task text and edit          */}            
            <div> 
            {edit?
                <form> 
                <input value={edited} onChange={(e)=>handleChange(e)}/>
                <button onClick={(e)=>handleSave(e)}>save</button>
                </form>:<p style={styleDone}>{task.description}</p>}
            </div>
            {/* handle task buttons */}
            <div>
            <button style={{margin:'0.5%'}} onClick={handleDone}>{task.isDone?"UnDone":"Done"}</button>
            <button style={{margin:'0.5%'}} onClick={()=>handleEdit()}>edit</button>
            <button style={{margin:'0.5%'}} onClick={handleDelete}>delete</button>
            </div>
            
        </div>
    )
}

export default Task
