function objectFlatten(obj = {}) {
    const result = {}

    function flatten(item = {}, preKey = '') {
        Object.entries(item).forEach(([key, val]) => {
            const newKey = preKey ? `${preKey}.${key}` : key
            if (Object.prototype.toString.call(val) === '[object Object]') {
                flatten(val, newKey)
            } else {
                result[newKey] = val
            }
        })
    }
    flatten(obj)

    return result
}