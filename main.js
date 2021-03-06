
/************************
 * DOM HELPER FUNCTIONS *
 ************************/

const printValue = function(str){
    const item = document.createElement('li')
    item.innerText = str
    const list = document.querySelector('.result')
    list.appendChild(item)
}

const clearResults = function(){
    const item = document.querySelectorAll('li')
    const list = document.querySelector('.result')
    for (const x of item){
        list.removeChild(x)
    }
}

/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/

 const bigButton = function(){
    clearResults()
    const box = document.getElementById('user-input-b')
    const text = box.value
    const val = biggify(Number(text))
    printValue(val)
    box.value = ''
    box.focus()
 }

 const nasaButton = function(){
    clearResults()
    const box = document.getElementById('user-input-n')
    const text = box.value
    const val = nasafy(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const revButton = function(){
    clearResults()
    const box = document.getElementById('user-input-r')
    const text = box.value
    const val = reversify(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const tiButton = function(){
    clearResults()
    const box = document.getElementById('user-input-t')
    const text = box.value
    const val = titleify(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const craButton = function(){
    clearResults()
    const box = document.getElementById('user-input-c')
    const text = box.value
    const val = crazify(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const revButton2 = function(){
   clearResults()
   const box = document.getElementById('user-input-r2')
   const text = box.value
   const val = reversify2(text)
   printValue(val)
   box.value = ''
   box.focus()
}


/**************************
 * SET UP EVENT LISTENERS *
 **************************/

 const big = document.querySelector('.biggify')
 const nasa = document.querySelector('.nasafy')
 const crazy = document.querySelector('.crazify')
 const reverse = document.querySelector('.reversify')
 const title = document.querySelector('.titleify')
 const rev2 = document.querySelector('.reversify2')

 big.addEventListener('click', bigButton)
 nasa.addEventListener('click', nasaButton)
 crazy.addEventListener('click', craButton)
 reverse.addEventListener('click', revButton)
 title.addEventListener('click', tiButton)
 rev2.addEventListener('click', revButton2)


