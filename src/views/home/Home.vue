<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <img src="./heima.png" alt />
        <span>电商管理系统</span>
      </div>
      <el-button type="info" round @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
        <!-- 菜单栏列表 -->
        <div class="toggle-button" @click="toggle">|||</div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409BFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="getActivePath('/'+subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- main区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script >
export default {
  name: "",
  data() {
    return {
      menuList: [],
      iconObj: {
        "125": "iconfont icon-user",
        "103": "iconfont icon-tijikongjian",
        "101": "iconfont icon-shangpin",
        "102": "iconfont icon-danju",
        "145": "iconfont icon-baobiao",
      },
      isCollapse: false,
      activePath: "",
    };
  },
  components: {},
  created() {
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menuList = res.data;
      // console.log(this.menuList);
    },
    toggle() {
      this.isCollapse = !this.isCollapse;
    },
    getActivePath(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
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
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 15px;
  }
}
.iconfont {
  margin-right: 10px;
}
.el-aside {
  background-color: #373d41;
  .el-menu {
    border-right: none;
  }
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #fff;
}
.el-main {
  background-color: #eaedf1;
}
</style>
