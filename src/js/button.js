import Popover from './popover';

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
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      const pop = new Popover();
      pop.render();
    });
  }
}

export default Button;
