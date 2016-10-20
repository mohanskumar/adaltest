(function() {
  'use strict';

  angular
    .module('ngjs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
