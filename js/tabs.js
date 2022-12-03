const tabs = () => {
   const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
   const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
   const designTitle = document.querySelectorAll('.design__title')
   
   

   tabsHandlerElems.forEach((tab, tabIndex) => {
      tab.addEventListener('click',() => {
         tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
         tab.classList.add('design-list__item_active')

         tabsContentElems.forEach(content => {
            if(content.dataset.tabsField === tab.dataset.tabsHandler){
               content.classList.remove('hidden')
            } else {
               content.classList.add('hidden')
            }
         })

         designTitle.forEach((title, titleIndex) => {
            title.classList.add('hidden')
            if(titleIndex === tabIndex){
               title.classList.remove('hidden')
            }
         })
      })
   })
   
}
tabs()