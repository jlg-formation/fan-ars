export default function ProductCtrl($http) {
    'ngInject';
    this.start = () => {
        console.log('startxxx');

        $http.get('ws/s1').then(response => {
            console.log('s1 response', response);
        }).catch();
    };
};