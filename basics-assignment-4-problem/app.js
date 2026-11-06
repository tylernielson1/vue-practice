const app = Vue.createApp({
    data() {
        return {
            styleStr: '',
            isVisible: true,
            bgColor: '',
        }
    },
    computed: {
        visibility() {
            return { hidden: !this.isVisible, visible: this.isVisible }
        },

        styleApply() {
            if (this.styleStr === 'user1') {
                return {user1: true}
            } else if (this.styleStr === 'user2') {
                return {user2: true}
            }
        },

        bgApply() {
            return {'background-color': this.bgColor}
        }
    },
    methods: {
        visibilityBtn() {
            this.isVisible = !this.isVisible
        }
    }
})

app.mount("#assignment")