app.factory('LocalStorage', [function () {
    return {
        set: function (key, value) {
            localStorage.setItem(key, value);
        },
        get: function (key, defaultValue) {
            return localStorage.getItem(key) || defaultValue;
        },
        remove: function(key) {
            localStorage.removeItem(key);
        },
        setObject: function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        getObject: function (key) {
            return JSON.parse(localStorage.getItem(key) || '{}');
        }
    }
}]);