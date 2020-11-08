import React , { useEffect, useState  } from 'react';


const App = (props) => {
  //useStateに初期値を登録する
  const [state, setState] = useState(props)
  const { name, price } = state

  //クラス型のコンポーネントのライフサイクルメソッドであるの「componentDidMount」or「componentDidUpdate」に似た動きをする
  useEffect(() => {
    console.log('useEffectが呼ばれる。(レンダリング後）')
  })

  //useEffectは何個でも書くことが可能
  // 第二引数に[]を渡すと最初のレンダリング後に1度しか呼ばれない
  useEffect(() => {
    console.log('useEffect02')
  }, [])

  //第二引の配列にstateの名前を書くことでそのstateの値が変更した時のみレンダリング後に呼ばれる
  useEffect(() => {
    console.log('name only')
  }, [name])

  const changeName = (e) => {
    // setState(e.target.value)
    setState({...state, name: e.target.value})
  }

  return (
    <>
      <p>現在の{name}の値段は{price}です。</p>
      <button onClick={() => { setState({...state, price: price + 1} )}}> +1 </button>
      <button onClick={() => { setState({...state, price: price - 1 } )}}> -1 </button>
      {/* <button onClick={() => { setPrice(props.price) }}> Reset </button> */}
      <button onClick={() => setState(props) }> Reset </button>
      <div>
        <input type="text" value={name} onChange={changeName} placeholder='入力してください' />
      </div>
    </>
  );
}

//外部から初期値を受け取る場合
App.defaultProps = {
  name: '〇〇',
  price: 100
}


// const App = (props) => {
//   const [count, setCount] = useState(props.count)
//   const [open, setOpen] = useState('text')


//   const toggle = (e) => {
//     e.target.value === 'text' ? setOpen('変更') : setOpen('text')
//   }

//   return (
//     <div>
//       <button onClick={toggle} value={open}>
//         { open }
//       </button>
//         {/* <div className={this.state.open ? 'isOpen' : 'isClose'}> */}
//         <div>
//           <p>現在の数字は {count} です</p>
//           {/*ボタンをクリックした時に、this.setState()を呼ぶことでcountステートを更新 */}
//           <button
//             onClick={() => setCount(  count + 1 )}
//           >
//             + 1
//           </button>
//           <button
//             onClick={() => setCount( count - 1 )}
//           >
//             - 1
//           </button>
//           <button onClick={() => setCount(  0 )}>0</button>
//           <button onClick={() => setCount( props.count )}>
//             最初の数値に戻す
//           </button>
//         </div>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: Math.floor(Math.random() * 10) + 1,
// }
export default App;
