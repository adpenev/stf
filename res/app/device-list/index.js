require('./device-list.css')

module.exports = angular.module('device-list', [
  require('stf/device').name,
  require('stf/user/group').name

])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/devices', {
      template: require('./device-list.jade'),
      controller: 'DeviceListCtrl'
    })
  }])
  .controller('DeviceListCtrl', require('./device-list-controller'))
  .controller('ShellCommandCtrl', require('./shell-controller'))
