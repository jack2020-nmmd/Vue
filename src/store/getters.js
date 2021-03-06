export default{
    totalCount(state){
      console.log('total',state.chooseFood);
      return state.chooseFood.reduce((pre, next)=>{
        console.log(next.count, 'total');
        return pre = pre + next.count * next.price
      },0)
      },
    goodsCount(state){
      return state.chooseFood.reduce((pre,next)=>{
              console.log(next.count, 'goodscount');
              return pre = pre + next.count
          },0)
    },
}