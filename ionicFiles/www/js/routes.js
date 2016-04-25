angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.scorepad', {
    url: '/scorepad',
    views: {
      'tab1': {
        templateUrl: 'templates/scorepad.html',
        controller: 'scorepadCtrl'
      }
    }
  })

  .state('tabsController.notes', {
    url: '/notes',
    views: {
      'tab2': {
        templateUrl: 'templates/notes.html',
        controller: 'notesCtrl'
      }
    }
  })

  .state('tabsController.findCard', {
    url: '/findCard',
    views: {
      'tab3': {
        templateUrl: 'templates/findCard.html',
        controller: 'findCardCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/ctrlPage',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/ctrlPage/scorepad')

  

});