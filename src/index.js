// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import "./index.css";
// import "./login";
// import Login from "./login";

// // let data = [
// //   {
// //     name: "Tab001",
// //     text:
// //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?"
// //   },
// //   {
// //     name: "Tab002",
// //     text:
// //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!"
// //   },
// //   {
// //     name: "Tab003",
// //     text:
// //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse."
// //   }
// // ];

// function App() {
//   // constructor() {
//   //   super();

//   //   this.state = {
//   //     activeTab: 0,
//   //     data: data
//   //   };

//   //   this.changeTabOnClick = this.changeTabOnClick.bind(this);
//   // }

//   // changeTabOnClick(index) {
//   //   this.setState({
//   //     activeTab: index
//   //   });
//   // }
//   return (
//     <div className="tabs-body">
//       {/* <TabHeader
//           data={this.state.data}
//           click={this.changeTabOnClick}
//           activeId={this.state.activeTab}
//         />{" "}
//         <TabContent data={this.state.data} activeId={this.state.activeTab} />{" "} */}
//       <Link to="/login">Login</Link>
//       <Route path="/login" component={Login}></Route>
//     </div>
//   );
// }

// // class TabHeader extends React.Component {
// //   doClick(index, event) {
// //     this.props.click(index);
// //   }

// //   render() {
// //     let activeClass = this.props.activeId;

// //     let tabs = this.props.data.map((item, index) => {
// //       return (
// //         <li className={activeClass === index ? "active" : ""}>
// //           <a onClick={this.doClick.bind(this, index)}>
// //             {" "}
// //             <span> {item.name} </span>
// //           </a>
// //         </li>
// //       );
// //     });

// //     return <ul className="tabs-header"> {tabs} </ul>;
// //   }
// // }

// // class TabContent extends React.Component {
// //   render() {
// //     let activeClass = this.props.activeId;

// //     let content = this.props.data.map((item, index) => {
// //       return (
// //         <div
// //           className={"tabs-textItem " + (activeClass === index ? "show" : "")}
// //         >
// //           {" "}
// //           <p> {item.text} </p>
// //         </div>
// //       );
// //     });

// //     return <div className="tabs-content"> {content} </div>;
// //   }
// // }

// ReactDOM.render(
//   <BrowserRouter>
//     <App></App>
//   </BrowserRouter>,
//   document.querySelector(".root")
// );

//Second

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
