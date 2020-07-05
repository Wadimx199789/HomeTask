function Numb(min){
    if(min>0 && min<15){
        return alert("Число находится в первой четверти часа");

    }
    else if (min>=15 && min <30){
       return console.log("число находится во второй четверти часа");

    }
    else if(min>=30 && min<45){
        return console.log("число находится в третей четверти часа");

    }
    else if(min>=45 && min<=59){
        return console.log("число в последней четверти");
    }
}
Numb(43);
function Week(lang){
    let arr;
    if(lang==='ru'){
        arr=['понедельник','вторник','среда']
    }
    else if(lang==='en'){
        arr=["monday","tuesday","wednesday"];
    }
    return arr;
    let arr2;
    switch(lang){
        case 'ru': arr2=['понедельник','вторник','среда'];
        break;
        case 'en': arr2=["monday","tuesday","wednesday"];
        break;
    }
    return arr2;
    console.log(arr);
    console.log(arr2);
}
Week(43);
function Str(str){
    if(str[0].toUpperCase()=="A"){
        console.log('yes')
    }
    else console.log('no');
}
Str('absbs');