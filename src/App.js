import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
const App = () => {
  const [message, setMessage] = useState({
    id: '',
    text: ''
  })
  const [list, setList] = useState([])
  const [editableItem, setEditableItem] = useState({
    id: '',
    isEditing: false
  })

  const addHandler = (e) => {
    e.preventDefault()
    let todoList = {
      id: new Date().getTime().toString(),
      text: message.text
    }
    setList([...list, todoList])
    setMessage({
      id: '',
      text: ''
    })
  }
  const editHandler = (e) => {
    e.preventDefault()
    let newTodoList = list.map((item) => {
      if (item.id === editableItem.id) {
        return {
          text: message.text,
          id: editableItem.id
        }
      }
      else {
        return item
      }
    })
    setList(newTodoList)
    setMessage({
      id: '',
      text: ''
    })
    setEditableItem({
      id: '',
      isEditing: false
    })
  }
  const deleteHandler = (id) => {
    let newTodo = list.filter((item) => {
      return item.id !== id
    })
    setList(newTodo)
  }
  const changeText = (id) => {
    setEditableItem({
      ...editableItem,
      id: id,
      isEditing: true
    })
    let editableText = list.find((item) => {
      return item.id === id
    })
    setMessage({
      ...message,
      id: id,
      text: editableText.text
    })
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input type='text' value={message.text} onChange={(e) => setMessage({ ...message, text: e.target.value })}></input>
        {'  '}
        {
          editableItem.isEditing ?
            <Button variant='secondary' type='button' onClick={editHandler}>Edit</Button> :
            <Button variant='light' type='button' onClick={addHandler} >Add</Button>
        }
        <hr></hr>
        {
          list.length === 0 && <h4>There are no items in the List</h4>
        }
        {/* <ul>
          {
            list.map((item) => {
              const { id } = item
              return (
                <li key={item.id}>
                  {item.text}{' '}
                  <Button variant="danger" onClick={() => deleteHandler(id)}>Delete</Button>{' '}
                  <Button variant="primary" onClick={() => changeText(id)}>Edit</Button>{' '}

                </li>
              )
            })
          }
        </ul> */}
        <ListGroup>
          {
            list.map((item) => {
              const { id, text } = item
              return (
                <ListGroup.Item key={id}>
                  {text}{' '}
                  <Button variant='danger' onClick={() => deleteHandler(id)}>Delete</Button>{'  '}
                  <Button variant='primary' onClick={() => changeText(id)}>Edit</Button>
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
      </div>
    </>
  )
}
export default App