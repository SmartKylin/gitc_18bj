const prefix = 'http://api.thegitc.com'
export default (config => {
  return Object.keys(config).reduce((copy, name) => {
    copy[name] = `${prefix}${config[name]}`
    return copy
  }, {})
})({
    'createPro':'/award/gitc',

})
