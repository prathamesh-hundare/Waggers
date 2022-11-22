const bookbut = document.querySelector('.bookButton');
const pro = document.querySelector('.processPop');
const cl = document.querySelector('.close');
bookbut.addEventListener('click',()=>{
    pro.style.display='flex';
})

cl.addEventListener('click',()=>{
    pro.style.display='none';
})