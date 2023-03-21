class Popover {
  constructor(elem) {
    this.elem = elem;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const wrapper = document.querySelector('.wrapper');
    const btn = document.querySelector('.btn');
    const { right, top } = btn.getBoundingClientRect();
    if (!document.querySelector('.popover')) {
      const popover = document.createElement('div');
      popover.classList.add('popover');
      popover.innerHTML = `
                        <h3>Popover title</h3>
                        <div class='popover-body'>And here's some amazing content. It's very engaging. Right?</div>
                        `;
      wrapper.insertBefore(popover, btn);
      popover.style.top = `${top - btn.offsetHeight - (btn.offsetHeight / 2)}px`;
      popover.style.left = `${right - btn.offsetWidth - (btn.offsetWidth / 2)}px`;
    } else {
      document.querySelector('.popover').remove();
    }
  }
}

export default Popover;
