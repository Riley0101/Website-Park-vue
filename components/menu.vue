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

            <td><button class="btn btn-sm btn-outline-success" type="button"@click="addtoBasket( item )">+</button></td> </td>
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
            <span>{{item.quantity}}-</span>
            <button class="btn btn-sm" 
            type="button"
            @click="increaseQuantity(item)">+</button></td>
            <td>{{item.description}}</td>
            <td>{{item.price * item.quantity}}</td>
        </tr>
        </tbody>
        </table>
    <p>Order total: </p>
    <button class="btn btn-success btn-block"> Buy Ticket</button>
</div>
    <div v-else>
        <p>{{basketText}}</p>
    </div>
    </div>
  </div>
</template>

<script>
    export default  {
        data() {
            return{
            basket: [],
            basketText:'Your basket is empty'
                }
            },
            computed: {
                getMenuItems() {
                  return  this.$store.state.menuItems
                }
            },
            methods: {
                addtoBasket(item) {
                    this.basket.push({
                        name:item,
                        description: item.description,
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
                }
            }
        }
</script>
