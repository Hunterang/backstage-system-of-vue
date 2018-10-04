<template>
<div id="app">
  <router-view @givedata="getdata" :info="userinfor" />
</div>
</template>
<script>
export default {
  data() {
    return {
      userinfor: {}
    }
  },
  methods: {
    getdata(data) {
      this.userinfor=data;
      console.log(this.userinfor);
    }
  }

}
</script>
