let signTab=document.querySelector('#pop1')
let logTab=document.querySelector('#pop2')
let first=document.querySelector('.first')
let last= document.querySelector('.last')
let createBtn=document.querySelector('.createBtn')
let signBtn=document.querySelector('.signBtn')
let notifier=document.querySelector('.notifier')


let quantity= document.querySelector('.quantity')
let totalString=document.querySelector('.totalString')
let pmBtn=document.querySelector('.pmBtn')
let unitPrice=document.querySelector('.unitprice')

let quantity2= document.querySelector('.quantity2')
let totalString2=document.querySelector('.totalString2')
let unitPrice2=document.querySelector('.unitprice2')
let pmBtn2=document.querySelector('.pmBtn2')

let quantity3= document.querySelector('.quantity3')
let totalString3=document.querySelector('.totalString3')
let unitPrice3=document.querySelector('.unitprice3')
let pmBtn3=document.querySelector('.pmBtn3')

signBtn.hidden=true


signTab.addEventListener('click', signup)

function signup(){
    first.hidden=false
    last.hidden=false
    create.hidden=false
    signBtn.hidden=true
    notifier.hidden=false
    signTab.style.background='rgb(117, 89, 18)'
    logTab.style.background='goldenrod'

}

logTab.addEventListener('click', login)

function login(){
    first.hidden=true
    last.hidden=true
    create.hidden=true
    signBtn.hidden=false
    notifier.hidden=true
    logTab.style.background='rgb(117, 89, 18)'
    signTab.style.background='goldenrod'
}


// More Information part

pmBtn.addEventListener('click', calc1)
pmBtn2.addEventListener('click', calc2)
pmBtn3.addEventListener('click', calc3)


// Testing how to use event delegation // Is it worth it to use for 3 modal calculations?
// document.addEventListener('click', e=>{
//     if (e.target.matches('.modal'))
//     console.log("clicked")
// })


function calc1() {

    let amount = parseFloat(unitPrice.textContent.trim());
    let qty = parseInt(quantity.value);

    if (qty.valueOf==0 || isNaN(qty) || qty < 1) {
        totalString.textContent = `Please enter 1 or more units.`;
    } else {
        let total = amount * qty;
        totalString.textContent = `Your total is $${total.toFixed(2)}`;
    }
}
function calc2() {

    let amount = parseFloat(unitPrice2.textContent.trim());
    let qty = parseInt(quantity2.value);

    if (qty.valueOf==0 || isNaN(qty) || qty < 1) {
        totalString2.textContent = `Please enter 1 or more units.`;
    } else {
        let total = amount * qty;
        totalString2.textContent = `Your total is $${total.toFixed(2)}`;
    }
}

function calc3() {

    let amount = parseFloat(unitPrice3.textContent.trim());
    let qty = parseInt(quantity3.value);

    if (qty.valueOf==0 || isNaN(qty) || qty < 1) {
        totalString3.textContent = `Please enter 1 or more units.`;
    } else {
        let total = amount * qty;
        totalString3.textContent = `Your total is $${total.toFixed(2)}`;
    }
}