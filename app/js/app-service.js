
angular.module('voicetube')
    .factory("DataService", ["$http", function ($http) {
        return {
            getInfo: function () {
                return $http({
                    metod: 'GET',
                    url: 'https://merik.voicetube.com/demo/data'
                });
            }
        }
    }])
    .factory("UtilService", [function () {
        var pad = function (num) {
            return ("0" + num).slice(-2);
        }
        var zhLevel = ["初級", "中級", "中高級", "高級"];
        var zhCaption = { cht: "中文", ja: "日文", vi: "越南文", en: "英文" };
        return {
            mmss: function (sec) {
                var minutes = Math.floor(sec / 60);
                sec = sec % 60;
                minutes = minutes % 60;
                return pad(minutes) + ":" + pad(sec);
            },
            level: function (level, lang) {

                if (lang === 'zh') {
                    return zhLevel[level - 1];
                }
                return level;
            },
            captions: function (captions, lang) {

                if (lang === 'zh') {
                    return captions.map(function (caption) {
                        return zhCaption[caption];
                    })
                }
                return caption;
            }
        }
    }])
