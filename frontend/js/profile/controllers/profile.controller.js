(function() {
    'use strict';

    angular
        .module('empee.profile.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$stateParams', '$uibModal', 'Profile', 'jwtHelper', '$scope','$log','Upload'];

    function ProfileController($stateParams, $uibModal, Profile, jwtHelper, $scope, $log, Upload) {
        var vm = this;
//        vm.profile = undefined;
        vm.animationsEnabled = true;
        vm.create = create;
        vm.update = update;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.id = $stateParams.userID;
        vm.editForm = {};
        vm.changePassword = changePassword;
        vm.message = {};
//        vm.users = users;

        //Pagination
        vm.itemsPerPage=3;
        vm.currentPage = 1;

        $scope.test = {
            name: 'hello'
        }

        //Image upload
        vm.uploadPic = function(file) {
            file.upload = Upload.upload({
              url: 'upload',
              data: {username: $scope.username, file: file},
            });

            file.upload.then(function (response) {
              $timeout(function () {
                file.result = response.data;
              });
            }, function (response) {
              if (response.status > 0)
                vm.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
              // Math.min is to fix IE which reports 200% sometimes
              file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }


        vm.open = function (user) {
            angular.extend(vm.editForm, user);
            vm.modalInstance = $uibModal.open({
              animation: vm.animationsEnabled,
              templateUrl: 'templates/users/modelTest.html',
              controller: 'ModalInstanceCtrl',
//              controllerAs: 'vm',
              bindToController: true
            });

             vm.modalInstance.result.then(function () {
             vm.selected = vm.editForm;
              console.log('test', vm.selected);
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });

          /*vm.toggleAnimation = function () {
            vm.animationsEnabled = !vm.animationsEnabled;
          };*/

        };
//        console.log('test-out', vm.editForm);
        vm.save= function(){
//            vm.modalInstance.close();
            console.log(vm.modalInstance);
        }

        active();

        function active() {
            var token = localStorage.getItem('empee.token');
            var userid = jwtHelper.decodeToken(token).user_id;
//            console.log(token);
            Profile.get(userid).then(profileSuccessFn, profileErrorFn);

            function profileSuccessFn(data, status, headers, config) {
                vm.profile = data.data;
                console.log(vm.profile);
            }

            function profileErrorFn(data, status, headers, config) {
                console.log('Epic Error!');
            }
        }

        if(vm.id) {
            Profile.get(vm.id).then(profileSuccessFn, profileErrorFn);

            function profileSuccessFn(data, status, headers, config) {
                vm.profile = data.data;
            }

            function profileErrorFn(data, status, headers, config) {
                console.log('Epic Error!');
            }
        }

        function create() {
            Profile.create(vm.user).then(successFn, errorFn);

            function successFn(data, status, config, headers) {
                 $('#myModal').modal('toggle');
            }

            function errorFn(data, status, config, headers) {
            vm.alerts =
                        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };
                console.log(data);
            }
           /* vm.users.push({
                    'username': vm.user.username,
                    'email': vm.user.email
                });*/
        }

        function deleteUser(id, user) {
            Profile.deleteUser(id);

            var index = vm.users.indexOf(user);
            vm.users.splice(index, 1);
        }

        vm.add = function(){
          var f = document.getElementById('file').files[0],
              r = new FileReader();
          r.onloadend = function(e){
            var data = e.target.result;
            //send you binary data via $http or $resource or do anything else with it
          }
          r.readAsBinaryString(f);
        }

        function update() {
            var user = {
                id: vm.profile.id,
                first_name: vm.profile.first_name,
                last_name: vm.profile.last_name,
                username: vm.profile.username,
                email: vm.profile.email,
                password: vm.profile.password

            }

            var account = {
                id: vm.profile.account.id,
                user: vm.profile.account.user,
                phone: vm.profile.account.phone,
                marital_status: vm.profile.account.marital_status,
                gender: vm.profile.account.gender,
                date_of_birth: vm.profile.account.date_of_birth,
                hobby: vm.profile.account.hobby,
                address: vm.profile.account.address,
                bio: vm.profile.account.bio
//                image: vm.image
            }
//            console.log(account);
            Profile.updateUser(user);
            Profile.updateAccount(account);
            $('#myModal').modal('close');
        }

        function updateUser() {
//            console.log(vm.profile);
            Profile.updateUser(vm.profile).then(putSuccessFn, putErrorFn);

            function putSuccessFn(data, status, config, headers, response) {
//                console.log('success user');
                 $('#editModal').modal('toggle');
            }

            function putErrorFn(data, status, config, headers, response) {
                vm.alerts =
                        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };
            }
        }

        function changePassword() {
            if(vm.user){
                if(vm.user.password==vm.profile.password){
                var user = {
                    id: vm.profile.id,
                    username: vm.profile.username,
                    password: vm.user.newPassword
                }

                Profile.updateUser(user).then(putSuccessFn, putErrorFn);

                function putSuccessFn(data, status, config, headers, response) {
                    vm.message.success = 'Password changed successfully';
                }

                function putErrorFn(data, status, config, headers, response) {
                    vm.message.warning = 'Something wrong';
                }
                console.log(user);
                }
                vm.message.danger = 'You old password not matched';
            }
            else {
                vm.message.warning = 'Please provide all info ';
            }
        }

        Profile.all(function(data) {
            vm.users = data.data;
//            window.console.log(vm.projects);
        });
    }

})();