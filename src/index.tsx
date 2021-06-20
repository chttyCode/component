import React from "react";
import ReactDom from "react-dom";
import Button from "./components/button";
import AutoComplete from "./components/AutoComplete";
import Input from "./components/Input";
import "./styles/index.scss";

function rootConfig(target: typeof App) {
  target.role = "root";
}
const testArray = [
  { value: "ab", number: 11 },
  { value: "abc", number: 1 },
  { value: "b", number: 4 },
  { value: "c", number: 15 },
];

@rootConfig
class App extends React.Component {
  static role: string;
  state = {
    number: 0,
  };
  handlerClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  fetchSuggestions = (query: string) => {
    return testArray.filter((item) => item.value.includes(query));
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
        <hr />
        <AutoComplete fetchSuggestions={this.fetchSuggestions} />
        <hr />
        <Input />
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
