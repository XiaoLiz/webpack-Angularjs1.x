import home from './index';

describe('Controller: Home', function() {
  let $controller;w

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('World');
  });
});
