import React , { useState  } from 'react';


const App = (props) => {
  //useStateに初期値を登録する
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = (e) => {
    setPrice(props.price)
    setName(props.name)
  }
  const changeName = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <p>現在の{name}の値段は{price}です。</p>
      <button onClick={() => { setPrice(price + 1 )}}> +1 </button>
      <button onClick={() => { setPrice(price - 1 )}}> -1 </button>
      {/* <button onClick={() => { setPrice(props.price) }}> Reset </button> */}
      <button onClick={ reset }> Reset </button>
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
