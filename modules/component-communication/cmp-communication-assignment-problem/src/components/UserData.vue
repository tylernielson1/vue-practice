<template>
    <form @submit.prevent="submitData">
        <h2>Update User</h2>
        <div>
            <label>Username</label>
            <input type="text" v-model="enteredUsername" />
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="enteredAge" />
        </div>
        <div>
            <button>Update User</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['update-user'],
    data() {
        return {
            enteredUsername: '',
            enteredAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('update-user', this.enteredUsername, this.enteredAge)
        }
    }
}
</script>