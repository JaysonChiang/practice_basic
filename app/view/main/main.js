
function MainController($scope, dataService, util) {
    var vm = this;
    vm.sortType = 'publish'; //initial
    vm.filterType = 'unlimit';  //initial
    vm.infos = []; //initial
    vm.originData = []; //initial

    //query Data
    dataService.getInfo()
        .then(function (res) {
            var result = res.data;

            vm.originData = result.data.map(function (item) {
                item.mmss = util.mmss(item.duration);
                item.level_zh = util.level(item.level, 'zh');
                item.captions_zh= util.captions(item.captions, 'zh');
                return item;
            });
    
            vm.infos = vm.originData;
        });

}
MainController.prototype.sortClass = function (sortType) {
    var vm = this;
    return vm.sortType === sortType ? [ 'button-focus'] : ['button-unfocus'];
};
MainController.prototype.sortBy = function (sortType) {
    var vm = this;
    vm.sortType = sortType;
};

MainController.prototype.filterClass = function (filterType) {
    var vm = this;
    return vm.filterType === filterType ? [ 'button-focus'] : ['button-unfocus'];
};
MainController.prototype.filterFunction = function (filterType) {
    var vm = this;
    vm.filterType = filterType;
    vm.infos = vm.originData.filter(function (info) {

        switch (filterType) {
            case '4min':
                return info.duration < 300;
                break;
            case '5to10':
                return info.duration >= 300 && info.duration < 600;
                break;
            case 'over10':
                return info.duration >= 600;
                break;
            case 'unlimit':
            default:
                return info;
        }
    })
};

MainController.$inject = ['$scope', 'DataService','UtilService'];

angular.module('voicetube').controller('MainController', MainController);
