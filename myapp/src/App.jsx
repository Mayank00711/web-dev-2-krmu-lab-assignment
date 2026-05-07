import { useTheme } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Global Dark/Light Mode</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
