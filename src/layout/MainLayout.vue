<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100%;">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">
        <img
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          height="30"
        >
        <h1>科技评价系统</h1>
      </div>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline" id="menuBar">
        <a-menu-item key="1">
          <a-icon type="pie-chart"/>
          <router-link to="/about">About</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop"/>
          <router-link to="/table">列表</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="user"/>
            <span>User</span>
          </span>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="team"/>
            <span>Team</span>
          </span>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file"/>
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" id="layoutHeader">
        <a-row>
          <a-col :span="5">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="()=> collapsed = !collapsed"
            />
          </a-col>
          <a-col :span="13"></a-col>
          <a-col :span="6">
            <ul id="headerMenu">
              <li>
                <router-link to="/home">
                  <a-icon type="home" style="font-size:16px;"/>
                </router-link>
              </li>
              <li>
                <a href="#">
                  <a-icon type="setting"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <a-badge count="5" :offset="[5,-3]">
                    <a-icon type="mail"/>
                  </a-badge>
                </a>
              </li>
              <li>
                <a-dropdown
                  style="vertical-align: initial;height:64px;padding:0 15px;display:block;"
                >
                  <span style="cursor: pointer">
                    <a-avatar
                      class="avatar"
                      size="small"
                      shape="circle"
                      src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                    />
                    <span>&nbsp;&nbsp;{{currUser.name}}</span>
                  </span>
                  <a-menu style="width: 150px" slot="overlay">
                    <a-menu-item>
                      <a-icon type="user"/>
                      <span>个人中心</span>
                    </a-menu-item>
                    <a-menu-item>
                      <a-icon type="setting"/>
                      <span>设置</span>
                    </a-menu-item>
                    <a-menu-divider/>
                    <a-menu-item>
                      <router-link to="/login">
                        <a-icon type="poweroff"/>
                        <span>退出登录</span>
                      </router-link>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </li>
            </ul>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      currUser: { name: "test" },
      collapsed: false
    };
  },
  watch: {
    $route(to, from) {
      const alinks = document
        .getElementById("headerMenu")
        .getElementsByTagName("li");
      for (let k = 0; k < alinks.length; k++) {
        const a = alinks[k].getElementsByTagName("a");
        if (a && a[0]) {
          const aa = a[0].baseURI;
          console.log(aa);
          // if (href === this.$route.path) {
        }
      }
    }
  }
};
</script>
<style>
html,
body {
  height: 100%;
}

#headerMenu {
  margin: 0;
  padding: 0 20px 0 0;
  float: right;
}
#headerMenu li {
  list-style: none;
  float: left;
}
#headerMenu li a {
  width: 100%;
  display: inline-block;
  height: 64px;
  padding: 0 15px;
}
#headerMenu li a:link {
  color: #333333;
  text-decoration: none;
  background: none;
}
#headerMenu li a:visited {
  color: #333333;
  text-decoration: none;
  background: none;
}
#headerMenu li a:hover {
  color: #1890ff;
  text-decoration: none;
  background-color: #f5f6f7;
}
#headerMenu li a:active {
  color: #333333;
  text-decoration: none;
  background: none;
}

#menuBar li a:link {
  color: #ffffff;
  text-decoration: none;
  background: none;
}
#menuBar li a:visited {
  color: #ffffff;
  text-decoration: none;
  background: none;
}
#menuBar li a:hover {
  color: #ffffff;
  text-decoration: none;
}
#menuBar li a:active {
  color: #ffffff;
  text-decoration: none;
  background: none;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 64px;
  line-height: 64px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
}

#components-layout-demo-custom-trigger .logo img {
  vertical-align: middle;
  display: inline-block;
  height: 32px;
}
#components-layout-demo-custom-trigger .logo h1 {
  display: inline-block;
  margin: 0 0 0 12px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
}
.ant-menu-item a {
  width: 100%;
  display: inline-block;
}
.router-link-active {
  color: #ffffff;
}
</style>
