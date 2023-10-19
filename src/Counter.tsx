import { ReactNode, createContext, useContext, useState } from "react";

interface IntialStateI {
  count: number;
  increaseCount: () => void;
  deCreaseCount: () => void;
}

const intialState: IntialStateI = {
  count: 0,
  increaseCount: () => {},
  deCreaseCount: () => {},
};
const CounterContext = createContext(intialState);

function Counter({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((count) => count + 1);
  const deCreaseCount = () => setCount((count) => count - 1);
  return (
    <CounterContext.Provider value={{ count, increaseCount, deCreaseCount }}>
      {children}
    </CounterContext.Provider>
  );
}

function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }: { children: string }) {
  return <span>{children}</span>;
}

function Increase({ Icon }: { Icon: string }) {
  const { increaseCount } = useContext(CounterContext);
  return <button onClick={increaseCount}>{Icon}</button>;
}

function Decrease({ Icon }: { Icon: string }) {
  const { deCreaseCount } = useContext(CounterContext);
  return <button onClick={deCreaseCount}>{Icon}</button>;
}

Counter.Count = Count;
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
