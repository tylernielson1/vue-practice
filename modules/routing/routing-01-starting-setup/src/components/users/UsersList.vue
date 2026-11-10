<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveInput">Save</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return {
      inputSaved: false,
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // programmatic navigation
      this.$router.push('/teams')
    },
    saveInput() {
      this.inputSaved = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.inputSaved) {
      next()
    } else {
      const userWantsToLeave = confirm('Are you sure? you have unsaved changes!')
      next(userWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>