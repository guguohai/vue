import Vue from 'vue';
import App from './App.vue';
import { Button, Layout, Menu, Icon, Form, Input, Checkbox, Pagination, Table,Dropdown,Avatar,Row,Col } from 'ant-design-vue';
import axios from 'axios';
import '@/mock'
import { post, get } from './http'
import router from './router';
import store from './store';
const Header = Layout.Header;
const Sider = Layout.Sider;
const Footer = Layout.Footer;
const FormItem = Form.Item;

Vue.config.productionTip = false;
// Vue.component(Button.name, Button);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Header);
Vue.use(Sider);
Vue.use(Footer);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(Row);
Vue.use(Col);


Vue.prototype.$axios = axios
Vue.prototype.$get=get;
Vue.prototype.$post=post;
//Vue.prototype.$router=router;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
