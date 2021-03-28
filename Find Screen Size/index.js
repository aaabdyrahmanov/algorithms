module.exports = function findScreenHeight(width, ratio) {
    const a = ratio.split(':')
    return `${width}x${width/Number(a[0])*Number(a[1])}`
 }
