const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);
    if (typeof children === "object") {
      for (val of children) {
        element.append(val);
      }
    } else {
      element.innerText = children;
    }
    for (let key in styles) {
      element.style[key] = styles[key];
    }
    return element;
  },
};

const ReactDom = {
  render: function (element, root) {
    root.append(element);
  },
};

const header1 = React.createElement(
  "h1",
  { fontSize: "30px", fontWeight: "bold", backgroundColor: "Yellow" },
  "Hello,Satyam"
);
const header2 = React.createElement(
  "h2",
  {
    fontSize: "80px",
    fontWeight: "1500",
    backgroundColor: "blue",
    border: "2px solid black",
    height: "300px",
    width: "400px",
    textAlign: "center",
    padding: "20px 30px",
    borderRadius: "20px",
  },
  "Bolo Lala"
);
//Creating list unordered and ordered
const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JAVASCRIPT");

const ul = React.createElement(
  "ul",
  {
    fontSize: "80px",
    fontWeight: "1500",
    backgroundColor: "red",
    padding: "20px 30px",
    borderRadius: "20px",
  },
  [li1, li2, li3]
);

const card=React.createElement("p", {
    fontSize: "80px",
    fontWeight: "1500",
    backgroundColor: "blue",
    border: "2px solid black",
    height: "900px",
    width: "100%",
    textAlign: "center",
    padding: "20px 30px",
    borderRadius: "20px",
  },"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora exercitationem, nihil praesentium doloremque, quaerat voluptates nam rem similique esse qui quam iure dicta aliquam est saepe laborum dolorum, maiores asperiores?")

ReactDom.render(header1, document.getElementById("root"));
ReactDom.render(header2, document.getElementById("root"));
ReactDom.render(ul, document.getElementById("root"));
ReactDom.render(card, document.getElementById("root"));
