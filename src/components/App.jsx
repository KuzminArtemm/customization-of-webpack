import { useState } from 'react';
import logo from '../img/logo-on-white-bg.png';
const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <main className="main">
        <div>
          <img
            className="img"
            src={logo}
            style={{ width: 1000, height: 500 }}
            alt="pic"
          />
        </div>
      </main>
      <div className="counter">{counter}</div>
      <button onClick={() => setCounter((prev) => (prev += 1))}>+</button>
      <button onClick={() => setCounter((prev) => (prev -= 1))}>-</button>
    </div>
  );
};

export default App;
