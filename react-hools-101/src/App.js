import React , { useState  } from 'react';


const App = () => {
  const [count, setCount] = useState(10)

  const inc = () => {
    return setCount(count + 1)
  }
  //一行の場合はreturn不要で書くことができる
  const dec = () => setCount(count - 1)

  //setCountの引数には関数を書くことができる
  //またその関数の引数には現在の状態を持つことができる(previousCount には countが入っていることになる
  const inc02 = () => setCount(previousCount => previousCount + 2)
  const dec02 = () => setCount(previousCount => previousCount - 2)

  const reset = () => setCount(10)

  const double = () => setCount(previousCount => previousCount * 2)
  // const double = () => setCount(count * 2)

  /**
   * 3の倍数の時のみ割算をする。それ以外はそのままの数字表示
   */
  const divide3 = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })


  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <div>
        <button onClick={inc02}>+2</button>
        <button onClick={dec02}>-2</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={divide3}>3の倍数の時だけ割る</button>
      </div>
    </>
  );
}

export default App;
