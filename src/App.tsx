import Routes from "./routes";
import { AuthProvider } from "./context/AuthContext";

// routing

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      {/* <Snackbar /> */}
    </>
  );
}

export default App;
