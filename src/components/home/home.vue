<template>
  <div class="hellos">
    <sidebar></sidebar>
    <div class="contents">
        <div class="isNav">
            <div v-for="(item,index) in isNav" :key="index"><i class="el-icon-arrow-right"></i>{{item.nav}}</div>
        </div>
    </div>
  </div>
</template>

<script>
// import sidebar from '../'

import sidebar from "../sidebar/sidebar";
export default {
  name: "HelloWorld",
  components: { sidebar },
  data() {
    return {
        isNav:[{nav:"后台管理"},]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hellos {
  padding: 20px;
  background: #eff8fb;
  display: flex;
}
.contents{
    margin-left: 20px;
}
.isNav{
    display: flex;
}
.isNav>div:first-child i {
    display: none;
}
</style>
