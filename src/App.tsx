import Guest from "@/routes/Guest";
import User from "@/routes/User";

function App() {
  const isAuth = true;

  if (isAuth) {
    return <User />;
  }
  return <Guest />;
}

export default App;
