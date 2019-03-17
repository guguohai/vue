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
      <a-menu
        theme="dark"
        :defaultSelectedKeys="menuSelectedKeys"
        :defaultOpenKeys="menuOpenKeys"
        mode="inline"
        id="menuBar"
      >
        <template v-for="item in menus">
          <a-menu-item :key="item.id" v-if="!item.children">
            <a-icon :type="item.icon"/>
            <span><router-link :to="item.url">{{item.name}}</router-link></span>
          </a-menu-item>
          <a-sub-menu :key="item.id" v-else>
            <span slot="title">
              <a-icon :type="item.icon"/>
              <span>{{item.name}}</span>
            </span>
            <a-menu-item :key="s.id" v-for="s in item.children">
              <router-link :to="s.url">{{s.name}}</router-link>
            </a-menu-item>
          </a-sub-menu>
        </template>
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
                    <a-icon type="bell"/>
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
                    <span>&nbsp;&nbsp;{{currUser.userName}}</span>
                  </span>
                  <a-menu style="width: 150px" slot="overlay">
                    <a-menu-item>
                      <router-link to="/account">
                        <a-icon type="user"/>
                        <span>个人中心</span>
                      </router-link>
                    </a-menu-item>
                    <a-menu-item>
                      <router-link to="/settings">
                        <a-icon type="setting"/>
                        <span>设置</span>
                      </router-link>
                    </a-menu-item>
                    <a-menu-divider/>
                    <a-menu-item>
                      <a href="javascript:void(0)" v-on:click="logoff">
                        <a-icon type="poweroff"/>
                        <span>退出登录</span>
                      </a>
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
      currUser: {},
      collapsed: false,
      menuSelectedKeys: [],
      menuOpenKeys: [],
      menus: [
        {
          id: "1",
          name: "About",
          icon: "desktop",
          url: "/about",
          children: null
        },
        {
          id: "2",
          name: "分类成果",
          icon: "appstore",
          url: "/table",
          children: [
            {
              id: "2_1",
              name: "科研项目课题",
              icon: "",
              url: "/table"
            }
          ]
        },
        {
          id: "3",
          name: "成果评价",
          icon: "gift",
          url: "",
          children: [
            {
              id: "3_1",
              name: "科技成果申报",
              icon: "",
              url: "/eval1"
            },
            {
              id: "3_2",
              name: "外部奖项申报",
              icon: "",
              url: "/eval2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    logoff() {
      localStorage.removeItem("user");
      this.$router.push({
        path: "/login"
        // querry:{redirect:router.currentRoute}//从哪个页面跳转
      });
    }
  },
  created() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      this.currUser = JSON.parse(userStr);
    } else {
      this.$router.push({
        path: "/login"
        // querry:{redirect:router.currentRoute}//从哪个页面跳转
      });
    }

    this.menuSelectedKeys = [];
    this.menus.forEach(m => {
      if (m.children) {
        m.children.forEach(c => {
          if (this.$route.path === c.url) {
            this.menuSelectedKeys.push(c.id);
            if (this.menuOpenKeys.indexOf(m.id) === -1) {
              this.menuOpenKeys.push(m.id);
            }
          }
        });
      } else {
        if (this.$route.path === m.url) {
          this.menuSelectedKeys.push(m.id);
        }
      }
    });
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
