/**
 * Created by ankur on 1/3/17.
 */
app.controller('homeController',['$scope',function($scope){
    $scope.social = {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
    };
    $scope.phone = '+91 8889945546';
    $scope.address = {street: 'BTM 2nd stage, Bangalore - 560047', state: 'KA, India.'};
    $scope.mail = 'ankurmahapatra@gmail.com';
}])