export default class HomeController {
  constructor(randomNames, $scope) {
    console.log($scope, '====$scope===')

    this.random = randomNames;
    this.name = 'World';
    $scope.info = {
      age: 20
    }
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }



}

HomeController.$inject = ['randomNames', '$scope'];
