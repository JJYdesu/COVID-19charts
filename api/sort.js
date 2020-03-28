function sort1(arr){
    arr.sort(function(a,b){return b-a})
    return arr
}
module.exports = {
    sort1:sort1
}