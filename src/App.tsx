import UseStateComp from "./UseStateComp";
import UseEffectComp from "./UseEffectComp";
import UseContextComp from "./UseContextComp";
import UseReducerComp from "./UseReducerComp";
import UseRefComp from './UseRefComp'
import CustomHookComp from "./CustomHookComp";
import MoreReactComp from "./MoreReactComp";
 

function App() {
  return (
    <div>
      <h1>More react</h1>
      <MoreReactComp />

      <h1>useState</h1>
      <UseStateComp />

      <h1>useEffect</h1>
      <UseEffectComp />

      <h1>useContext</h1>
      <UseContextComp />

      <h1>useReducer</h1>
      <UseReducerComp />

      <h1>useRef</h1>
      <UseRefComp />

      <h1>Custom Hook</h1>
      <CustomHookComp />
      
    </div>
  );
}

export default App;
