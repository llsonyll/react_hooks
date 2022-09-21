// import { UseStateCounter, CounterWithCustomHook } from "./01-useState";
// import { SimpleForm } from "./02-useEffect";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/focusScreen";
// import { Padre } from "./07-useMemo/padre";
import { TodoApp } from "./08-useReducer/todoApp.jsx";

import "./reactHook.css";

const ReactHooks = () => {
  return (
    <div className="reactHook">
      {/* <UseStateCounter />
      <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <MultipleCustomHook /> */}
      {/* <FocusScreen /> */}
      {/* <Padre /> */}
      <TodoApp />
    </div>
  );
};

export default ReactHooks;
