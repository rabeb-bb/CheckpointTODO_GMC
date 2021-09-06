import React from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from "../JS/Actions/actions"



const AddTask = () => {
    const dispatch = useDispatch()
    const [description, setDesc]= React.useState('')
    const handleClick=(e)=>{
        dispatch(addTask({id: Math.random(),description, isDone:false}))
        e.preventDefault()
        setDesc('')
    }
    const handleChange=(e)=>{
        setDesc(e.target.value)
    }


    return (
        <div>
            <form style={{margin:'2%', width:'80%'}}>
                <input 
                    style={{margin:'2%', padding:'1%', width:'80%', height:'3vh', borderRadius:'5px', fontSize:'1.5em'}} 
                    placeholder="write to do..." 
                    label='TODO'
                    value={description}
                    onChange={(e)=>handleChange(e)}/>
                <button 
                    style={{margin:'2%', padding:'1%', width:"6%", height:'6.5vh', borderRadius:'5px', fontSize:'1.5em', backgroundColor:'blue', color:"white", border:"none"}}  
                    onClick={(e)=>handleClick(e)}>
                        add
                </button>
            </form>
            
        </div>
    )
}

export default AddTask
