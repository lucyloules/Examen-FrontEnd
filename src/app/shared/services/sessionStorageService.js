app.factory('sessionStorage', [function () {
    return {
        set: function (key, value) {
            sessionStorage.setItem(key, value);
        },
        get: function (key, defaultValue) {
            return sessionStorage.getItem(key) || defaultValue;
        },
        remove: function(key) {
            sessionStorage.removeItem(key);
        },
        setObject: function (key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        getObject: function (key) {
            return JSON.parse(sessionStorage.getItem(key) || '{}');
        }
    }
}]);