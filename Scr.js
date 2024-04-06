const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#listcomment')
const commentItem = document.querySelectorAll('#listcomment .item')

var translateX = 0
var count = commentItem.length

next.addEventListener('click', function(event) {
   event.preventDefault()
   if(count==1){
    return false
   }
   translateX += -350
   comment.style.transform = `translateY(${translateX}px)`
   count--

}
)

prev.addEventListener('click', function(event) {
    event.preventDefault()
    if(count == 7){
        return false
    }
    translateX = translateX + 350
    comment.style.transform = `translateY(${translateX}px)`
    count++
})

