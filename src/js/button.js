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
  toggle() {
    const btn = document.querySelector('.btn');
    const popover = document.querySelector('.popover');
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();

      const { right, top } = btn.getBoundingClientRect();
      popover.style.top = `${top - btn.offsetHeight - (btn.offsetHeight / 2)}px`;
      popover.style.left = `${right - btn.offsetWidth - (btn.offsetWidth / 2)}px`;

      popover.classList.toggle('active');
    });
  }
}

export default Button;
