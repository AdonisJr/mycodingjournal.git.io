import React from 'react'

const ThoughtsList = ({allThoughts, handleRemoveThoughts}) => {
  const thoughtsList = allThoughts.map(item =>{
    return <tr>
              <td> {item.thoughtsDate} <br /> {item.thoughts} </td>
              <td><input type="checkbox" /></td>
              <td><input className='btn btn-danger' type="button" id={item.id} onClick={handleRemoveThoughts} value={'Del'} /></td>
           </tr>
  })
  return (
    <table className='table table-striped border '>
        <thead className='bg-success text-light '>
            <tr>
                <td>Thoughts of the Day</td>
            </tr>
        </thead>
        <tbody>
            {thoughtsList}
        </tbody>
    </table>
  )
}
export default ThoughtsList;
