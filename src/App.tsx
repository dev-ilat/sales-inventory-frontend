import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section id="login-container">
        <h2>Login Here!</h2>
        <form id="login-form" action="/login">
          <div>
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default App;
