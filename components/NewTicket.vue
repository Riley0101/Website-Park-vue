<template>
    <form>
        <h3>Add new ticket:</h3>

        <div class="form-group row">
            <label class="col-sm-3">Ticket</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newTicket.name">
            </div>
        </div>

    <p><strong>Option 1:</strong></p>
    <div class="form-group row">
            <label class="col-sm-3">Description</label>
            <div class="col-sm-9">
                <input  type="text" class="form-control" rows="5" v-model="newTicket.description"></input>
            </div>
        </div>


    <div class="form-group row">
        <label class="col-sm-3">Price</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" v-model="newTicket.price">
        </div>
    </div>

<div class="form-group row">
    <button type="button" class="btn btn-success btn-block" @click="addTicketItem">Add</button>
</div>

    </form>
</template>

<script>
    import { dbTicketRef } from '../src/firebaseConfig'

    export default {
        data() {
            return {
                newTicket: {
                                'name': ' Eg. Park individual',
                                'description': 'Eg. Individual park tour',
                                'price': 15,
                }
            }
        },
        methods: {
            addTicketItem(){
                dbTicketRef.push(this.newTicket)
            }
        }
    }
</script>