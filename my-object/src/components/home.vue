<template>

    <div>
        <header>
          <div class='header'>
            <p>欢迎{{this.$route.params.id}}上线</p>
            <div class='header-right'>
              <router-link to='/'>退出登录</router-link>
            </div>
          </div>
        </header>
        <nav>
          <div class='nav'>
            <div class='nav-head'>
                <div class="nav-head-left"></div>
                <div><span>{{this.$route.params.id}}</span></div>
            </div>
            <div class='nav-content'><router-link :to='{name:"self"}'>个人中心</router-link></div>
            <div class='nav-content'><router-link :to='{name:"article"}'>文章管理</router-link></div>
            <div class='nav-content'><router-link :to='{name:"photo"}'>生活照片</router-link></div>
            <div class='nav-content'><router-link :to='{name:"things"}'>周边趣事</router-link></div>
          </div>
        </nav>
        <section>
        <div class="section">
        <router-view :info='info'></router-view>
        </div>
        </section>
    </div>

</template>

<script>
export default {
  props:['info'],
}

</script>


<style scoped>
  .header{
    width:100%;
    background:#1bc590;
    opacity:0.8;
    padding:8px 0;
    text-align:left;
  }
  .nav{
    width:10%;
    height:90%;
    height:620px;
    float:left;
    background:rgba(48, 65, 86,1);
  }
  .nav-head-left{
    height:50px;
    width:50px;
    border-radius:25px;
    overflow:hidden;
    border:1px solid #eee;
    float:left;
    margin-top:10px;
    margin-left:10px;
  }
  .nav-head{
      width:100%;
      height:70px;
      background:rgb(31,45,61);
  }
  .nav-head span{
      color:#f1e1ff;
      display:inline-block;
      margin:20px 0 0 10px;
      font-family:STXinwei;
      font-size:0.8em;
  }
  .nav-content{
      width:100%;
      height:30px;
      border-bottom:1px solid #000;
      text-align:center;
      padding-top:10px;
  }
  .nav-content a:hover{
      opacity:0.8;
      color:#b768ad;
  }
  a{
    color:#f1e1ff;
    font-size:10px;
    text-decoration:none;
  }
  .header-right{
    letter-spacing:2px;
    float:right;
    margin-right:20px;
  }
  .section{
      float:left;
  }
  p{
    color:blue;
    margin:0;
    display:inline-block;
    margin-left:10px;
  }
  .section{
    width:90%;
    height:618px;
    background:rgb(238,240,243);
  }
</style>
