//creating react

const React={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);
        if(typeof children==='object')
        {
            for(let val of children)
            {
                element.append(val);
            }
        }
        else
        {
        element.innerText=children;
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
const header2=React.createElement('h2',
   {
    fontSize:"18px",
    backgroundColor:'black',
    color:'white'
} 
,"chlo bhai!");

const li1=React.createElement('li',{},'html');
const li2=React.createElement('li',{},'css');
const li3=React.createElement('li',{},'js');
const ul=React.createElement('ul', {
    fontSize:"18px",
    backgroundColor:'black',
    color:'white'
},[li1,li2,li3]);

ReactDom.render(header1,document.getElementById('root'));
ReactDom.render(header2,document.getElementById('root'));
ReactDom.render(ul,document.getElementById('root'));