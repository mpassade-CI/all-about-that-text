
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
    const box = document.getElementById('user-input')
    const text = box.value
    const val = biggify(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const nasaButton = function(){
    clearResults()
    const box = document.getElementById('user-input')
    const text = box.value
    const val = nasafy(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const revButton = function(){
    clearResults()
    const box = document.getElementById('user-input')
    const text = box.value
    const val = reversify(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const tiButton = function(){
    clearResults()
    const box = document.getElementById('user-input')
    const text = box.value
    const val = titleify(text)
    printValue(val)
    box.value = ''
    box.focus()
 }

 const craButton = function(){
    clearResults()
    const box = document.getElementById('user-input')
    const text = box.value
    const val = crazify(text)
    printValue(val)
    box.value = ''
    box.focus()
 }


/**************************
 * SET UP EVENT LISTENERS *
 **************************/



