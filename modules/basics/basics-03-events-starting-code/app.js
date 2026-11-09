const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: '',
      confirmedName: '',
    };
  },

  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },

    submitForm() {
      alert('Submitted!')
    },

    add(num) {
      this.counter = this.counter + num
    },

    reduce(num) {
      this.counter = this.counter - num
    },
    
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName
    }
  }
});

app.mount('#events');
