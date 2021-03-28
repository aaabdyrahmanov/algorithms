module.exports = function order (words) { 
    return words.split(' ').sort((x,y) => x.match(/[0-9]/)-y.match(/[0-9]/)).join(' ')
}
