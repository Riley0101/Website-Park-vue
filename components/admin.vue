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
        <tbody v-for="(item, key) in getMenuItems" :key="item['.key']">
        <tr>
            <td>{{item.name}} </td>
            <td><button class="btn btn-outline-danger btn-sm"
                @click="removeMenuItem(item['.key'])">x</button></td>
            
        </tr>
        </tbody>
        </table>
    </div>
</div>

<div class="row">
    <div class="col-sm-12 col-md-6">
        <h3>Tickets order: {{ numberOfOrders }}</h3>
        <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">

                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                        <div class="order-number">
                            <strong><em>Order Number: {{ index +1  }}</em></strong>
                            <button class="btn btn-outline-danger btn-sm"
                            @click="removeOrderItem(orders['.key'])">x</button></td>
                        </div>
                        
                        <tr v-for="itm in orders">
                                <td> {{itm.name}}</td>
                                <td> {{itm.quantity}}</td>
                                <td> {{itm.price}}</td>
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
import { dbTicketRef, dbOrdersRef } from '../src/firebaseConfig'


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
        
        methods: {
            removeMenuItem(key) {
                console.log(key)
            dbTicketRef.child(key).remove()
            },
            removeOrderItem(key) {
            dbOrdersRef.child(key).remove()
            },
            removeOrderItem(key) {
                dbOrdersRef.child(key)
.remove()            }
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