import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <div>
        <h1 className="text-yellow">Mega Blog</h1>
      </div>
    </>
  );
}

export default App;
