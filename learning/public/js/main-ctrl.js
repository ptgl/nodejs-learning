import {CONST, TABLE} from "./const";

module.exports = ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state){
  
  this.$onInit = function(){
    $state.go('manage');
  }
  
  const host = "http://localhost:3000";
  $scope.message = 'my World';
  $scope.state = '';

 
  $scope.convert2Words = (num)=>{
    var length = num.length;
    var result = "";
    if(length == 1 || ['10','11'].includes(num) )
      result = doiMotChuSo(num);
    else if (length == 2)
      result = doiHaiChuSo(num);

    $scope.words = result;
  }

  function doiMotChuSo(num){
    return TABLE[num];
  }

  function doiHaiChuSo(num){
    var hangDonVi = num % 10;
    var chuSoHangDonVi = '';
    var hangChuc = Math.floor(num/10);
    
    switch(hangDonVi){
      case 1:
        chuSoHangDonVi = "mốt";
        break;
      case 5:
        chuSoHangDonVi = 'lăm';
        break;
      default:
        chuSoHangDonVi = doiMotChuSo(hangDonVi);

    }

    if(hangChuc == 1)
      return [ TABLE[10], chuSoHangDonVi].join(' ');

    return [doiMotChuSo(hangChuc), "mươi", chuSoHangDonVi].join(' ');
  }


  $scope.gotoView = function(path){
    // ex: /view1 or /view2 
    document.getElementById('angular-route').style.color = "red";
    $location.path(path);
  }

  $scope.gotoWelcome = function(){
    $state.go('welcome');
  }  

  $scope.gotoSate = function(name,param){
    $state.go(name, param);
  }  

  $scope.send = function(){
    var req = {
      'method':'GET',
      'url': host + '/test'
  }
    $http(req).then(function(result){
      $scope.message = result.data.content;
      console.log(result);
    })
  }

  $scope.add = function(){
    var req = {
      method:'POST',
      url: host + '/add',
      data: {'name':$scope.name},
      params:{'type': $scope.type}
  }
    $http(req).then(function(result){
      $scope.message = `Added ${result.data.name}`;
      console.log(result);
    })
  }

  $scope.update = function(){
    var req = {
      method:'PUT',
      url: host + '/update/' + $scope.name
  }
    $http(req).then(function(result){
      $scope.message = `Updated ${result.data.newName}`;
      console.log(result.data);
    })
  }

}]