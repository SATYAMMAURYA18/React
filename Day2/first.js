
const React={
    createElement:function(tag,styles,children)
    {
        const element=document.createElement(tag);
        if(typeof children==="object")
        {
            for(let val of children)
            {
                element.append(val);
            }
        }
        else{
            element.append(children);
        }
        for(let key in styles)
        {
            element.style[key]=styles[key];
        }
        return element;
    }
}

const ReactDom={
    render:function(element,root)
    {
        root.append(element);
    }
}

const header1=React.createElement('h1',
{
    fontSize:"30px",
    backgroundColor:'red',
    color:'white'
}
,"hello bhai");

ReactDom.render(header1,document.getElementById('root'));