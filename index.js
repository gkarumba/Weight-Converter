document.getElementById('output').style.visibility = 'hidden';
const gramsConvert = document.getElementById('gRadio');
const kilogramsConvert = document.getElementById('kgRadio');
const ozConvert = document.getElementById('ozRadio');
document.getElementById('lbsInput').addEventListener('input',(e) =>{
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value
    console.log(lbs);
    if (gramsConvert){
        gramsConvert.addEventListener('click',() => {
            document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
        })};
    if (kilogramsConvert){
        kilogramsConvert.addEventListener('click',() => {
            document.getElementById('kgOutput').innerHTML = lbs/2.2046;
        })};
    if (ozConvert){
        ozConvert.addEventListener('click',() => {
            document.getElementById('ozOutput').innerHTML = lbs*16;
        })};
});