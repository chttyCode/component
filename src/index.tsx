// import React from "react";
// import ReactDom from "react-dom";

// function rootConfig(target: typeof App){
//   target.role = 'root'
// }

// @rootConfig
// class App extends React.Component {
//   static role: string;
//   state={
//     number:0
//   }
//   handlerClick=()=>{
//     this.setState({number:this.state.number+1})
//   }
//   render(){
//     return  <>
//     <div>Hello React typescript {this.state.number}</div>
//     <button onClick={this.handlerClick}> +</button>
//     </>
//   }
// }

// ReactDom.render(<App />, document.getElementById("root"));

const p = new Promise((resolve, reject   ) => {
  resolve(true);
});
console.log(p);
