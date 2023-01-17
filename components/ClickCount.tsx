import { useCallback, useState } from 'react';
import Button from './Button';

export default function ClickCount() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((v) => v + 1);
  }, [setCount]);

  return <Button onClick={increment}>Clicks: {count}</Button>;
}

// export function RealTime() {
//   const [count, setCount] = useState(0);
//   const increment = useCallback(() => {
//     setCount((v) => v + 1);
//   }, [setCount]);

//   return <Button onClick={increment}>Clicks: {count}</Button>;
// }

// const increment = useCallback(
//   () => {
//     setCount()

//     // let time = DateTime();
//     // setCount((v) => {
//     //   console.log(v);
//     //   return v + 1;

//     //   // return DateTime(dt).toString();
//     // });
//   },
//   [setCount]
// );

let Time = () => {
  let d = new Date(),
    time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

  return { d, time };
};

function updateTime() {
  // const [time, setTime] = useState(0);
  let timer = Time();
  
  

  setTimeout(timer.time, 1000);
}
