(function() {
  'use strict';

  angular
    .module('ngjs')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, adalAuthenticationServiceProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    adalAuthenticationServiceProvider.init(
      {
        instance: 'https://login.microsoftonline.com/',
        clientId: 'MY-CLIENT-ID',
        cacheLocation: 'localStorage'
        //localLoginUrl: '/login'
      },
      $httpProvider
    );

  }

})();
