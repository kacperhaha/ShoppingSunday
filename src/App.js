
function App() {
  const day = `${new Date().getDate()}`;
  return (
    <div className="App">
        <div className="flex justify-center content-center flex-col items-center">
          <p className="">Dzisiaj jest:</p>
          {/* <p>{day}</p> */}
        </div> 
    </div>
  );
}

export default App;
