// imports
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import DoneTask from './DoneTask'
import Task from './Task'


//styles for material ui component
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
      


//tasklist component function
const TaskList = () => {
    const classes = useStyles();
    //local state
    const [show, setShow] = useState('all')
    // const [showDone, setShowDone] = useState(false)
    // const [showUndone, setShowUndone] = useState(false)

    //calling the state to display
    const tasks=useSelector(state => state.taskReducer.tasks)

    //handleClicks
    // const handleShow=()=>{
    //     setShowDone(!showDone); 
    //     setShowAll(false); 
    //     setShowUndone(false)
    // }
    
    // const handleAll=()=>{
    //     setShowDone(false); 
    //     setShowAll(true); 
    //     setShowUndone(false)
    // }
    // const handleUndone=()=>{
    //     setShowDone(false); 
    //     setShowAll(false); 
    //     setShowUndone(!showUndone)
    // }


    return (
        <div className={classes.root}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={()=>setShow('all')}>All</Button>
                <Button onClick={()=>setShow('done')}>Finished</Button>
                <Button onClick={()=>setShow('undone')}>Unfinished</Button>
            </ButtonGroup>
            {/* show all */}
            {show=='all'?tasks.length?tasks.map(el=> <Task key={el.id} task={el} />):<p>there are no todos</p>:
            show=='done'?tasks.filter(el=> el.isDone).length?tasks.map(el=> el.isDone? <Task key={el.id} task={el} />:null):<p>there are no finished tasks</p>:
            tasks.filter(el=> el.isDone==false).length?tasks.map(el=>el.isDone?null: <Task key={el.id} task={el} />):<p>there are no unfinished tasks</p>}

            {/* show finished tasks */}
            {/* {showDone?tasks.length?tasks.map(el=> el.isDone? <Task key={el.id} task={el} />:null):<p>there are no finished tasks</p>:null} */}

            {/* show unfinished tasks */}
            {/* {showUndone?tasks.length?tasks.map(el=>el.isDone?null: <Task key={el.id} task={el} />):<p>there are no unfinished tasks</p>:null} */}


            {/* {tasks.length?tasks.map(el=> el.isDone?null:<Task key={el.id} task={el} />):<p>there are no todos</p>}
           { console.log(tasks)}
           <div style={{margin:"5% 0% 1% 0%", padding:"2%", backgroundColor:"rgba(242, 241, 239, 0.80)"}}>
           <h2 > Finished tasks </h2>
           {tasks.filter((el=> el.isDone)).length? tasks.filter((el=> el.isDone)).map(el=> <DoneTask key={el.id} task={el} />):<p>no tasks are finished yet</p>}
           </div>
            */}
        </div>
    )
}

export default TaskList
