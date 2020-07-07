<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Ticket</th>
            <th>Description</th>
            <th>Price</th>
            <th>Basket</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
            <td>{{ item.description }}</td>
            <td>{{ item.price }}</td>

            <td>
              <button class="btn btn-sm btn-outline-success" type="button"@click="addtoBasket( item )">+</button>
            </td> 
          </tr>
        </tbody>
      </table>
    </div>

    <!--Shopping basket-->
    <div class="col-sm-12 col-md-6">
    <div v-if="basket.length > 0">
       <table class="table">
        <thead class="thead-default">
          <tr>
            <th>Quantity</th>
            <th>Item</th>
             <th>Total</th>
          </tr>
        </thead>
        <tbody v-for="item in basket">
          <tr>
               <td><button class="btn btn-sm"
                          type="button"
                          @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}-</span>
                <button class="btn btn-sm"
                        type="button"
                        @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.price * item.quantity  }}</td>
          </tr>
        </tbody>
        </table>
    <p>Order total: {{ total }}</p>
    <button class="btn btn-success btn-block" @click="addNewOrder"> Buy Ticket</button>
</div>
    <div v-else>
        <p>{{basketText}}</p> {{ this.$store.state.orders }}
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import  { dbOrdersRef } from '../src/firebaseConfig'

    export default  {
        data() {
            return{
              basket: [],
              basketText:'Your basket is empty'
                }
            },
            computed: {
              ...mapGetters ([
                'getMenuItems'
              ]),
                total() {
              var totalCost = 0;
              for( var items in this.basket ) {
                var individualItem = this.basket[items];
                totalCost += individualItem.quantity * individualItem.price;
              }
        return totalCost
      }
            },
            methods: {
                addtoBasket(item) {
                    this.basket.push({
                        name:item.name,
                        price:item.price,
                        quantity:1
                    })
                },
                removeFromBasket(item) {
                this.basket.splice(this.basket.indexOf(item), 1);
                },
                increaseQuantity(item) {
                    item.quantity++;
                },
                decreaseQuantity(item) {
                    item.quantity--;

                    if(item.quantity ===0) {
                        this.removeFromBasket(item);
                    }
                },
                addNewOrder() {
                  // this.$store.commit('addOrder', this.basket)

                  dbOrdersRef.push(this.basket)
                  this.basket = []
                  this.basketText = "Thank you, you have successfully completed the purchase"
                }
            }
        }
</script>
