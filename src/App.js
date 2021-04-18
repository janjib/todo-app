import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap'
import ToDoList from './Component/ToDoList' 
import InputSection from './Component/InputSection';
import {useState,useEffect} from "react"

function App() {

  // const randomID = () => {
  //   let ID = Math.floor(Math.random()*1000)
  //   return ID
  // }

  const dateRemark = () => {
    let today = new Date().toLocaleDateString()

     return today
    // const d = new Date();
    // return d.getDate()
  }

  // const [inputText,setInputText] = useState("")
  const [inputQuery,setInputQuery] = useState("");
  const [listTodo,setListTodo] = useState([]);
  const [timeCreated,setTimeCreated] = useState("")
  
 useEffect(()=>{
setTimeCreated(dateRemark)
 },[])

  const handleInputChange = e => {
    setInputQuery(e.target.value)
  }

  const handleClickAdd = () => {
   setInputQuery('')
   setListTodo([...listTodo,{text:inputQuery,completed:false,dateCreated : timeCreated,id:Math.floor(Math.random()*1000)}])
  }

  return (
    <Container>
    <div className="App">
      <h1 className="text-center my-5 todo-title">TöDo</h1>
    </div>
    <InputSection handleClickAdd={handleClickAdd} handleInputChange={handleInputChange} inputQuery={inputQuery}/>
{   listTodo.map(item => {
  return <ToDoList item={item} key={item.id} id={item.id} listTodo={listTodo} setListTodo={setListTodo}className="my-5"/>
}) }
    </Container>
  );
}

export default App;
