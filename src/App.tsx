
import './App.css';

import useCountDown from './custom-hook/useCountDown';
import useTheme from './custom-hook/useTheme'

function App() {
  const countDown = useCountDown(10, false);
  const { isDarkMode, colorScheme, toggle, onDarkModeChange } = useTheme(true);

  return (
    <div className="App" style={{ padding: 20, backgroundColor: colorScheme.background, height: "100vh" }}>
      <h1 style={{ color: colorScheme.onBackground }}>{countDown.value}</h1>
      <p style={{ color: colorScheme.onBackground }}>Countdown Running: {countDown.isRunning ? 'Yes' : 'No'}</p>
      <button onClick={() => { countDown.start() }} disabled={countDown.isRunning}>Start</button>
      <button onClick={() => { countDown.stop() }} disabled={!countDown.isRunning}>Stop</button>

      <h1 style={{ color: colorScheme.onBackground }}>change theme</h1>

      <button onClick={toggle} >Turn on {isDarkMode ? "light" : "dark"} mode</button>
    </div>
  );
}

export default App;
