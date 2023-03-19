import { useEffect } from "react";
import "./App.css";
const tg = Window.Telegram.App;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      work
      <button onClick={onClose}>ЗАКРЫТЬ</button>
    </div>
  );
}

export default App;
