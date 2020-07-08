import { firebaseAction } from 'vuexfire'

const state = {
    menuItems: []
}

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations= {
    
}

const actions = {
    setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('menuItems', ref)
    })
}

export default {
    state,
    mutations,
    getters,
    actions
}

// menuItems: {
//     1: {
//             'name': 'Park individual',
//             'description': 'Individual park tour',
//             'price': 15,
          
//     },
//     2: {
//     'name': 'Park family',
//     'description': 'family park tour ',
//     'price': 25,
    
//     },
//       3: {
//     'name': 'Park school',
//     'description': 'school park tour',
//     'price': 50,
//     }
// }