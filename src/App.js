
import './App.css';
import CountButton from './components/count-button';
import PreviousCounters from './components/previous-counters';

function App() {
  return (
    <body className="App">
        <main>
          <div id="allPreviousCounterBoxes">
            <h2>Previous Counters</h2>
            <PreviousCounters/>
          </div>
          <div id="buttonetc">
          <h1>Over There Counter</h1>
            <CountButton/>
          </div>
        </main>
      </body>
  );
}

export default App;
