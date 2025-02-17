import FocusableInput from "./Ref";
import Colors, { colorData } from "./Rendering-lists/Lists";
import TodoList from "./Rendering-lists/Lists-and-state";
import Welcome from "./Styling-components/Welcome";
import Counter from "./Styling-components/Counter";

import "./index.css";
import Loginin from "./Styling-components/Login";
import Container from "./Component-compositionchildren/Container";

function App() {
  return (
    <Container title="Welcome to the Container">
      <Welcome />
      <Counter />
      <Loginin />
      <FocusableInput />
      <Colors colors={colorData} />
      <TodoList />
    </Container>
  );
}

export default App;
