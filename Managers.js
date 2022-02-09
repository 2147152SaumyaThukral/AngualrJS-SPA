var myManagers = angular.module('myManagers',['ngRoute']);
myManagers.controller('ManagerCtrl',function($scope, $http)
{
    $http.get("https://2147152saumyathukral.github.io/Lab8JSON/Managers.json")
    .success(function(response)
    {
        
        {
            $scope.names=response.Managers;
        }
        
    });
    $scope.orderByall = function(item) {
        $scope.myOrderBy = item;
      }
    
});
myManagers.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});
myManagers.filter("myfilterid",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toLowerCase();
    }}
})


myManagers.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl: 'Home.html',
        controller:'homectrl'
    }).when('/Managers',
    {
        templateUrl:'Managers.html',
        controller: 'Managersctrl'
    }).when('/Employees',
    {
        templateUrl:'Employees.html',
        controller:'Employeesctrl'
    })
})

.controller('Managersctrl', function()
{

})

.controller("homectrl", function($scope, $routeParams)
{
    $scope.message="Home Page"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})

.controller("Employeesctrl", function($scope)
{
    $scope.Employees=["Meena", "Stalin", "Veer", "Parineeti", "Pari", "Sandeep", "Ritesh", "Sonal"];
})

.controller("Managersctrl", function($scope,$http)
{
    $http.get('Managers.json')
    .success(function(response)
    {
        $scope.Managers=response.Managers;
    });
});