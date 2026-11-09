const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            enteredInput: '',
        }
    },

    methods: {
        showAlert() {
            alert('Assignment done!')
        },

        setInput(event) {
            this.userInput = event.target.value
        },

        inputOnEnter(event) {
            this.enteredInput = event.target.value
        }
    }
})

app.mount('#assignment')