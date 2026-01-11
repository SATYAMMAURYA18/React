const React={
  createEle:function(tag,styles,children)
  {
    const element=document.createElement(tag);
    element.innerText=children;
    for(const key in styles)
    {
      element.style[key]=styles[key];
    }
    console.log(element);
    return element;
  }
}

const ReactDom={
  render:function(elem,root)
  {
    root.append(elem);
  }
}
const header=React.createEle('h1',{
  color:'blue',
  textAlign:'center',
  backgroundColor:'yellow',
  height:"50px",
  width:"100%",
  border:"1px solid black",
  borderRadius:"10px"
},'Hello Bhai G 😂');
ReactDom.render(header,document.getElementById('root'));