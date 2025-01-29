import { DOM } from "./DOM";
import { projects } from ".";
export function projectsLoader(){
    while(DOM.projectSelect.firstChild){
        DOM.projectSelect.removeChild(DOM.projectSelect.firstChild);
    }
    Object.keys(projects).forEach(item => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", item);
        newOption.innerText = item;
        DOM.projectSelect.appendChild(newOption);
        DOM.projectSelect.value = item;
    })
}