function RunProgram() {
  const url = "frontendsample:\\";
  const exec = document.createElement("a");
  exec.setAttribute("href", url);
  exec.click();
}

function App() {
  const LolButton = () => {
    RunProgram();
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ marginBottom: "1rem" }}>Button Click</h3>
        <button
          onClick={LolButton}
          style={{
            padding: "1.6rem",
            borderRadius: "1rem",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          Click
        </button>
      </div>
    </>
  );
}

export default App;
