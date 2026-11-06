const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            hideList: false,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask)
            this.enteredTask = ''
        },

        removeTask(index) {
            this.tasks.splice(index, 1)
        },

        triggerHideList() {
            this.hideList = !this.hideList
        }
    }
})

app.mount('#assignment')