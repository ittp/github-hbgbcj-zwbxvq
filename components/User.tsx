import { useCallback, useState } from 'react';
import Button from './Button';

function onSuccess(message: string) {
  console.log('success', message);
  let items = [{ key: 1 }, { key: 2 }];
  let dataItems = items.map((item, id) => {
    console.log(id, item);
    return item;
  });
}

export function User() {
  const [user, setUser] = useState(0);

  const loadUser = useCallback(() => {

    // await fetch("/api/user")

    return setUser((c) => c+1 )

  }, [user]);

  // let fd = new Date();
  // let date = fd.getHours() + ':' + fd.getMinutes() + ':' + fd.getMilliseconds();

  return <Button onClick={loadUser}>User profile</Button>