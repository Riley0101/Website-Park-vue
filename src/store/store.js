import Vue from 'vue'
import Vuex from 'vuex'

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
        }
    }
})