
let level_one = document.getElementById('btn_level_1');
let level_two = document.getElementById('btn_level_2');
let level_three = document.getElementById('btn_level_3');
let level_one_mob = document.getElementById('btn_level_mob_1');
let level_two_mob = document.getElementById('btn_level_mob_2');
let level_three_mob = document.getElementById('btn_level_mob_3');
let slider = document.getElementById('slider')
let level_btn = document.querySelectorAll('btn_level')
let level = document.querySelectorAll('.roadmap')
let inputName = document.getElementById('name');
let inputTel = document.getElementById('tel');
let inputComment = document.getElementById('comment');
let levels_mob = document.getElementById('levels_mob');

// var maskOptions = {
//     mask: '+7(000)000-00-00',
//     lazy: false
// } 
// var mask = new IMask(element, maskOptions);

let send_order = document.getElementById('send_order');

const postMessage = async (event) => {

    event.preventDefault();
    const TOKEN = '6543794835:AAF83bIzXXmm2zMiT7Z5KVj6chvg-bjEzY0';
    const CHAT_ID = '-1002074817787';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const message = `
    Имя: ${inputName.value};
    Телефон: ${inputTel.value};
    Комментарий: ${inputComment.value};
    `
    const response  = await fetch(URI_API, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
        }),
        
    })
    const result = await response.json();
    inputName.value = '';
    inputTel.value = '';
    inputComment.value = '';
    console.log(result)

}

level_two.addEventListener('click', () => {
    slider.style.cssText = 'left: -100%';
    level_two.setAttribute('name', 'Submit');
    level_one.removeAttribute('name')
    level_three.removeAttribute('name')
})

level_one.addEventListener('click', () => {
    slider.style.cssText = 'left: 0%;';
    level_one.setAttribute('name', 'Submit')
    level_three.removeAttribute('name')
    level_two.removeAttribute('name')
})

level_three.addEventListener('click', () => {
    slider.style.cssText = 'left: -200%';
    level_three.setAttribute('name', 'Submit')
    level_one.removeAttribute('name')
    level_two.removeAttribute('name')
})

level_two_mob.addEventListener('click', () => {
    levels_mob.style.cssText = 'top: -100%';
    level_two_mob.setAttribute('name', 'Submit');
    level_one_mob.removeAttribute('name')
    level_three_mob.removeAttribute('name')
})

level_one_mob.addEventListener('click', () => {
    levels_mob.style.cssText = 'top: 0%;';
    level_one_mob.setAttribute('name', 'Submit')
    level_three_mob.removeAttribute('name')
    level_two_mob.removeAttribute('name')
})

level_three_mob.addEventListener('click', () => {
    levels_mob.style.cssText = 'top: -200%';
    level_three_mob.setAttribute('name', 'Submit')
    level_one_mob.removeAttribute('name')
    level_two_mob.removeAttribute('name')
})

send_order.addEventListener('click', postMessage)

