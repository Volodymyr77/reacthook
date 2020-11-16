
import './App.css';
import React, {Component, useState, useEffect} from "react";

// class App extends Component {
//   state = {
//     count: 0,
//     a: 1,
//     b: 2,
//   }
//
//   onInc = () => {
//     // this.setState({});
//    this.setState((prevState) => ({
//      count: this.state.count + 1
//    }))
//   }

  // render() {
  //   const {count} = this.state;
  //   return <div className="App">
  //     <h1> {count}</h1>
  //     <button onClick={this.onInc}>inc</button>
  //
  //   </div>
  // }
// }

 function App() {
     const [count, setCountVal] = useState(1);
     const [todo, setTodo] = useState(null);

     const fetchTodo = async () => {
         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
         const data = await response.json();


         setTodo(data);
         console.log(data);
     }


     useEffect(() => {
         fetchTodo(count);

     }, [count]);

  return (
    <div className="App">
        <h1> {count}</h1>
        {!!todo && (
        <div>
            <h2>{todo.title}</h2>
            <h2>{todo.completed ? "task is done" : "task is not done yet"}</h2>
        </div>
        )
        }

     <button
         onClick={() => {
             setCountVal((prevCount) => prevCount + 1);
         }}
     >
         inc
     </button>
   </div>
  );
}

export default App;
