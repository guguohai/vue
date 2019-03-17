<template>
  <div id="login">
    <h1>评价系统登录</h1>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
        >Remember me</a-checkbox>
        <a class="login-form-forgot" href>Forgot password</a>
        <a-button
          type="primary"
          html-type="submit"
          :loading="logging"
          class="login-form-button"
        >Log in</a-button>Or
        <a href="#">register now!</a>
        <span style="padding-left:20px;text-align:right;color:#ff0000">{{error}}</span>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import router from "../router";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data() {
    return {
      error: "",
      logging: false
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.logging = true;
          this.$post("/login", {
            userName: values.userName,
            password: values.password,
            remember: values.remember
          }).then(res => {
            this.logging = false;
            if (res.status == 200) {
              // const user = res.data.user;
              const user = JSON.stringify(res.data);
              localStorage.setItem("user", user);
              router.push("/home");
              // this.$store.commit("account/setuser", user);
              // this.$message.success(result.message, 3);
            } else {
              this.error = res.message;
            }
          });
        }
      });
    }
  }
};
</script>
<style>
#login {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin: -150px 0 0 -250px;
}
#login h1 {
  font-size: 24px;
  text-align: center;
}

#login .login-form-forgot {
  float: right;
}
#login .login-form-button {
  width: 100%;
}
</style>