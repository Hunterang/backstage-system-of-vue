<template>
    <div class="fullpage">
        <div class="self-mian" >
          <dl class="self-msg">
            <div  @mouseover="isActive=true" :class="{'tab-self-on':isActive}" @mouseout="isActive=false" >
                <dt>我的个人信息</dt>
                <dd >
                  <div>
                    <span>生&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 日:</span><input type="text" :readonly="read" class="self-main-sp" v-model="birth" />
                  </div>
                  <div>
                    <span>联系电话:</span><input type="text" class="self-main-sp" :readonly="read" v-model="tele" />
                  </div>
                  <div>
                    <span>电子邮箱:</span><input type="text" class="self-main-sp" :readonly="read" v-model="info.e_mail" />
                  </div>
                  <div>
                    <span>业余爱好:</span><input type="text" class="self-main-sp" :readonly="read" v-model="love" />
                  </div>
                  <div :class='[isActive?"show-self":"showoff-self"]'>
                    <button @click='read=false'>修改</button><button  @click='changedata()'>保存</button>
                  </div>
                  <div style='clear:both'>

                  </div>
                </dd>

            </div>
          </dl>
        </div>
        <div class="self-mian" >
          <dl class="self-todo">
            <dt>todo list</dt>
            <dd>
              <div>
                <input type="text" class="todo-input" v-model="todo" @keyup.13="todolist()"/><button @click="todolist()">添加</button>
              </div>
              <div>

                  <div v-for="item in todolists" v-bind:key="item" class="todo-li">
                    <span><input type="radio"  @click="checked=!checked"/></span><li style="list-style:none;float:left;">{{item}}</li>
                  </div>

              </div>
            </dd>
          </dl>
        </div>
        <div class="self-mian" >
          <dl class="self-">
            <dt>todo list</dt>
            <dd>
              <div>
                <input type="text" />
              </div>
            </dd>
          </dl>
        </div>
        <div class="self-mian" >
          <dl class="self-">
            <dt>todo list</dt>
            <dd>
              <div>
                <input type="text" />
              </div>
            </dd>
          </dl>
        </div>
    </div>
</template>

<script>
  export default {
    name:'self',
    data(){
      return {
          isfinished:false,
          todo:"",
          read:true,
          isActive:false,
          msg:"",
          birth:"1991",
          tele:"187****7041",
          email:"9230@qq.com",
          todolists:[],
          love:"象棋"
        }
      },
    props:['info'],
    computed:{

    },
    created(){
      this.getdata();
    },
    methods:{
      todolist:function(){
        var vm=this;
        var todo=document.querySelector('.todo-input');
        console.log(todo)
        if(todo.value==""){
          return
        }
        vm.todolists.push(todo.value);
        vm.todo="";
      },
      getdata(){
      console.log(this.$route.params.id)
        this.$http.get('some/text',{params:{uerinfo:this.$route.params.id}}).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err.message);
        })
      },
      changedata(){
        this.read=true;
      var data={emil:this.email,phone:this.tele,hobby:this.love,birthday:this.birth,loginID:this.$route.params.id}
      this.$http.post('user/setInfor',data).then(function(res){
            console.log(res)
        }).catch(function(err){
            console.log(err.message);
        })
      }
    }
  }
</script>
<style scoped>
.self-mian{
    background:#fff;
    width:47%;
    height:289px;
    margin-left:2%;
    margin-top:17px;
    float:left;
  }
  .self-mian dt{
  margin-top:2%;
    text-align:center;
    font-size:1.2em;
  }
  .self-mian dd{
  padding-left:5%;
  margin-top:5%;
  }
  .self-toggle div{
  border:1px solid #fff;
  }
  .self-main-sp{
    border:none;
    padding:5px 0 5px 10%;
    width:70%;
    margin-top:2%;
    border-bottom:1px solid #F0E68C;
    text-align:center;
    outline:none;
  }
  .tab-self-on{
    border:1px dotted #F0E68C;
    width: 90%;
    margin:5%;
  }
  .show-self{
    display: inline-block;
    float:right;
  }
  .showoff-self{
    display: none;
  }
  .show-self button{
    margin: 10px 20px 10px 0;
    cursor:pointer;
    height: 30px;
    width: 50px;
    padding:5px;
    border:none;
    border-radius: 4px;
  }
</style>
