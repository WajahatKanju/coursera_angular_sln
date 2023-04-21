(() => {
    'use strict';
    angular.module('myApp', []).controller('myController', controller);


    function controller($scope) {
      $scope.items = '';
      $scope.check = () => {
        let [message, status] = verifyItems($scope.items);
        $scope.message = message;
        $scope.success = (status === 'message--success');
        $scope.error = (status === 'message--error')
        $scope.starve = (status === 'message--starve');
      }
    }

    function verifyItems(items) {
      const itemArray = items.split(',').map(item => item.trim()).filter(item => item.length > 0);
      let message;
      let status = "";
      if (itemArray.length === 0) {
        message = "Don't Starve yourself";
        status = "message-starve";
      } else if (itemArray.length <= 3) {
        message = "Enjoy!!";
        status = "message--success";
      } else {
        message = "Too Much!!";
        status = "message--error";
      }
      return [message, status];
    }

  }
)()