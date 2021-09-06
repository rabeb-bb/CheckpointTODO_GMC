import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, finishTask } from '../JS/Actions/actions'

const Task = ({task, colored}) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [edited, setEdited] = useState(task.description)
    const handleClick= ()=>{
        dispatch(deleteTask(task.id))
    }
    const handleClicks= ()=>{
        dispatch(finishTask(task.id))
        alert(`Bravo! ${task.description} is done!`)
    }
    const handleTap=()=>{
        setEdit(true)
    }
    const handleChange=(e)=>{
        setEdited(e.target.value)
        
    }
    const handleSave=(e)=>{
        e.preventDefault()
        dispatch(editTask({id: task.id, description: edited}))
        setEdit(false)
    }
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
            <div>            
            {edit?
                <form> 
                <input value={edited} onChange={(e)=>handleChange(e)}/>
                <button onClick={(e)=>handleSave(e)}>save</button>
                </form>:<p >{task.description}</p>}
            </div>
            <div>
            <button style={{margin:'0.5%'}} onClick={handleClicks}>done</button>
            <button style={{margin:'0.5%'}} onClick={handleTap}>edit</button>
            <button style={{margin:'0.5%'}} onClick={handleClick}>delete</button>
            </div>
            
        </div>
    )
}

export default Task
