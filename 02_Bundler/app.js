const element=React.createElement('h1',{id:"first",className:"Satyam",style:{
    backgroundColor:"#1d405ce3",color:"white",fontWeight:"bold",textAlign:"center"
}},"Hello,Lala");

const element2=React.createElement('h3',{id:"second",className:"Satyam",style:{
    backgroundColor:"#b60fa8e3",color:"white",fontWeight:"bold",textAlign:"center"
}},"Hello,bhai chlo");

const div1=React.createElement('div',{},[element,element2]);

// ReactDOM.render(element,document.getElementById('root'));
// ReactDOM.render(element2,document.getElementById('root'));
ReactDOM.render(div1,document.getElementById('root'));