
import './App.css';
import CountButton from './components/count-button';
import PreviousCounters from './components/previous-counters';

function App() {
  return (
    <body className="App">
        <h1>Over There Counter</h1>
        <main>
          <div id="allPreviousCounterBoxes">
           <PreviousCounters/>
          </div>
          <CountButton/>
        </main>
      </body>
  );
}

export default App;
