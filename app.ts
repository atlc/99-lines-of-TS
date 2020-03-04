const friends:Array<string> = ['Melissa', 'Zach', 'Shay', 'Jessi', 'Uri'];
const LOC:string = 'lines of code';
const ITF:string = `${LOC} in the file`;
const SOO:string = 'strikes one out, clears it all out';

friends.forEach(friend => {
    let lines:number = 99;

    while (lines > 1) {
        console.log(`${lines} ${ITF}, ${lines} ${LOC}; ${friend} ${SOO}, ${--lines} ${ITF}.`);
    }
    console.log(`1 line of code in the file, 1 line of code; ${friend} ${SOO}, no more lines of code in the file!`);
});

window.addEventListener('DOMContentLoaded', function () {
    document.body.style.backgroundColor = '#c89666';
    document.getElementsByTagName('h1')[0].setAttribute('style', 'color: #12343b; text-align: center; box-shadow: 10px 10px 6px 8px #12343b; margin-bottom: 35px;')
    document.getElementsByClassName('friend')[0].setAttribute('style', 'background-color: slategray;');
    document.querySelector('div.friend > h3').setAttribute('style', 'text-transform: uppercase;');
});