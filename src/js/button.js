class Button {
    constructor(elem) {
        this.elem = elem;
    }

    render() {
        const wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML += `
            <a class='btn'>
                Click to toggle popover
            </a>
        `
    }

    click() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', (evt) => {
            // evt.preventDefault();
            let x = evt.target.clientX - evt.target.offsetTop;
            let y = evt.target.clientY - evt.target.offsetLeft;

            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            btn.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 1000);
        })
    }

    toggle() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', function(evt) {
            evt.preventDefault();

            const popover = document.querySelector('.popover');
            popover.classList.toggle('active');
        })
    }
}

export default Button;