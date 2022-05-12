import axios from 'axios'

import React, { useState } from 'react'

export default function AppFunctional(props) {
  const [state, setState] = useState ({
    x: 2,
    y: 2,
    steps: 0,
    board:['','','','','B','','','',''],
    message: '',
    email: ''
  })
  
const handleClickLeft = () =>{
  if(state.board[4] === "B"){
   setState({
     ...state,
     board: ['','','','B','','','','',''],
     steps: state.steps + 1,
     message: '',
     x:1,
     y:2,
   })
  }if(state.board[1] === "B"){
    setState({
      ...state,
      board: ['B','','','','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:1,
      y:1,
    })
   }if(state.board[7] === "B"){
    setState({
      ...state,
      board: ['','','','','','','B','',''],
      steps: state.steps + 1,
      message: '',
      x:1,
      y:3,
    })
   }if(state.board[2] === "B"){
    setState({
      ...state,
      board: ['','B','','','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:1,
    })
   }if(state.board[5] === "B"){
    setState({
      ...state,
      board: ['','','','','B','','','',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
   }if(state.board[8] === "B"){
    setState({
      ...state,
      board: ['','','','','','','','B',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:3,
    })
   }else if(state.board[3] === "B"){
    setState({
      ...state,
      message: "You can't go left",
      
    })
  }else if(state.board[0] === "B"){
    setState({
      ...state,
      message: "You can't go left",
     
    })
  }else if(state.board[6] === "B"){
    setState({
      ...state,
      message: "You can't go left",
      
    })
  }
}

const handleClickRight = () =>{
  if(state.board[4] === "B"){
   setState({
     ...state,
     board: ['','','','','','B','','',''],
     steps: state.steps + 1,
     message: '',
     x:3,
     y:2,
   })
  }if(state.board[1] === "B"){
    setState({
      ...state,
      board: ['','','B','','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:3,
      y:1,
    })
   }if(state.board[7] === "B"){
    setState({
      ...state,
      board: ['','','','','','','','','B'],
      steps: state.steps + 1,
      message: '',
      x:3,
      y:3,
    })
   }if(state.board[2] === "B"){
    setState({
      ...state,
      message: "You can't go right",
      
    })
   }if(state.board[5] === "B"){
    setState({
      ...state,
      message: "You can't go right",
      
    })
   }if(state.board[8] === "B"){
    setState({
      ...state,
      message: "You can't go right",
      
    })
   }else if(state.board[3] === "B"){
    setState({
      ...state,
      board: ['','','','','B','','','',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
  }else if(state.board[0] === "B"){
    setState({
      ...state,
      board: ['','B','','','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:1,
    })
  }else if(state.board[6] === "B"){
    setState({
      ...state,
      board: ['','','','','','','','B',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:3,
    })
  }
}

const handleClickUp = () =>{
  if(state.board[4] === "B"){
   setState({
     ...state,
     board: ['','B','','','','','','',''],
     steps: state.steps + 1,
     message: '',
     x:2,
     y:1,
   })
  }if(state.board[1] === "B"){
    setState({
      ...state,
      message: "You can't go up",
    })
   }if(state.board[7] === "B"){
    setState({
      ...state,
      board: ['','','','','B','','','',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
   }if(state.board[2] === "B"){
    setState({
      ...state,
      message: "You can't go up",
      
    })
   }if(state.board[5] === "B"){
    setState({
      ...state,
      board: ['','','B','','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:3,
      y:1,
    })
   }if(state.board[8] === "B"){
    setState({
      ...state,
      board: ['','','','','','B','','',''],
      steps: state.steps + 1,
      message: '',
      x:3,
      y:2,
    })
   }else if(state.board[3] === "B"){
    setState({
      ...state,
      board: ['B','','','','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:1,
      y:1,
    })
  }else if(state.board[0] === "B"){
    setState({
      ...state,
      message: "You can't go up",
    })
  }else if(state.board[6] === "B"){
    setState({
      ...state,
      board: ['','','','B','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:1,
      y:2,
    })
  }
}

const handleClickDown = () =>{
  if(state.board[4] === "B"){
   setState({
     ...state,
     board: ['','','','','','','','B',''],
     steps: state.steps + 1,
     message: '',
     x:2,
     y:3,
   })
  }if(state.board[1] === "B"){
    setState({
      ...state,
      board: ['','','','','B','','','',''],
      steps: state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
   }if(state.board[7] === "B"){
    setState({
      ...state,
      message: "You can't go down",
    })
   }if(state.board[2] === "B"){
    setState({
      ...state,
      board: ['','','','','','B','','',''],
      steps: state.steps + 1,
      message: '',
      x:3,
      y:2,
    })
   }if(state.board[5] === "B"){
    setState({
      ...state,
      board: ['','','','','','','','','B'],
      steps: state.steps + 1,
      message: '',
      x:3,
      y:3,
    })
   }if(state.board[8] === "B"){
    setState({
      ...state,
      message: "You can't go down",
      
    })
   }else if(state.board[3] === "B"){
    setState({
      ...state,
      board: ['','','','','','','B','',''],
      steps: state.steps + 1,
      message: '',
      x:1,
      y:3,
    })
  }else if(state.board[0] === "B"){
    setState({
      ...state,
      board: ['','','','B','','','','',''],
      steps: state.steps + 1,
      message: '',
      x:1,
      y:2,
    })
  }else if(state.board[6] === "B"){
    setState({
      ...state,
      message: "You can't go down",
    
    })
  }
}
const reset = () =>{
    setState({
      ...state,
      x: 2,
      y: 2,
      steps: 0,
      board:['','','','','B','','','',''],
      message: '',
      email: ''
    })
  }

const onChange = (e) =>{
 setState({
   ...state,
   email: e.target.value
 })
}

const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      x:state.x,
      y:state.y,
      steps:state.steps,
      email: state.email
    };
    console.log(info)
  
    axios.post('http://localhost:9000/api/result',info)
    .then(response =>{
      setState({
        ...state,
        message: response.data.message,
        email: ''
      })
    })
    .catch(err =>{
      setState({
        ...state,
        message: err.response.data.message,
        email: ''
      })
    })
    
  }

  const times = <h3 id="steps">You moved {state.steps} times</h3>
  const time = <h3 id="steps">You moved {state.steps} time</h3>

  return (
    <div id="wrapper" className={props.className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
          {state.steps === 1 ? time : times }
        </div>
        <div id="grid">
          {state.board.map((val,idx)=>{
            if ( val === "B"){
              return (<div key={idx} className="square active" >{val}</div>)
            }
            return (<div key={idx} className="square" >{val}</div>)
          })}
        </div>
        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          {state.board.map((val,idx)=>{
            return (<button key={idx} value={val} id= "left" onClick={()=> handleClickLeft(idx)}>LEFT</button>)
          })}
           {state.board.map((val,idx)=>{
            return (<button key={idx} id= "up" onClick={()=> handleClickUp(idx)}>UP</button>)
          })}
           {state.board.map((val,idx)=>{
            return (<button key={idx} id= "right" onClick={()=> handleClickRight(idx)}>RIGHT</button>)
          })}
           {state.board.map((val,idx)=>{
            return (<button key={idx} id= "down" onClick={()=> handleClickDown(idx)}>DOWN</button>)
          })}
          <button id="reset" onClick={() => reset()}>reset</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input 
          id="email" 
          type="email"
          name="email"
          placeholder="type email" 
          value={state.email} 
          onChange={onChange}
          ></input>
          <input id="submit" type="submit" ></input>
        </form>
      </div>
  )
}
