function randomNumInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {        
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLog: [],
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        },
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },

        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },

        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const damage = randomNumInRange(5, 12)
            this.monsterHealth -= damage
            this.handleLogging('player', 'attack', damage)
            this.attackPlayer()
        },

        attackPlayer() {
            const damage = randomNumInRange(8, 15)
            this.playerHealth -= damage
            this.handleLogging('monster', 'attack', damage)
        },

        specialAttackMonster() {
            this.currentRound++
            const damage = randomNumInRange(10, 25)
            this.monsterHealth -= damage
            this.handleLogging('player', 'attack', damage)
            this.attackPlayer()
        },

        healPlayer() {
            this.currentRound++
            const heal = randomNumInRange(8, 20)
            if (this.playerHealth + heal > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += heal
            }
            this.handleLogging('player', 'heal', heal)
            this.attackPlayer()
        },

        surrender() {
            this.winner = 'monster'
        },
        
        startGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.winner = null
            this.currentRound = 0
            this.battleLog = []
        },

        handleLogging(who, what, value, round) {
            this.battleLog.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
})

app.mount('#game')