import { useState, useEffect } from "react";
import "./App.css";
import { supabase } from "./utils/supabase";

function App() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password: pw,
      });

      console.log(user, session, error);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(email, pw);

  useEffect(() => {
    const session = supabase.auth.session();
    const user = supabase.auth.user();
    console.log(session, user);
  });

  return (
    <div className="App">
      <form onSubmit={handleSignUp}>
        <input
          placeholder="email@email.com"
          type="email"
          required
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          placeholder="********"
          type="password"
          required
          onChange={({ target }) => setPw(target.value)}
        />
        <button type="submit" onClick={handleSignUp}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default App;
