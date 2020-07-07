<template>
<div>
<div class="row">
<div class="col-sm-12  col-md-6">
<!--New park component-->
<ww-newTicket></ww-newTicket>
</div>
    <div class="col-sm-12 col-md-6">
        <h3>Ticket: </h3>
        <table class="table table-hover">
        <thead class="thead-default">
        <tr>
        <th>Item</th>
        <th>Remove from Ticket</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems" >
        <tr>
            <td>{{item.name}}</td>
            <td><button class="btn btn-outline-danger btn-sm">x</button></td>
        </tr>
        </tbody>
        </table>
    </div>
</div>

<div class="row">
    <div class="col-sm-12 col-md-6">
        <h3>Tickets order: {{ numberOfOrders }}</h3>
        <table class="table table-sm">
                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="orders in getOrders">
                    <td> orders.Item </td>
                </tr>

                </tbody>

        </table> 
    </div>
</div>



















<hr>
<div class="row">
    <div class="col-sm-12 col-lg-6">
    <ww-login></ww-login>
    </div>
</div>
    </div>
</template>

<script>
import NewTicket from '../components/NewTicket.vue'
import Login from '../components/login.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        wwNewTicket: NewTicket,
        wwLogin:Login
    },
       computed: {
            ...mapGetters([
                'numberOfOrders',
                'getMenuItems',
                'getOrders'
            ])
            },
    beforeRouteLeave: (to,from,next) => {
        if(confirm("Have you remembered to log out?")== true) {
            next();
        }else{
            next(false);
            }
        }
    }
</script>