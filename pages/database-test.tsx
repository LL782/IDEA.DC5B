import { read, write } from "../dbConnectionTest";

export default function Test() {
  return (
    <code
      style={{
        padding: "0.5rem",
        display: "block",
        backgroundImage: "linear-gradient(linear-gradient(90deg, #0f03, #fff0)",
        maxWidth: "640px",
      }}
    >
      <h1>Database test</h1>
      <p>This page is here to test my connection to Firestore</p>
      <p>Experiment underway</p>
      <p>...</p>
      <button onClick={read}>READ</button>
      <button onClick={write}>WRITE</button>
    </code>
  );
}
