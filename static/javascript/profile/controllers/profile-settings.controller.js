(function () {
  'use strict';

  angular
    .module('empee.profile.controllers')
    .controller('ProfileSettingsController', ProfileSettingsController);

  ProfileSettingsController.$inject = ['Authentication', 'Profile', 'jwtHelper'];

  /**
  * @namespace ProfileSettingsController
  */
  function ProfileSettingsController(Authentication, Profile, jwtHelper) {
    var vm = this;

//    vm.destroy = destroy;
    vm.update = update;

    activate();

    function activate() {
//      var authenticatedAccount = Authentication.getAuthenticatedAccount();
      var token = localStorage.getItem('empee.token');
      var username = jwtHelper.decodeToken(token).user_id;
//      var username = $routeParams.username.substr(1);

      Profile.get(username).then(profileSuccessFn, profileErrorFn);

      function profileSuccessFn(data, status, headers, config) {
        vm.profile = data.data;
      }

      function profileErrorFn(data, status, headers, config) {
        console.log('Error');
      }
    }

    function update() {
      Profile.update(vm.profile).then(profileSuccessFn, profileErrorFn);

      function profileSuccessFn(data, status, headers, config) {
        console.log('Success');
      }

      function profileErrorFn(data, status, headers, config) {
        console.log('Error');
      }
    }
  }
}) ();