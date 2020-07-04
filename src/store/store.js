import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        menuItems: {
            1: {
                    'name': 'Park individual',
                    'description': 'Individual park tour',
                    'price': 15,
                  
            },
            2: {
            'name': 'Park family',
            'description': 'family park tour ',
            'price': 25,
            
            },
              3: {
            'name': 'Park school',
            'description': 'school park tour',
            'price': 50,
            }
        },
        orders: [],
        currentUser: null
    },
    getters: {
        getMenuItems: state => state.menuItems,
        numberOfOrders: state => state.orders.length,
        currentUser: state => state.currentUser
    },
    mutations: {
        addOrder: (state, orders) => state.orders.push(orders),
        userStatus (state, user) {
            if(user) {
                state.currentUser = user.email
            }else{
                state.currentUser = null
            }
        }
    },
    actions
})