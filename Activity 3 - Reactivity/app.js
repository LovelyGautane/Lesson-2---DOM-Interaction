const app = Vue.createApp({
    data() {
        return {
            result: 0,
            value: 0
        }
    },
    watch: {
        result(value) {
            if(value >= 37) {
                const that = this;
                setTimeout(function() {
                    that.result = 0;
                }, 5000)
            }
        }
    },
    methods: {
        add() {
            this.result = this.result + 5;
        },
        Add() {
            this.result = this.result + 1;
        },
        count() {
            if(this.result == 0) {
                return this.result;
            } else if(this.result > 0 && this.result < 37) {
                return 'Not there yet!';
            } else if(this.result > 37){
                return 'Too much!';
            }
            return this.result;
        }
    }
});

app.mount('#assignment'); 