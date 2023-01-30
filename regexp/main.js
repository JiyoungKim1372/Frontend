//console.log('123')

const str =`
010-1234-5678
thesecon@gmail.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://
동해물과 백두산이 마르고 닳도록
d`

//const regexp = new RegExp('the', 'gi')
//const regexp = /the/gi
//console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))

// const regexp =/the/gi
// console.log(str.match(regexp))

// console.log(str.match(/\.$/gim))


// console.log(
//   str.match(/^t/gmi)
// )

// console.log(
//   str.match(/./g)
// )


const h  = ` the hello  world    !`

console.log(
  // str.match(/https?/g)
  // str.match(/d{2}/)
  // str.match(/[0-9]{2,}/g)
  // str.match(/[가-힣]{2,}/g)
  // str.match(/\bf\w{1,}\b/g)
  // str.match(/\d{1,}/g)
  //  h.match(/\s/g)
  // h.replace(/\s/g,'')
  // str.match(/.{1,}(?=@)/g)
  str.match(/(?<=@).{1,}/g)

)