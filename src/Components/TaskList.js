import React from 'react'
import { useSelector } from 'react-redux'
import DoneTask from './DoneTask'
import Task from './Task'

const TaskList = () => {
    const tasks=useSelector(state => state.taskReducer.tasks)

    return (
        <div>
            {tasks.length?tasks.map(el=> el.isDone?null:<Task key={el.id} task={el} />):<p>there are no todos</p>}
           { console.log(tasks)}
           <div style={{margin:"5% 0% 1% 0%", padding:"2%", backgroundColor:"rgba(242, 241, 239, 0.80)"}}>
           <h2 > Finished tasks </h2>
           {tasks.filter((el=> el.isDone)).length? tasks.filter((el=> el.isDone)).map(el=> <DoneTask key={el.id} task={el} />):<p>no tasks are finished yet</p>}
           </div>
           
        </div>
    )
}

export default TaskList
