(function () {
    var custonButtons = angular.module('customButtons', ['ionic']);
    custonButtons.directive('btnSettings', btnSettingsDirective);

    btnSettingsDirective.$inject = [];
    function btnSettingsDirective() {

        btnSettingsController.$inject = ['$scope'];
        function btnSettingsController($scope) {

            $scope.btnIcon = ($scope.icon === undefined || $scope.icon === '') ?
                'ion-android-more-vertical' : $scope.icon;

            $scope.showMenu = false;

            $scope.getIcon = function () {
                return $scope.showMenu ?
                    ($scope.iconActive || $scope.btnIcon) : ($scope.btnIcon);
            }
            $scope.getButtonClass = function () {
                return $scope.showMenu ?
                    ($scope.buttomActiveClass || $scope.buttomClass) : ($scope.buttomClass);
            }

            $scope.clickAction = function ($event) {
                $scope.showMenu = !$scope.showMenu;

                if (typeof $scope.onClick === "function") {
                    $scope.onClick({ isopened: $scope.showMenu });
                }

            }
        }

        btnSettingsLink.$inject = [];
        function btnSettingsLink($scope, $el, $attrs) {
        }

        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: {
                icon: '@?',
                iconActive: '@?',
                itemClass: '@?',
                buttomClass: '@?',
                buttomActiveClass: '@?',
                noBorder: '=',
                onClick: '&',
                actions: '='
            },
            controller: btnSettingsController,
            link: btnSettingsLink,
            templateUrl: 'js/directives/settingsButton.tpl.html'
        };
    }

})();