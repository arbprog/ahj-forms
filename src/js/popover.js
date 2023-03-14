class Popover {
    constructor(elem) {
        this.elem = elem;
    }

    render() {
        const wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML += `
            <div class='popover'>
                <h3>Popover title</h3>
                <div class='popover-body'>And here's some amazing content. It's very engaging. Right?</div>
            </div>
        `
    }
}

export default Popover;