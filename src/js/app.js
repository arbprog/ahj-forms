import Button from "./button";
import Popover from "./popover";

const btn = new Button();
const popover = new Popover();

popover.render();
btn.render();
btn.click();
btn.toggle();
