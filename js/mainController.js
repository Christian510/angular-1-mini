
const app = angular.module("friendsList", []);

app.controller("mainController", function($scope) {
 $scope.friends = [
    "Patrick",
    "Jesse",
    "Monica",
    "Laura",
    "Audra"
],

$scope.addFriend = function(){
    $scope.friends.push($scope.newFriend);
}

});