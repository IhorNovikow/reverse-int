module.exports = function reverse (a) {
    if (a<0){
        a=a*(-1)
        return(+(String(a).split('').reverse().join('')))
    }else{
        return(+(String(a).split('').reverse().join('')))
    }
   
}
