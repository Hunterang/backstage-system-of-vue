<template>
    <div class="fullpage">
        <div class="self-mian" >
          <dl class="self-msg">
            <div class='self-toggle'>
                <dt>我的个人信息</dt>
                <dd>
                  <div>
                    <span>生&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  日:</span><input type="text" :readonly="read" class="self-main-sp" v-model="birth" />
                  </div>
                  <div>
                    <span>联系电话:</span><input type="text" class="self-main-sp" :readonly="read" v-model="tele" />
                  </div>
                  <div>
                    <span>电子邮箱:</span><input type="text" class="self-main-sp" :readonly="read" v-model="email" />
                  </div>
                  <div>
                    <span>业余爱好:</span><input type="text" class="self-main-sp" :readonly="read" v-model="love" />
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
          msg:"",
          birth:"",
          tele:"",
          email:"",
          todolists:[],
          love:""
        }
      },
    computed:{
      tds:function(){

      }
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
        this.$http.get('some/text',{params:{uerinfo:this.$route.id}}).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err.message);
        })
      }
    }
  }
</script>
