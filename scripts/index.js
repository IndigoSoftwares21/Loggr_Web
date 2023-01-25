let maintext = document.getElementById('maintext');
window.onload = locate();

function locate()
{
    maintext.innerHTML = "Locate"
    setTimeout(sort, 1000)
}


function sort()
{
    maintext.innerHTML = "Sort"
    setTimeout(organize, 1000)
}

function organize()
{
    maintext.innerHTML = "Organize"
    setTimeout(locate, 1000)
}

const download = ()=>{
    location.href = "download/Loggr.exe"
}