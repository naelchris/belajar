//start
//function expression to select element
const selectElement = (s) => document.querySelector(s);

//when click open
selectElement('.open').addEventListener('click',()=>{
    selectElement('.nav-list').classList.add('active');
});
//wehn click close
selectElement('.close').addEventListener('click',()=>{
    selectElement('.nav-list').classList.remove('active');
});