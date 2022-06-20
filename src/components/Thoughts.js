import React from 'react'
import ThoughtsList from './ThoughtsList';

const Thoughts = ({handleAllThoughtsSubmit, thoughts, thoughtsDate, handleThoughts, handleThoughtsDate, allThoughts,
    handleRemoveThoughts
}) => {
  return (
    <form className='formthoughts' action="" onSubmit={handleAllThoughtsSubmit}>

        <div className='firstrow'>
            <label htmlFor=""></label> <label htmlFor="">Date <input type="Date" name='thoughtsDate' value={thoughtsDate} onChange={handleThoughtsDate} /></label>
        </div>

        <div className='secondrow'>
            <textarea name="thoughts" id="" cols="30" rows="5" placeholder='Any Thoughts?' value={thoughts} onChange={handleThoughts} ></textarea>
        </div>

        <div className='thirdrow'>
            <input className='btnSave btn btn-primary' type="submit" value={"SAVE"} />
        </div>
        <div>
            <ThoughtsList allThoughts={allThoughts} handleRemoveThoughts={handleRemoveThoughts} />
        </div>

    </form>
  )
}
export default Thoughts;
