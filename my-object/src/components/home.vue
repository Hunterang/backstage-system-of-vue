<template>

    <div>
        <header>
          <div class='header'>
            <p>欢迎{{this.$route.params.id}}来访</p>
            <div class='header-right'>
              <router-link to='/'>退出登录</router-link>
            </div>
          </div>
        </header>
        <nav>
          <div class='nav'>
            <div class='nav-head'>
                <div></div>
                <div><span>{{this.$route.params.id}}</span></div>
            </div>
            <div class='nav-content'><router-link to='/'>个人中心</router-link></div>
            <div class='nav-content'><router-link to='/'>文章管理</router-link></div>
            <div class='nav-content'><router-link to='/'>生活照片</router-link></div>
            <div class='nav-content'><router-link to='/'>周边趣事</router-link></div>
          </div>
        </nav>
    </div>

</template>

<script>
</script>

<style>
  .header{
    width:100%;
    height:8%;
    background:#1bc590;
    opacity:0.8;
    padding:8px 0;
    text-align:left;
  }
  a{
    font-size:10px;
    text-decoration:none;
  }
  .header-right{
    letter-spacing:2px;
    float:right;
    margin-right:20px;
  }
  p{
    color:blue;
    margin:0;
    display:inline-block;
    margin-left:10px;
  }
</style>
