<template>
  <li @click.prevent="viewItem()" class="row d-flex users_row">
    <span class="name col-lg-4">
      <div v-if="UsersWrapperListItem.avatar" class="avatar" :style="'background: url(/api/' + UsersWrapperListItem.avatar.url + ');'" />
      <div v-else class="avatar" style="background: url(https://erastech.com/wp-content/uploads/2015/08/placeholder_male1.jpg);" />
      {{ UsersWrapperListItem.name }}
    </span>
    <span
      v-if="UsersWrapperListItem.role"
      class="name col-lg-4"
    >
      {{ UsersWrapperListItem.role.name }}
    </span>
    <span class="name col-lg-4">
      Создан: {{ $moment(UsersWrapperListItem.createdAt).formatWithJDF("HH:mm dd.MM.yyyy") }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'AdminDashboardUsersWrapperItem',
  props: {
    UsersWrapperListItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    viewItem (id) {
      this.$emit('viewItem', this.UsersWrapperListItem.id)
    }
  }
}
</script>

<style lang="scss">
.is-admin {
  &__half-card {
    &__content {
      &-title {
        font-family: 'Rubik', 'SansSerif', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        color: #333;
        margin: 0;
      }
      &-list {
        list-style-type: none;
        margin: 0;
        padding-top: 1rem;
        padding-left: 0;
        li {
          padding: .5rem;
          margin-bottom: .5rem;
          background-color: #f6f6f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all .3s;
          &:hover {
            background-color: #f0f0f0;
            transition: all .3s;
          }
          &:last-child {
            margin-bottom: 0;
          }
          .name {
            display: flex;
            align-items: center;
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            color: #333;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            .avatar {
              width: 48px;
              height: 48px;
              background-repeat: no-repeat !important;
              background-position: center !important;
              -webkit-background-size: cover !important;
              background-size: cover !important;
              display: block;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              margin-right: .5rem;
            }
          }
          &.users_row {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: .5rem;
            .name {
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              display: flex;
              justify-content: center;
              align-items: center;
              &:first-child {
                justify-content: flex-start;
              }
              &:last-child {
                justify-content: flex-end;
              }
            }
          }
        }
      }
      &-buttons {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          padding: 1rem;
          text-decoration: none;
          background-color: $bsColor;
          border: 2px solid $bsColor;
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #fff;
          transition: all .3s;
          &:hover {
            background-color: #fff;
            color: $bsColor;
            transition: all .3s;
          }
          &:first-child {
            background-color: #fff;
            color: $bsColor;
            transition: all .3s;
            &:hover {
              background-color: $bsColor;
              color: #fff;
              transition: all .3s;
            }
          }
        }
      }
    }
  }
}
</style>
