angular.module("cdpApp")
  .factory('userSvc', function ($route, $rootScope, $log, $http) {
    var studentsUrl = "/students.json"
    var singleStudentUrl = "/students/#{id}.json"

    var getStudents = function(){
      return $http.get(studentsUrl);
    };

    var getStudentProfile = function(){
      return $http.get(singleStudentUrl);
    };

    var createStud = function(student){
      return $http.post(student);
    };



    return{
      getStudents: getStudents,
      getStudentProfile: getStudentProfile,
      createStud: createStud

    }

  });
