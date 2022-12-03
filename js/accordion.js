const accordion = () => {
   const lists = document.querySelectorAll('.feature-sub')
   
   const btns = document.querySelectorAll('.feature__link')

   btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
         btns.forEach(btn => {
            btn.classList.remove('feature__link_active')
         })
         btn.classList.add('feature__link_active')

         lists.forEach((listItem) => {
            listItem.classList.add('hidden')
         })
         lists[index].classList.remove('hidden')
      })
   })
   
   
}
accordion()