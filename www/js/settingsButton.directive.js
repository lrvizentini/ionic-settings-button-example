(function () {
    var custonButtons = angular.module('customButtons', ['ionic']);
    custonButtons.directive('btnSettings', btnSettings);

    btnSettings.$inject = [];
    function btnSettings() {

        btnSettingsController.$inject = ['$scope'];
        function btnSettingsController($scope) {

            $scope.btnIcon = ($scope.icon === undefined || $scope.icon === '') ?
                'ion-android-more-vertical' : $scope.icon;

            $scope.showWrapper = false;
            $scope.text = 'directive';

            $scope.getIcon = function () {
                return $scope.showWrapper ?
                    ($scope.iconActive || $scope.btnIcon) : ($scope.btnIcon);
            }
            $scope.getButtonClass = function () {
                return $scope.showWrapper ?
                    ($scope.buttomActiveClass || $scope.buttomClass) : ($scope.buttomClass);
            }

            $scope.clickAction = function ($event) {
                $scope.showWrapper = !$scope.showWrapper;

                if (typeof $scope.onClick === "function") {
                    $scope.onClick({ isopened: $scope.showWrapper });
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
            template:   '<button class="button button-clear {{buttomClass}} {{getButtonClass()}}" style="width:30px" ng-click=clickAction($event)>' +
                        '    <i class="icon {{getIcon()}}"></i>' +
                        '    <div ng-transclude class="settings-wrapper text-left" ng-show="showWrapper" style="position:absolute;right:0;" ng-if="!actions"></div>' +
                        '    <div class="list text-left" ng-if="actions" ng-show="showWrapper && actions" style="position:absolute;right:0;">' +
                        '         <style scoped>.list .item{padding: 4px 16px;min-width:150px} .noborder{border:none}</style>' +
                        '         <a class="item {{itemClass}}" ng-class="{noborder:noBorder}" ng-repeat="m in actions" ng-click="m.fn(m.value)" href="{{m.href}}" ng-show="m.disabled !== true">{{m.text}}</a>' +
                        '   </div>' +
                        '</button>'
        };
    }

})();