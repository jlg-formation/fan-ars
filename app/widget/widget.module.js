const app = angular.module('widget', []);


app.component('arsStar', {
    template: `
    <img ng-repeat="i in [0,1,2,3,4]" ng-click="$ctrl.update(i+1)" ng-src="{{$ctrl.img[i]}}">
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
        this.update = note => this.note = note;
    },
    bindings: {
        note: '<',
    },
});

app.component('arsPassword', {
    require: {
        ngModelCtrl: 'ngModel',
    },
    template: `
    <input ng-show="$ctrl.state === $ctrl.HIDDEN" type="password">
    <i ng-show="$ctrl.state === $ctrl.HIDDEN" class="fa fa-eye-slash"></i>
    
    <input ng-show="$ctrl.state === $ctrl.CLEAR" type="text">
    <i ng-show="$ctrl.state === $ctrl.CLEAR" class="fa fa-eye"></i>
    
    `,
    controller: function ARSPasswordCtrl() {
        this.HIDDEN = 0;
        this.CLEAR = 1;
        this.state = this.HIDDEN;

        this.$onInit = () => {
            console.log('this.ngModelCtrl', this.ngModelCtrl);
        };
    }
}); 