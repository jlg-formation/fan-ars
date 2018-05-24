import { $q } from "@uirouter/core";

export default function ProductCtrl($http, $q) {
    'ngInject';
    this.start = () => {
        console.log('startxxx');

        $http.get('ws/s1').then(response => {
            console.log('s1 response', response);
            return $q.all([
                $http.get('ws/s2').then(response => {
                    console.log('s2 response', response);
                    return $http.get('ws/s5');
                }),
                $http.get('ws/s3'),
                $http.get('ws/s4'),
            ]);
        }).then(responses => {
            console.log('s5 s3 s4  responses', responses);
            return $http.get('ws/s6');
        }).then(response => {
            console.log('s6 response', response);
        }).catch(error => console.error('error', error));
    };
};