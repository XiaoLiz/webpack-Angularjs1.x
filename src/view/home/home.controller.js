export default class HomeController {
	constructor($scope, $cacheFactory, randomNames) {
		this.random = randomNames;
		this.name = 'World';

		this.data = {
			age: 26,
			sex: '男'
		}

		console.log($scope, '$scope====')

		// console.log($cacheFactory, 'CacheFactory====')


	}

	changeName() {

		this.name = 'angular-tips';
	}

	randomName() {
		this.name = this.random.getName();
	}
}

HomeController.$inject = ['$scope', '$cacheFactory', 'randomNames'];
