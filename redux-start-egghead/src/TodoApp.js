import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer'

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.todoId = 0;
    }
    getVisibleTodos(filter, todos) {
        switch(filter) {
            case "SHOW_ALL":
                return todos;
            case "SHOW_ACTIVE":
                return todos.filter( t => !t.completed);
            case "SHOW_COMPLETED":
                return todos.filter( t => t.completed);
            default:
                return todos
        }
    }
    addTodo() {
        this.props.onAddTodo(this.input.value, this.todoId);
        this.input.value = '';
        this.todoId++;
    }
    toggleTodo(id) {
        this.props.onToggleTodo(id)
    }
    render() {
        const visibleTodos = this.getVisibleTodos(this.props.testStore.visibilityFilter, this.props.testStore.todos);
        console.log('rend', this.props.testStore);
        return (
            <div>
                <input ref={node => {
                    this.input = node
                }}/>
                <button onClick={this.addTodo.bind(this)}>click</button>
                {visibleTodos.map( (todo, index) =>
                    <li key={todo.id}
                    onClick={this.toggleTodo.bind(this, todo.id)} style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}>{todo.text}</li>
                )}
                <Footer setVisibilityFilter={this.props.setVisibilityFilter}>

                </Footer>
            </div>
        )
    }
}
export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTodo: (text, id) => {
            dispatch({
                type: 'ADD_TODO',
                id: id,
                text: text
            })
        },
        onToggleTodo(id) {
            dispatch({
                type: 'TOGGLE_TODO',
                id: id
            })
        },
        setVisibilityFilter(filter) {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: filter
            })
        }
    })
)(TodoApp)