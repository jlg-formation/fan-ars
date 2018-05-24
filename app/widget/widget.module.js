const app = angular.module('widget', []);


app.component('arsStar', {
    template: `
    <img ng-src="{{$ctrl.img[0]}}">
    <img ng-src="{{$ctrl.img[1]}}">
    <img ng-src="{{$ctrl.img[2]}}">
    <img ng-src="{{$ctrl.img[3]}}">
    <img ng-src="{{$ctrl.img[4]}}">
    `,
    controller: function ARSStarCtrl() {
        const yellowStar = 'widget/img/yellow_star.png';
        const whiteStar = 'widget/img/white_star.png';
        this.img = [];

        const note = 3;
        for (let i = 0; i < note; i++) {
            this.img[i] = yellowStar;
        }
        for (let i = note; i < 5; i++) {
            this.img[i] = whiteStar;
        }
    }
});
