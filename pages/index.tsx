import { log } from 'console';
import { randomUUID } from 'crypto';
import { useCallback, useEffect, useState } from 'react';
import Button from '../components/Button';
import ClickCount from '../components/ClickCount';
import styles from '../styles/home.module.css';

function throwError() {
  console.log(
    // The function body() is not defined
    // @ts-ignore
    document.body()
  );
}


type VNumber = Number;
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Auto incrementing value. The counter won't reset after edits or if
          there are errors.
        </p>
        <p>
          Current value: 
        </p>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Component with state.</p>
        <ClickCount />
      </div>
      <hr className={styles.hr} />
      <div>
        <p>
          The button below will throw 2 errors. You'll see the error overlay to
          let you know about the errors but it won't break the page or reset
          your state.
        </p>
        <Button
          onClick={(e) => {
            setTimeout(() => document.parentNode, 0);
            throwError();
          }}
        >
          Throw an Error
        </Button>
      </div>
      <hr className={styles.hr} />
    </main>
  );
}
