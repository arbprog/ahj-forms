(()=>{"use strict";const e=new class{constructor(e){this.elem=e}render(){document.querySelector(".wrapper").innerHTML+="\n            <a class='btn'>\n                Click to toggle popover\n            </a>\n        "}toggle(){document.querySelector(".btn").addEventListener("click",(e=>{e.preventDefault(),(new class{constructor(e){this.elem=e}render(){const e=document.querySelector(".wrapper"),t=document.querySelector(".btn"),{right:o,top:n}=t.getBoundingClientRect();if(document.querySelector(".popover"))document.querySelector(".popover").remove();else{const r=document.createElement("div");r.classList.add("popover"),r.innerHTML="\n                        <h3>Popover title</h3>\n                        <div class='popover-body'>And here's some amazing content. It's very engaging. Right?</div>\n                        ",e.insertBefore(r,t),r.style.top=n-t.offsetHeight-t.offsetHeight/2+"px",r.style.left=o-t.offsetWidth-t.offsetWidth/2+"px"}}}).render()}))}};e.render(),e.toggle()})();