import React , { useState  } from 'react';


const App = (props) => {
  //useStateに初期値を登録する
  const [state, setState] = useState(props)
  const {name , price} = state
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)


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

export default App;
