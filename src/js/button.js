class Button {
  constructor(elem) {
    this.elem = elem;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML += `
            <a class='btn'>
                Click to toggle popover
            </a>
        `;
  }

  // eslint-disable-next-line class-methods-use-this
  click() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', (evt) => {
      // evt.preventDefault();
      const x = evt.target.clientX - evt.target.offsetTop;
      const y = evt.clientY - evt.target.offsetLeft;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      btn.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  toggle() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();

      const popover = document.querySelector('.popover');
      popover.classList.toggle('active');
    });
  }
}

export default Button;
