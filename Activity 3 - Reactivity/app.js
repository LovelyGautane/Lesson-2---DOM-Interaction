const app = Vue.createApp({
    data() {
        return {
            result: 0
        };
    },
    methods: {
        add() {
            this.result = this.result + 5;
        },
        Add() {
            this.result = this.result + 1;
        }
    }
});

app.mount('#assignment'); 