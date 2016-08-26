var app = angular.module('directory', []).controller('searchCtrl', function($scope) {
    $scope.staff = [
    {
      firstName:'Michael',
      lastName:'Brewer',
      title:'Head, Research & Learning',
      office:'MAIN A204B',
      department:'Research and Learning (R&L)',
      phone:'520-307-2771',
      email:'brewerm@email.arizona.edu',
      photo:'images/brewerm.jpg'
    },
      {
      firstName:'Cheryl',
      lastName:'Cuillier',
      title:'Associate Librarian',
      office:'MAIN A207',
      department:'Research and Learning (R&L)',
      phone:'520-310-9874',
      email:'ccuillie@email.arizona.edu',
      photo:'images/cuillierc.jpg'},
       {
      firstName:'Jason',
      lastName:'Dewland',
      title:'Assistant Librarian',
      office:'MAIN A207',
      department:'Research and Learning (R&L)',
      phone:'520-447-8097',
      email:'jasondewland@email.arizona.edu',
      photo:'images/dewlandj.jpg'
      },
       {
      firstName:'Mary',
      lastName:'Feeney',
      title:'Associate Librarian',
      office:'MAIN A213',
      department:'Research and Learning (R&L)',
      phone:'520-307-2615',
      email:'mfeeney@email.arizona.edu',
      photo:'images/mfeeney.jpg'
    }
    ];
  
 // Makes the input box query string lowercase
  	$scope.query = '';
  	$scope.$watch('query', function() {
  	    $scope.query = $scope.query.toLowerCase();
  	});
  
  	// Only search certain properties
    $scope.search = function (row) {
        return (
          angular.lowercase(row.firstName).indexOf($scope.query || '') === 0 || 
          angular.lowercase(row.lastName).indexOf($scope.query || '') === 0);
    };
  
   
});
