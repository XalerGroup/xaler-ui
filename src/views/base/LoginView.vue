<template>
  <div class="login-wrapper">
    <form name="login_form" class="login-form" @submit.prevent="login">
      <h3 class="login-header">Login</h3>
      <div class="input-field username">
        <label for="username-input">Email</label>
        <input class="validate" type="email" name="username" id="username-input" v-model="email">
        <span class="helper-text"></span>
      </div>
      <div class="input-field password">
        <label for="password-input">Password</label>
        <input type="password" name="password" id="password-input" v-model="password">
        <span class="helper-text" v-if="errors.length" data-error="Error"></span>
      </div>
      <div class="center">
        <button type="submit" class="btn waves-effect waves-light">
          <i class="material-icons">send</i>Login
        </button>
      </div>
      <p class="center">Have not account? <a href="">Registration here</a></p>
    </form>

  </div>
</template>

<script>

export default {
  name: 'LoginView',
  data() {
    return {
      errors: {},
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // eslint-disable-next-line no-unused-vars
      const loginData = {
        username: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', loginData);
      if (!this.$store.getters.isAuthenticatedUser) {
        this.errors = this.$store.getters.authUserErrors;
        // todo: обработать ошибки входа
      }
    },
    validation() {

    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.login-form {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25),
  0 -4px 10px rgba(0, 0, 0, 0.25);
  width: 650px;
  padding: 7.5em;
}

</style>
