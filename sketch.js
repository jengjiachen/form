const vm = new Vue({
    el: '#alpacaForm',
    data: {
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        availableStates: [
            { value: 'CA', name: 'California'},
        ],
        selectedColor: [],
        colors: [
            {name: 'Spotted', value: 'Spotted'},
            {name: 'Zebra', value: 'Zebra'},
            {name: 'Cheeta Print', value: 'Cheeta Print'},
            {name: 'Metalic', value: 'Metalic'},
            {name: 'Hallographic', value: 'Hallographic'},
            {name: 'Matte', value: 'Matte'},
        
            
        ],
        status: '',
    }
});