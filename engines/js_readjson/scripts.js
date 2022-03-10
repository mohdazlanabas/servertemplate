const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const output = document.querySelector('.output') ;
const url = 'datafile.json';

btn1.onclick = ()=>{
    output.innerHTML = "Connecting....";
    getData();
}

btn2.onclick = ()=> {output.innerHTML = 'Cleared!'; }

function getData(){
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        outData(data.userdata);
})
}

function outData(val) {
    console.log(val);
    let html = '';
    val.forEach((ele, ind) => {
        console.log(ele);
        html += `<div> ${ind+1}. ${ele.first} ${ele.last} (${ele.id}) </div>`
    })
    html += `<small>${JSON.stringify(val)}</small>`;
    output.innetHTML = html;
}