(function () {

  angular
    .module('app')
    .run(assignToRootScope);

  /**
   * Assign app service to $rootScope for convenient access
   */
  function assignToRootScope($rootScope, app) {
    $rootScope.app = app;
  }

  // Inject dependencies;
  assignToRootScope.$inject = ['$rootScope', 'app'];

})();
