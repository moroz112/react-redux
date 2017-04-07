import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer'
import { loadState } from './localStorage'
import { v4 } from 'node-uuid';
import { toggleTodo } from './actions/TooggleTodo';
import { getPhotos } from './actions/getPhotos';



class TodoApp extends Component {
    constructor(props) {
        super(props);
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
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('nextProps will update', nextProps)
    }
    addTodo() {
        this.props.onAddTodo(this.input.value);
        this.input.value = '';
    }
    toggleTodo(id) {
        this.props.onToggleTodo(id)
    }
    render() {
        const { photos, isLoading } = this.props.testStore.fetchPhotos;
        const persistedState = loadState();
        const visibleTodos = this.getVisibleTodos(this.props.testStore.visibilityFilter, persistedState.todos);
        console.log('rend', this.props.testStore);
        console.log(isLoading);

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
                <div>
                    <button onClick={this.props.onGetPhotos}>GET PHOTOS</button>
                    { this.props.testStore.fetchPhotos.isLoading.toString() }

                </div>
                <div>
                    {photos.map( (item, index) =>
                        <li key={index}>{item}</li>
                     )}
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({
        testStore: state,
    }),
    dispatch => ({
        onAddTodo: (text) => {
            dispatch({
                type: 'ADD_TODO',
                id: v4(),
                text: text
            })
        },
        onToggleTodo(id) {
            dispatch(toggleTodo(id))
        },
        setVisibilityFilter(filter) {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: filter
            })
        },
        onGetPhotos() {
            dispatch(getPhotos());
        }
    })
)(TodoApp)