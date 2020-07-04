const state = {
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

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations= {


}

const actions= {
    

}

export default {
    state,
    mutations,
    getters,
    actions
}