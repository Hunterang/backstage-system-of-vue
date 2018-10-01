<template>
  <div class="hello">
    <form>
    <div class="login" v-show="ishow">
        <h2>{{ login}}</h2>
        <input type="text" :placeholder="name" @focus="enter(name)" @blur='leave()' v-model='ename'/><br />
        <input type="passWord" :placeholder="mima" @focus="enter(mima)" @blur='leave()' v-model='epassword'/><br />
        <button @click='Login'>{{login}}</button><br />
        <span @click='showregister'>{{condition}}</span>
    </div>
    <div class="login" v-show="regshow">
        <h2>{{ register}}</h2>
        <input type="text" :placeholder="name" @focus="enter(name)"  v-model='newname'/><br />
        <input type="passWord" :placeholder="mima" @focus="enter(mima)"  v-model='newpassword'/><br />
        <button>{{register}}</button><br />
        <span @click='showlogin'>{{newcondition}}</span>
    </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      ishow:true,
      regshow:false,
      register:'注册',
      msg: '欢迎进入登录系统',
      name:'请输入您的帐号',
      mima:'请输入您的密码',
      login:'登录',
      condition:'还没注册？请先注册',
      newcondition:'注册成功，请登录',
      ename:'',
      epassword:'',
      newname:'',
      newpassword:''
    }
  },
  methods:{
      enter:function(str){
          if(str==this.name)this.name="";
          if(str==this.mima)this.mima=""
      },
      leave:function(){
      if(this.name=="")this.name="请输入您的帐号";
      if(this.mima=="")this.mima="请输入您的密码"
      },
      Login(){
      if(this.ename==''||this.epassword==''){
          alert("请输入账号或密码")
        }
      //  const data={ename:this.ename,epassword:this.epassword}
      //  this.$http.post('http://192.168.1.1:3000/users',data).then(function(res){
      //  console.log(res);
      //  this.$router.push({name:'home',params:{id:this.ename}})
      //  })
      else if(this.ename&&this.epassword=='123'){
            this.$router.push({name:'home',params:{id:this.ename}})
            }

      },
      Register(){},
      showlogin(){
      this.ishow=true;
      this.regshow=false;
      },
      showregister(){
        this.ishow=false;
        this.regshow=true;
      }
  },
  watch:{
      msg:function(n,o){}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
h2{
  padding:20px;
  font-weight: normal;
}
input{
  padding-left:10px;
  width:390px;
  height:30px;
  font-size:20px;
  margin-top:20px;
  border-radius:6px;
  border:1px solid #eee;
}
button {
  width:60px;
  height:30px;
  font-size:20px;
  margin:10px;
  border-radius:6px;
  border:none;
  background:green;
}
span{
  cursor:pointer;
}
.login{
  text-align:center;
  width:500px;
  height:270px;
  background:rgba(0,0,0,0.5);
  margin:0 auto;
  margin-top:60px;
}
</style>
