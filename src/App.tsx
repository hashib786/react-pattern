import Counter from "./Counter";
import "./styles.css";

const { Count, Decrease, Increase, Label } = Counter;

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <div>
          <Label>Hello World</Label>
        </div>
        <Decrease Icon="➖" />s
        <Count />
        <Increase Icon="➕" />
      </Counter>
      <div>
        <Counter>
          <div>
            <Label>Hello World</Label>
          </div>
          <Decrease Icon="➖" />s
          <Count />
          <Increase Icon="➕" />
        </Counter>
      </div>
    </div>
  );
}
