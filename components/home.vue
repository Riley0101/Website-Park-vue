<template>
    <div id="home" class="row justify-content-md-center">
            <div class = "row">
                <div  class="col-sm12 text-center">
                    <div id = "panel-text">
                        <h1>Welcome to the Park</h1>
                        <h2>Autumn offers!</h2>
                    <button class ="btn btn-success" @click="goToMenu">Order a ticket!</button>
                    </div>
                </div>   
            </div>
    </div>
</template>

<script>
    export default{
        methods:{
            goToMenu(){
                this.$router.push ({ name: 'menuLink' })
            }
        }
    }
</script>

<style>
    #home {
        background: url('../src/assets/forest.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2 {
        margin:6%;
    }

    .background {
        background:#eee;
        opacity:0.8;
        margin:0 auto;
    }

    #panel-text {
        background:#eee;
        opacity:0.8;
        max-width: 60%;
        padding: 40px;
        margin:80px auto;
        min-width: 300px;
        display: inline-block;
    }
</style>