import React from 'react'
import {Card,Button} from 'react-bootstrap'

function ToDoList({item,listTodo,setListTodo}) {

  const handleDelete=()=>{
   setListTodo(listTodo.filter(elem => {
     return elem.id !== item.id
   }))
  }

  const handleDone = () => {
    setListTodo(listTodo.map(el => {
      if(el.id===item.id){
        return {...el,completed:!el.completed}
      }
      return el
    }))
  }

    return (
        <Card style={{ width: '75%',backgroundColor:"#fffffe" }} className="mx-auto my-2">
  <Card.Body className="d-flex justify-content-between">
      <div>
    <Card.Title className={item.completed ? "checked card-title" : "card-title"}>{item.text}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{item.dateCreated}</Card.Subtitle>
    </div>
    <div>
    <Button variant="primary" className="mx-1" onClick={handleDone}>{item.completed ? <i className="fas fa-undo"></i> : <i className="far fa-check-circle"></i>}</Button>
    <Button variant="danger" className="mx-1" onClick={handleDelete}><i className="far fa-trash-alt"></i></Button>
    </div>
  </Card.Body>
</Card>
    )
}

export default ToDoList
