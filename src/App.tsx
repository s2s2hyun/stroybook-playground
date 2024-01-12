import Button from "@/components/Button/Button";

function App() {
  return (
    <>
      <div style={{ padding: "1rem 2rem" }}>
        <Button style={{ marginBottom: "16px" }} size="sm" color="primary">
          스몰 primary
        </Button>
        <Button style={{ marginBottom: "16px" }}>미듐 primary</Button>
        <Button color="secondary" size="lg">
          라지 secondary
        </Button>
      </div>
    </>
  );
}

export default App;
