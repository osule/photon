angular.module('todoApp', [])


.controller('commentController', function($scope) {

    var ref = new Firebase("https://photon-app.firebaseio.com/post/");
        var user                    = 'emeka';
        var postsRef                = ref.child( user + '/comment');
    $scope.comment = function () 
    {
      var comment   =   "fhejrfbwejrh frhvrjrtfher enfergh";

      postsRef.push().set({ 
        comment        : comment
      });

    }

    $scope.comment();


})



