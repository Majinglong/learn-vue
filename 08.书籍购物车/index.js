const  app = new Vue({
  el:"#app",
  data:{
    books:[
      {
        id:1,
        name:'Python',
        data:'2018-1-1',
        money:56.1,
        num:1
      },
      {
        id:2,
        name:'java',
        data:'2018-10-1',
        money:54.1,
        num:1
      },
      {
        id:3,
        name:'go',
        data:'2019-1-1',
        money:96,
        num:1
      }, {
        id:4,
        name:'C++',
        data:'2013-1-1',
        money:36.1,
        num:1
      }
    ]
  },
  filters:{
    showMoney(price){
      return "￥"+price.toFixed(2);
    }
  },
  methods:{
    increament(index){
      this.books[index].num++;
    },
    decreament(index){
      this.books[index].num--;
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    allPrice(){
      let res = 0;
      /*for(let  i=0;i<this.books.length;i++){
        res+=this.books[i].money*this.books[i].num;
      }*/
      /*for(let i in this.books){
        res+= this.books[i].money*this.books[i].num;
      }*/
     /* for(let item of this.books){
        res += item.num*item.money
      }
      return res;*/
      return this.books.reduce(function (preValue,book) {
        return preValue + book.money*book.num;
      },0);
    }
  }
})