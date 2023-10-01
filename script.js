// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const input = document.querySelector('#from');
const span = input.nextElementSibling;
input.addEventListener("input", (e) => {
    span.textContent = input.value
})

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btn = document.querySelector('.messageBtn');
btn.addEventListener('click', (e) => {
    btn.classList.add('animate_animated', 'animate_fadeInLeftBig');
    btn.style.visibility = 'visible'
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const allInput = document.querySelectorAll('.form-control');
const form =  document.querySelector('form');

form.addEventListener('submit', (el) => {
    allInput.forEach((e) => {
        if (!e.value) {
            el.preventDefault();
            e.classList.add('error');
            e.style.borderColor = 'red';
        } else {
            e.classList.remove('error');
            e.style.border = '';
        }
    })
})
