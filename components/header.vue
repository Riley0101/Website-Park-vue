<template>
    <header class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class ="navbar-brand" href="/">PARK</a> 
            <ul class="navbar-nav">
                    <router-link :to ="{name:'homeLink'} " tag="li"><a class="nav-link" >home</a></router-link>
                    <router-link :to ="{name:'menuLink'} " ><a class="nav-link" >menu</a></router-link>
            </ul>
        </nav>
    </header>
</template>
<script>
export default{ 
    
    }

</script>
<style>
    header {
        margin-bottom:20px;
    }

    .navbar-brand {
        font-size:1.5em;
    }

</style>