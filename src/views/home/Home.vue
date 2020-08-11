<template>
  <el-container class="home_container">
    <el-header>
      <img src="../assets/images/heima.png" alt />
      <span>电商管理系统</span>
      <el-button type="info" round @click="logout">信息按钮</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script >
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
}

.el-main {
  background-color: #eaedf1;
}
</style>
