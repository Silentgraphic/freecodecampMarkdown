import './App.css';
import Editor from "./components/editor";
import Preview from './components/preview';

function App() {

  return (
    <div id="app">
      <h1>Markdown Preview</h1>
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
