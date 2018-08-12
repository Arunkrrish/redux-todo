import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../assets/App.css'

const App = () => (
  
  <div className="headerform">
    <div className="container">
        <div className="row addheader">
            <div align="center" className="col-md-12">
            <h1> Redux Add To Do List</h1><br/><br/>
            </div>
          </div>
          <div className="row taskadd">
            <div className="col-md-4">
            <br/><br/>
            <AddTodo />
            </div>
            <div className="col-md-8">
            <br/><br/>
            <Footer /> <br/> <br/>
            <VisibleTodoList />
            <br/><br/>
            </div>
          </div>
    </div>
  </div>
  
)

export default App
