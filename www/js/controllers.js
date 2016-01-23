angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {

        $scope.text = 'appCtrl';

        $scope.fn1 = function (isopened) {
            console.log('fn1 opened', isopened);
        };

        $scope.fn2 = function (param) {
            console.log('fn1: ', param);
        };

        $scope.actions = [
            { text: 'Settings'  , value: 0, fn: $scope.fn1, disabled: true },
            { text: 'Feedback'  , value: 1, fn: $scope.fn2 },
            { text: 'Chats'     , value: 1, href: '#/tab/chats', disabled: false },
            { text: 'Logout'    , value: 2, href: "#/logout"}
        ];

    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.$on('$ionicView.enter', function(e) {
            console.log('$ionicView.enter');
        });
        console.log('entr normal');
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
