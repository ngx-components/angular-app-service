(function () {

  function appServiceFactory() {

    /**
     * @ngdoc service
     * @name app
     * @description
     * The `app` service keeps track of global application wide stuff.
     */
    function App() {

      /**
       * Placeholder for showMenu state
       *
       * @type {boolean}
       * @private
       */
      this._showMenu = false;
    }

    /**
     * @ngdoc method
     * @name app#showMenu
     * @description
     * Get or set the menu state
     *
     * - `isBusy()`: get current menu state
     * - `isBusy(true)`: show menu
     * - `isBusy(false)`: hide menu
     *
     * @returns {boolean|App} Whether or not the application is busy
     */
    App.prototype.showMenu = function (value) {

      // Act as getter if no parameter
      if (value === undefined) {
        return this._showMenu;
      }

      this._showMenu = !!value;
      return this;
    };

    return new App();

  }

  // Inject dependencies
  appServiceFactory.$inject = [];

  // Export
  angular
    .module('app')
    .factory('app', appServiceFactory);

})();
