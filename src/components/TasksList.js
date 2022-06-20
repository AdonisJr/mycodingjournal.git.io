import React from 'react'

const TasksList = ({handleRemoveTask, allTasks}) => {
  const tasksList = allTasks.map(item =>{
    return <tr>
              <td> {item.tasksDate} <br /> {item.tasks} </td>
              <td><input type="checkbox" /></td>
              <td><input className='btn btn-danger' type="button" id={item.tasksID} onClick={handleRemoveTask} value={'Del'} /></td>
           </tr>
  })
  return (
    <table className='table table-striped table-hover'>
        <thead className='bg-primary text-white'>
            <tr>
                <td className='col-sm-10'>Thoughts of the Day</td>
            </tr>
        </thead>
        <tbody>
            {tasksList}
        </tbody>
    </table>
  )
}
export default TasksList;

