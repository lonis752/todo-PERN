import './App.scss'
import * as bootstrap from 'bootstrap'
// Components
import { InputTodo } from './components/inputTodo'
import { ListTodos } from './components/listTodos'

function App() {

  return (
    <>
      <InputTodo />
      <ListTodos />
    </>
  )
}

export default App
