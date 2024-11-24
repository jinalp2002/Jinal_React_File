const xyz = React.createElement("div", {id: "jini"}, 
      React.createElement("h1",{id: "para"}, "jinal patel...!!")
);

console.log(xyz);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(xyz)