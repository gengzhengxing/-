//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todolist:[
        {
          todo:"aaaa",
          complete:false
        },
        {
          todo:"bbbb",
          complete:false
        },
        {
          todo:"cccc",
          complete:false
        }
      ],
    newwork:"",
    aa:false,
    bb:true
  },
  addwork(event){
    if (event.detail.value){
      this.data.newwork=event.detail.value;
      this.data.todolist.push({
          todo:event.detail.value,
          complete:false
      });
      var stmp = this.data.todolist;
      this.setData({
        todolist: stmp,
        newwork: ""
      })
    }else{
      wx.showToast({
       title: '请勿重复输入',
       icon: 'none',
       duration: 2000//持续的时间
     })
    }
  },
  clickchange(e){
      let step = e.currentTarget.dataset.index;
      this.data.todolist[step].complete = !this.data.todolist[step].complete;
      let does = this.data.todolist;
      this.setData({
        todolist:does
      })
  }
})
