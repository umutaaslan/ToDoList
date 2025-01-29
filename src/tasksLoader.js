import { projects } from ".";
import { newTaskElement } from "./createNewTaskElement";
import { DOM } from "./DOM"

export function tasksLoader(currentProject, taskID){
    while (DOM.dynamic.firstChild){
        DOM.dynamic.removeChild(DOM.dynamic.firstChild);
    }
    if (projects[currentProject]){
        projects[currentProject].forEach(e => {
            newTaskElement(e.title, e.importance, e.description, e.dueDate, e.taskID);
        });
    }
    
}