import React from 'react'
import TasksList from './TasksList';

const Task = ({tasksDate,tasks,allTasks,  handleTasksDate, handleTasks, handleAllTasksSubmit,handleRemoveTask}) => {
  return (
    <form className='formtask' action="" onSubmit={handleAllTasksSubmit}>

        <div className='firstrow'>
            <label htmlFor=""></label> <label htmlFor="">Date <input type="Date" name='tasksDate' value={tasksDate} onChange={handleTasksDate} /></label>
        </div>

        <div className='secondrow'>
            <textarea name="tasks" id="" cols="30" rows="5" placeholder='Input Task here.' value={tasks} onChange={handleTasks} ></textarea>
        </div>

        <div className='thirdrow'>
            <input className='btnSave btn btn-success' type="submit" value={"SAVE"} />
        </div>
        <div>
            <TasksList allTasks={allTasks} handleRemoveTask={handleRemoveTask} />
        </div>

    </form>
  )
}
export default Task;

