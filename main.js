const str = `
810-1234-5678
thesecond@gmail.com
https://www.openapi.com/?apikey=7035c50c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccccdddd
`


console.log(
    str.match(/(?<=@).{1,}/g)
)