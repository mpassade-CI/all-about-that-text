
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



/**************************
 * SET UP EVENT LISTENERS *
 **************************/



