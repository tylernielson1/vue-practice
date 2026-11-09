const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.log(this.message = this.$refs.userText)
      this.message = this.$refs.userText.value
    },
  },
  beforeCreate() {
    console.log('beforeCreate fired')
  },
  created() {
    console.log('created fired.')
  },
  beforeMount() {
    console.log('beforeMount fired')
  },
  mounted() {
    console.log('mounted fired')
  },
  beforeUpdate() {
    console.log('beforeUpdate fired')
  },
  updated() {
    console.log('updated fired')
  },
  beforeUnmount() {
    console.log('beforeUnmount fired')
  },
  unmounted() {
    console.log('umounted fired')
  }
});

app.mount('#app');

setTimeout(function() {
  app.unmount()
}, 3000)


const app2 = Vue.createApp({
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
})

app2.mount('#app2')

const data = {
  message: "Hello!"
}

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!'
    }
    target.message = value
  }
}

const proxy = new Proxy(data,handler)

proxy.message = 'Hello!!!!'

// console.log(proxy.longMessage)