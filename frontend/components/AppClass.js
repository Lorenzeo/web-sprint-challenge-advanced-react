import React from 'react'
import axios from 'axios'

export default class AppClass extends React.Component {
state ={
  x: 2,
  y: 2,
  steps: 0,
  board:['','','','','B','','','',''],
  message: '',
  email: ''
}


handleClickLeft = () =>{
  if(this.state.board[4] === "B"){
   this.setState({
     ...this.state,
     board: ['','','','B','','','','',''],
     steps: this.state.steps + 1,
     message: '',
     x:1,
     y:2,
   })
  }if(this.state.board[1] === "B"){
    this.setState({
      ...this.state,
      board: ['B','','','','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:1,
      y:1,
    })
   }if(this.state.board[7] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','','B','',''],
      steps: this.state.steps + 1,
      message: '',
      x:1,
      y:3,
    })
   }if(this.state.board[2] === "B"){
    this.setState({
      ...this.state,
      board: ['','B','','','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:1,
    })
   }if(this.state.board[5] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','B','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
   }if(this.state.board[8] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','','','B',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:3,
    })
   }else if(this.state.board[3] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go left",
      
    })
  }else if(this.state.board[0] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go left",
     
    })
  }else if(this.state.board[6] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go left",
      
    })
  }
}

handleClickRight = () =>{
  if(this.state.board[4] === "B"){
   this.setState({
     ...this.state,
     board: ['','','','','','B','','',''],
     steps: this.state.steps + 1,
     message: '',
     x:3,
     y:2,
   })
  }if(this.state.board[1] === "B"){
    this.setState({
      ...this.state,
      board: ['','','B','','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:3,
      y:1,
    })
   }if(this.state.board[7] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','','','','B'],
      steps: this.state.steps + 1,
      message: '',
      x:3,
      y:3,
    })
   }if(this.state.board[2] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go right",
      
    })
   }if(this.state.board[5] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go right",
      
    })
   }if(this.state.board[8] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go right",
      
    })
   }else if(this.state.board[3] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','B','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
  }else if(this.state.board[0] === "B"){
    this.setState({
      ...this.state,
      board: ['','B','','','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:1,
    })
  }else if(this.state.board[6] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','','','B',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:3,
    })
  }
}

handleClickUp = () =>{
  if(this.state.board[4] === "B"){
   this.setState({
     ...this.state,
     board: ['','B','','','','','','',''],
     steps: this.state.steps + 1,
     message: '',
     x:2,
     y:1,
   })
  }if(this.state.board[1] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go up",
    })
   }if(this.state.board[7] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','B','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
   }if(this.state.board[2] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go up",
      
    })
   }if(this.state.board[5] === "B"){
    this.setState({
      ...this.state,
      board: ['','','B','','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:3,
      y:1,
    })
   }if(this.state.board[8] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','B','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:3,
      y:2,
    })
   }else if(this.state.board[3] === "B"){
    this.setState({
      ...this.state,
      board: ['B','','','','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:1,
      y:1,
    })
  }else if(this.state.board[0] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go up",
    })
  }else if(this.state.board[6] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','B','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:1,
      y:2,
    })
  }
}

handleClickDown = () =>{
  if(this.state.board[4] === "B"){
   this.setState({
     ...this.state,
     board: ['','','','','','','','B',''],
     steps: this.state.steps + 1,
     message: '',
     x:2,
     y:3,
   })
  }if(this.state.board[1] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','B','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:2,
      y:2,
    })
   }if(this.state.board[7] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go down",
    })
   }if(this.state.board[2] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','B','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:3,
      y:2,
    })
   }if(this.state.board[5] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','','','','B'],
      steps: this.state.steps + 1,
      message: '',
      x:3,
      y:3,
    })
   }if(this.state.board[8] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go down",
      
    })
   }else if(this.state.board[3] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','','','','B','',''],
      steps: this.state.steps + 1,
      message: '',
      x:1,
      y:3,
    })
  }else if(this.state.board[0] === "B"){
    this.setState({
      ...this.state,
      board: ['','','','B','','','','',''],
      steps: this.state.steps + 1,
      message: '',
      x:1,
      y:2,
    })
  }else if(this.state.board[6] === "B"){
    this.setState({
      ...this.state,
      message: "You can't go down",
    
    })
  }
}

reset = () =>{
  this.setState({
    ...this.state,
    x: 2,
    y: 2,
    steps: 0,
    board:['','','','','B','','','',''],
    message: '',
    email: ''
  })
}




handleSubmit = (e) => { 
  e.preventDefault();
  const info = {
    x:this.state.x,
    y:this.state.y,
    steps:this.state.steps,
    email: this.state.email
  };
  
  axios.post('http://localhost:9000/api/result', info)
   .then(response =>{
     this.setState({
       ...this.state,
       message: response.data.message,
       email: ''
     })
   })
   .catch(err =>{
     this.setState({
       ...this.state,
       message: err.response.data.message,
       email: ''
     })
   })
}


  render() {
    const { className } = this.props
    const times = <h3 id="steps">You moved {this.state.steps} times</h3>
    const time = <h3 id="steps">You moved {this.state.steps} time</h3>

    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          {this.state.steps === 1 ? time : times }
          {/* <h3 id="steps">You moved {this.state.steps} times</h3> */}
        </div>
        <div id="grid">
          {this.state.board.map((val,idx)=>{
            if ( val === "B"){
              return (<div key={idx} className="square active" >{val}</div>)
            }
            return (<div key={idx} className="square" >{val}</div>)
          })}
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          {this.state.board.map((val,idx)=>{
            return (<button key={idx} value={val} id= "left" onClick={()=> this.handleClickLeft(idx)}>LEFT</button>)
          })}
           {this.state.board.map((val,idx)=>{
            return (<button key={idx} id= "up" onClick={()=> this.handleClickUp(idx)}>UP</button>)
          })}
           {this.state.board.map((val,idx)=>{
            return (<button key={idx} id= "right" onClick={()=> this.handleClickRight(idx)}>RIGHT</button>)
          })}
           {this.state.board.map((val,idx)=>{
            return (<button key={idx} id= "down" onClick={()=> this.handleClickDown(idx)}>DOWN</button>)
          })}
          <button id="reset" onClick={() => this.reset()}>reset</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input 
           id="email" 
           type="email"
           placeholder="type email" 
           name='email' 
           value={this.state.email} 
           onChange={(e)=> {this.setState({email: e.target.value})}}></input>
          <input id="submit" type="submit"  ></input>
        </form>
      </div>
    )
  }
}
