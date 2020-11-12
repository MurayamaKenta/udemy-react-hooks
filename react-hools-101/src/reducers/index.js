// action = {
//   type: 'CREATE_EVENT',
//   title: '東京オリンピック',
//   body: '東京オリンピックお知らせ'
// }



const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = {
        title: action.title,
        body: action.body
      }
      const length = state.length
      const id = (length === 0) ? 1 : state[length - 1].id + 1
      return [...state, { id: id, ...event }]

    case 'DELETE_EVENT':
      //filter条件にマッチしたものだけ配列の中から抽出する
      //今回の場合はaction.idとマッチしないものだけ抽出している（結果的にマッチしたものを表示しないので削除したことになる）
      return state.filter(event => event.id !== action.id )
    case 'DELETE_ALL_EVENT':
      return []
    default:
      return state
  }

}

export default events
