const app = angular.module('widget', []);


app.component('arsStar', {
    template: `

    <img ng-repeat="i in [0,1,2,3,4]"  ng-src="{{$ctrl.img[i]}}">
    
    `,
    controller: function ARSStarCtrl($scope) {
        const yellowStar = 'widget/img/yellow_star.png';
        const whiteStar = 'widget/img/white_star.png';
        this.img = [];

        $scope.$watch('$ctrl.note', () => {
            const note = this.note || 3;
            for (let i = 0; i < note; i++) {
                this.img[i] = yellowStar;
            }
            for (let i = note; i < 5; i++) {
                this.img[i] = whiteStar;
            }
		});
    },
    bindings: {
        note: '<',
    },
});
