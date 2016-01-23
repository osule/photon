angular.module('todoApp', [])


.controller('postController', function($scope) {

    



    $scope.createUser = function () 
    {
        var ref = new Firebase("https://photon-app.firebaseio.com/post");
        
      ref.push({ 
        title        : "books",
        src         :"rkerferfererere"
      });

    }

    $scope.createUser();




    $scope.co = function () 
    {


      var postname   =   "books";

      ref.push().set({ 
        post        : "postname"
      });

    }

})




