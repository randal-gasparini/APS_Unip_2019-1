$('document').ready(function(){
    var pElement=document.querySelectorAll('.container p');
    var imgElement=document.querySelectorAll('img')

    for(p of pElement){
        p.setAttribute('class','border');
    }

    for(img of imgElement){
        img.setAttribute('class',img.className +' img-fluid')
    }

    var h1element=document.querySelector('h1');
    h1element.setAttribute('id','firsth1');
});