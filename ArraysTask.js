const votes=[
    [8885,28186,11581,31849,10027,11495,63721 ],
    [14408,16458,4693,6902,7857,3620,21311],
    [314074,152455,319501,298568,332411,215840,306533],
    [337,636,2868,811,8024,7650,125262],
    [20880,4286,10087,14949,27070,18734,47103],
    [476,6011,8871,8166,20229,10730,52359 ],
    [10430,17192,15485,13167,11162,10726,25895]
];
const regions = ['Grodno','Brest','Gomel','MinskRegion','Mogilev','Vitsebsk','Minsk'];
const candidates= ['Babaryka','Tsapkala','Sasha3%','Kanapatskaya','Cherchan','Dzmitryay','Tsichanouskaya']
function printData(){
    for (i=0;i<regions.length;i++){
       if(i===0) console.log('regions are')
        console.log(regions[i] + ' ' + i);
        if(i===regions.length-1) console.log('\n')
    }
    for (i=0;i<candidates.length;i++){
        if(i===0) console.log('candidates are')
        console.log(candidates[i] + ' ' + i);
    }
}
printData();
const babarykaRes=votes[0];
let grodnoRes = 0;
for (i=0;i<votes.length;i++){
    grodnoRes+=votes[i][0];
}
(function printMultidimensiomnal(){
    for (i=0;i<votes.length;i++){
        const row = votes[i];
        for (j=0;j<row.length;j++){
            console.log(votes[i][j]+'')
        }
        console.log('\n')
    }
})()
console.log('Bararyka got'+ babarykaRes +'votes');
console.log('Grodno collected'+ grodnoRes +' total votes');
//-----------------------------------------------------------------------------------------------
const arrSumCan=[];// array of sums by candidates
const arrOfFiled=[]// array of filed signatures
const arrSumByReg=[]// array of sums by regions

var percent=[45,37.6,97,133,135,140,95];
for(i=0;i<votes.length;i++){
    let sum=0;
    let sumR=0;
    const r=[];
    for(let j=0;j<votes[i].length;j++){
        sumR+=votes[j][i];
        sum+=votes[i][j];
        r.push((votes[i][j]*100)/percent[i]);
    }
    arrSumByReg.push(sumR);
    arrOfFiled.push(r);
    arrSumCan.push(sum);
}

console.log(arrOfFiled);

console.log(arrSumCan);
console.log(arrSumByReg);