<template>
<div><p>Click on the link below</p>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav">
                    <router-link :to="{name: 'historyLink' }" tag="li"><a class="nav-link" >our history</a></router-link>
                    <router-link :to="{name: 'contactLink' }" tag="li"><a class="nav-link" >contact us</a></router-link>
                    <router-link :to="{name: 'bookingLink' }" tag="li"><a class="nav-link" >booking</a></router-link>
            </ul>
        </nav>
        <router-view></router-view>
        </div> 
</template>