function getPrices(){
    return {
        banana: 1,
        potato: 2,
        tomato: 3,
        cucumber: 4,
        salad: 5,
        apple: 6
    }
}

function countArticle(array){
    return array.length
}

function countProducts(array){
    var result = 0
    var tmp = 0
    array.forEach( (element) => {
        array.forEach( (ele) => {
            if(element === ele){
                tmp++
            }
        })
        if(tmp > result){
            result = tmp
            tmp = 0
        }else{
            tmp = 0
        }
    })
    return result
}

// For example
const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];


function removeFreeArticles(array){
    return array.slice(0,-2)
}


exports.getPrices = getPrices
exports.countArticle = countArticle
exports.countProducts = countProducts
exports.removeFreeArticles = removeFreeArticles