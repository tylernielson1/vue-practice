const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        status(value) {
            const that = this
            setTimeout(function () {
                that.counter = 0
            }, 5000)
        }
    },
    computed: {
        status() {
            if (this.counter < 37) {
                return 'Not there yet'
            } else if (this.counter > 37) {
                return 'Too much!'
            }
            else if (this.counter === 37) {
                return 'You\'re there!'
            }
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num
        }
    }
})

app.mount("#assignment")