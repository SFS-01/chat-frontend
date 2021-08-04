export default {
    get(key, _default) {
        _default = (typeof _default == 'undefined') ? '' : _default;
        return localStorage.getItem(key);
    },

    getAsJson(key, _default) {
        _default = (typeof _default == 'undefined') ? '' : _default;
        return helpers.toJson(localStorage.getItem(key), _default)
    },

    set(key, val) {
        localStorage.setItem(key, val);
    },

    setAsJson(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    },

    remove(key) {
        localStorage.removeItem(key)
    }
}