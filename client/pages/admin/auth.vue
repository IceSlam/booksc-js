<template>
  <section class="is-auth row">
    <div class="col-lg-6 is-auth__logo">
      <img src="@/assets/img/logotype-min.webp" alt="Book-Service">
    </div>
    <div class="col-lg-6 is-auth__wrapper">
      <form @submit.prevent="login" class="is-auth__wrapper__form">
        <h1 class="is-auth__wrapper__form-title">
          Book-Service
        </h1>
        <h2 class="is-auth__wrapper__form-subtitle">
          Сеть сервисных центров
        </h2>
        <div class="is-auth__wrapper__form__form">
          <h3 class="is-auth__wrapper__form__form-title">
            Авторизация
          </h3>
          <div class="form-group">
            <label for="auth-email">
              E-mail
            </label>
            <input id="auth-email" type="email" v-model="userData.email" placeholder="admin@mail.ru">
          </div>
          <div class="form-group">
            <label for="auth-password">
              E-mail
            </label>
            <input id="auth-password" type="password" v-model="userData.password" placeholder="******">
          </div>
          <button type="submit">
            Войти
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminAuth',
  layout: 'auth',
  middleware: 'notAuth',
  data () {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            identifier: this.userData.email,
            password: this.userData.password
          }
        })
        this.$toast.global.logged_in()
      } catch (err) {
        if (err.response.data.message === 'Email or password is wrong' || err.response.data.statusCode === 422) {
          console.log('Неверный email или пароль. Пожалуйста, повторите попытку')
          this.$toast.global.logged_in_error()
        } else if (err.response.status === 404) {
          this.$toast.global.route_404()
          console.log('Обработчик запроса не найден')
        } else if (err.response === undefined) {
          this.$toast.global.route_500()
          console.log('Сервис недоступен')
        } else if (err.response.status === 503) {
          this.$toast.global.route_503()
        }
      }
    }
  }
}
</script>

<style lang="scss">
.is-auth {
  height: 100vh;
  background-color: $bsColor;
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__wrapper {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    &__form {
      display: block;
      width: 100%;
      max-width: 75%;
      margin: 0 auto;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      &-title {
        font-family: 'Rubik', 'Open Sans', sans-serif;
        font-size: 3rem;
        text-transform: uppercase;
        color: $bsColor;
        margin: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      &-subtitle {
        margin: 0;
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
        color: #666;
        font-size: 1.5rem;
        font-weight: 400;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      &__form {
        margin-top: 5rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        &-title {
          font-family: 'Rubik', 'Open Sans', sans-serif;
          font-size: 1.25rem;
          margin-bottom: 2rem;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .form-group {
          display: block;
          padding-bottom: 2rem;
          label,
          input {
            display: block;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          label {
            font-family: 'Open Sans', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: .5rem;
          }
          input {
            border: 2px solid $bsColor;
            padding: 1rem;
            outline: none;
            font-weight: 600;
            font-size: 1.125rem;
            font-family: 'Open Sans', sans-serif;
          }
        }
        button {
          display: block;
          width: 100%;
          border: 2px solid $bsColor;
          background-color: $bsColor;
          color: #fff;
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          padding: 1rem;
          cursor: pointer;
          transition: all .3s;
          &:hover {
            background-color: #fff;
            color: $bsColor;
            transition: all .3s;
          }
        }
      }
    }
  }
}
</style>
