document.querySelector('.back').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        setTimeout(()=>{
            document.querySelector('.ham').style.display = 'inline';
        },200)
        document.querySelector('.back').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.back').style.display = 'inline';
        },300)
        
    }
})