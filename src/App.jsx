import "./App.css";

function App() {
  let nums = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {nums.forEach((num) => {
        return <div>{num} </div>;
      })}
    </div>
  );
}

export default App;
