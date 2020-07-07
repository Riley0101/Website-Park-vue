<template>
  <div id="app">
    <div class="container">
      <ww-header></ww-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>

    <div class="container">
      <div class="row">
      <div class="col-sm-6 col-md-6">
            <router-view name="booking-guide"></router-view>
        </div>
        <div class="col-sm-6 col-md-6">
            <router-view name="history"></router-view>
        </div>
      </div>
      </div>
        
    <div class="container">
  <ww-footer></ww-footer>
  </div>
  </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
 import {dbTicketRef, dbOrdersRef } from './firebaseConfig'


  export default {
      components:  {
    wwHeader: Header,
    wwFooter: Footer,
    },
    created () {
      this.$store.dispatch('setMenuRef', dbTicketRef),
      this.$store.dispatch('setOrdersRef', dbOrdersRef)
    }
}
</script>

<style>
  header, footer {
    background: #ECEEEF;
    padding: 40 px 0;
    font-size: 1em;
  }

  .card{
    background: #faf0af;
    margin: 20px 0;
    border-radius:0;
  }
</style>
