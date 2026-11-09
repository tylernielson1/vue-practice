const app = Vue.createApp({
    data()  {
        return {
            name: 'Tyler',
            age: 30,
            ageInFive: 30 + 5,
            favNum: Math.random(),
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NLea_FEibuAgLe6qhf4ulIh-9J_wsTMS0qqToQ8jNA&s=10'
        }
    }
});

app.mount('#assignment')