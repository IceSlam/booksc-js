<template>
  <nav class="is-navbar container-fluid">
    <div class="is-navbar__brand">
      <nuxt-link exact to="/" class="is-navbar__brand__link">
        <img class="is-navbar__brand__link-img" src="@/assets/img/logotype-min.webp" alt="Book-Service">
        <h1 class="is-navbar__brand__link-title">
        <span class="title">
          Book-Service
        </span>
          <span class="sub">
          CliBase/0.1a CP
        </span>
        </h1>
      </nuxt-link>
    </div>
    <div class="is-navbar__profile">
      <p class="is-navbar__profile__name">
        {{ this.$auth.user.name }}
      </p>
      <div
        :style="'background: url(/api' + this.$auth.user.avatar.url + ');'"
        class="is-navbar__profile__avatar"
      />
      <button
        @click.prevent="logout"
        class="is-navbar__profile__exit"
      >
        <fai icon="door-open" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminSystemNavbar',
  data () {
    return {}
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$toast.global.logged_out()
    }
  }
}
</script>

<style lang="scss">
.layout {
  &.admin {
    .is-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: $bsColor;
      padding: .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__brand {
        display: flex;
        align-items: center;
        justify-content: center;
        &__link {
          display: flex;
          text-decoration: none;
          &-img {
            max-width: 48px;
            width: 100%;
            height: auto;
            margin-right: .5rem;
          }
          &-title {
            font-family: 'Rubik', 'Open Sans', sans-serif;
            font-size: 1.5rem;
            text-transform: uppercase;
            margin: 0;
            color: #fff;
            text-decoration: none;
            .title {
              font-family: 'Rubik', 'Open Sans', sans-serif;
              display: block;
            }
            .sub {
              font-size: .75rem;
              font-weight: 500;
              font-family: 'Open Sans', sans-serif;
              text-align: right;
              width: 100%;
              display: block;
            }
          }
        }
      }
      &__profile {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &__avatar {
          width: 48px;
          height: 49px;
          display: block;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background-color: #333;
          margin-left: .5rem;
          background-position: center !important;
          background-repeat: no-repeat !important;
          -webkit-background-size: cover !important;
          background-size: cover !important;
        }
        &__name {
          font-family: 'Open Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: #fff;
        }
        &__exit {
          margin-left: .5rem;
          font-size: 1.25rem;
          border: none;
          background-color: transparent;
          cursor: pointer;
          color: #fff;
          transition: all .3s;
          &:hover {
            color: rgba(255,255,255,.5);
            transition: all .3s;
          }
        }
      }
    }
  }
}
</style>
