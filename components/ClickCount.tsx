import { useCallback, useState } from 'react';
import Button from './Button';

export function ClickCount() {
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

export function Data() {
  const [data, setCData] = useState(0);
  const data4 = useCallback(() => {
    setCount((v) => v + 1);
  }, [data]);

  // let fd = new Date();
  // let date = fd.getHours() + ':' + fd.getMinutes() + ':' + fd.getMilliseconds();
  return 'data';

  return <Button onClick={increment}>Clicks: {count}</Button>;
}
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
