import React from "react";
import ReactDom from "react-dom";
import Button from "./components/button";
import "./styles/index.scss";

function rootConfig(target: typeof App) {
  target.role = "root";
}

@rootConfig
class App extends React.Component {
  static role: string;
  state = {
    number: 0,
  };
  handlerClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <>
        <div>组件库</div>
        <Button btnType="default">Button</Button>
        <Button btnType="danger">Button</Button>
        <Button btnType="primary">Button</Button>
        <Button
          btnType="link"
          href="https://github.com/chttyCode/KnPoint/blob/master/content/eslint-typescript.md"
        >
          Button
        </Button>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
