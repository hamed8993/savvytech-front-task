import "./App.css";
import { ItemsList } from "./components/list/items-list";
import { ItemsProvider } from "./context/items-context";

function App() {
  return (
    <ItemsProvider>
      <div>
        <ItemsList />
      </div>
    </ItemsProvider>
  );
}

export default App;
