import React, {useEffect, useState} from 'react'
import Header from './Header.js';
import '../css/Home.css'
import Tasks from './Tasks.js';
import Thoughts from './Thoughts.js';

const retrieveThoughts = localStorage.getItem('allThoughts') ?  JSON.parse(localStorage.getItem('allThoughts')) : [];
const Home = () => {

//thoughts
const [id, setID] = useState(Date.now())
const [thoughtsDate, setThoughtsDate] = useState('');
const [thoughts, setThoughts] = useState('');
const [allThoughts, setAllThoughts]= useState(retrieveThoughts);

// Task
const [tasksID, setTasksID] = useState(Date.now())
const [tasksDate, setTasksDate] = useState('');
const [tasks, setTasks] = useState('');
const [allTasks, setAllTasks] = useState(localStorage.getItem('allTasks') ? JSON.parse(localStorage.getItem('allTasks')) : []);


//set thoughts and date
function handleThoughtsDate (event){
  setThoughtsDate(event.target.value);
}
function handleThoughts (event){
  setThoughts(event.target.value)
}

//set task and date

function handleTasksDate (event){
  setTasksDate(event.target.value);
}
function handleTasks (event){
  setTasks(event.target.value)
}


//function for thoughts submit
function handleAllThoughtsSubmit(e){
  setID(Date.now());
  e.preventDefault();
  if (thoughts !== "" && thoughtsDate !== "") {
    const data = {
      id,thoughtsDate, thoughts
    }
    setAllThoughts([...allThoughts, data]);
    alert(thoughtsDate)
    setThoughtsDate('');
    setThoughts('');
    
  }
}

// function for tasks submit
function handleAllTasksSubmit(e){
  setTasksID(Date.now());
  e.preventDefault();
  if (tasks !== "" && tasksDate !== ""){
    const data = {
      tasksID, tasks, tasksDate
    }
    setAllTasks([...allTasks, data]);

    setTasksDate('');
    setTasks('');
  }
}


  //function for deleting thoughts
  function handleRemoveThoughts(e){
    const confirmMessage = window.confirm("Are you sure you wan't to delete this Thought?")
      if (confirmMessage){
      let numId = parseInt(e.target.id);
      let newThoughts = [...allThoughts].filter(thought => {return thought.id !== numId});
      setAllThoughts(newThoughts)
    }
  }

  //function for deleting tasks

function handleRemoveTask(e){
  const confirmMessage = window.confirm("Are you sure you wan't to delete this Task?")
  if(confirmMessage){
    let numId = parseInt(e.target.id);
    let newTasks = [...allTasks].filter(task => {return task.tasksID !== numId});
    setAllTasks(newTasks);
  }
}


useEffect(()=>{
    window.localStorage.setItem('allThoughts', JSON.stringify(allThoughts))
    window.localStorage.setItem('allTasks', JSON.stringify(allTasks))
  }, [allThoughts, allTasks])

  return (
    <div>
      <header>
        <Header />
      </header>
        <main>
            <div className='thoughts'>
                <h3>Thoughts of the Day</h3>
                <Thoughts thoughtsDate={thoughtsDate} thoughts={thoughts} handleThoughts={handleThoughts} handleThoughtsDate={handleThoughtsDate} handleAllThoughtsSubmit={handleAllThoughtsSubmit} allThoughts={allThoughts}
                handleRemoveThoughts={handleRemoveThoughts}  
                
                />
            </div>
            <div className='task'>
            <h3>Tasks of the Day</h3>
                <Tasks tasksDate={tasksDate} tasks={tasks} handleTasksDate={handleTasksDate} handleTasks={handleTasks} handleAllTasksSubmit={handleAllTasksSubmit} allTasks={allTasks}
                handleRemoveTask={handleRemoveTask}
                />

            </div>

        </main>
          
        <footer>

        </footer>
    </div>
  )
}
export default Home;
