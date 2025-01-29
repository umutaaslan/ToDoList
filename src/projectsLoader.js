import { DOM } from "./DOM";
import { projects } from ".";
export function projectsLoader(){
    while(DOM.projectSelect.firstChild){
        DOM.projectSelect.removeChild(DOM.projectSelect.firstChild);
    }
    Object.keys(projects).forEach(item => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", projectTitle);
        newOption.innerText = projectTitle;
        DOM.projectSelect.appendChild(newOption);
        DOM.projectSelect.value = newOption;
    })
}