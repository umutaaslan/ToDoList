import { buttonFunctionality } from "./buttonFunctionality";
import { DOM } from "./DOM";
import { resetValues } from "./resetValues";
import { dynamicEdit } from "./dynamicEdit";

export function addEventListeners(){
    DOM.appendButton.addEventListener("click", e => {
        let title = DOM.title.value;
        let importance = DOM.importance.value;
        let description = DOM.description.value;
        let dueDate = DOM.dueDate.value;

       buttonFunctionality.createTask(title, importance, description, dueDate);

       resetValues();
    })

    document.addEventListener("click", e => {
        const deleteButton = e.target.closest(".deleteButton");
        if (deleteButton){
            buttonFunctionality.deleteTask(deleteButton.getAttribute("taskid"));
        }
    })

    document.addEventListener("click", e => {
        const editButton = e.target.closest(".editButton");
        if (editButton){
            if (editButton.getAttribute("editOrSubmit") == "edit"){
                //edit
                DOM.title.value =  editButton.parentNode.children[1].innerText;
                DOM.importance.value = editButton.parentNode.children[2].innerText;
                DOM.description.value = editButton.parentNode.children[3].innerText;
                DOM.dueDate.value = editButton.parentNode.children[4].innerText;
                editButton.children[0].style.display = "none";
                editButton.innerText = "SUBMIT";
                editButton.style.backgroundColor = "green";
                editButton.setAttribute("editOrSubmit", "submit")

                DOM.title.addEventListener("input", e => {dynamicEdit(editButton.parentNode.children[1], DOM.title)});
                DOM.importance.addEventListener("input", e => {dynamicEdit(editButton.parentNode.children[2], DOM.importance)});
                DOM.description.addEventListener("input", e => {dynamicEdit(editButton.parentNode.children[3], DOM.description)});
                DOM.dueDate.addEventListener("input", e => {dynamicEdit(editButton.parentNode.children[4], DOM.dueDate)});
            }
            else {
                //submit
                let taskID = editButton.parentNode.children[6].getAttribute("taskid");
                buttonFunctionality.editTask(taskID, DOM.title.value, DOM.importance.value, DOM.description.value, DOM.dueDate.value);
                resetValues();
                editButton.innerText = "";
                editButton.setAttribute("editOrSubmit", "edit")
            } 
        }
    })

    DOM.addProjectButton.addEventListener("click", e => {
        DOM.modal.style.display = "flex";
    })

    document.addEventListener("click", e => {
        if(e.target == DOM.modal){
            DOM.modal.style.display = "none";
        }
    })

    DOM.addProjectSubmit.addEventListener("click", e => {
        const projectTitle = DOM.addProjectInput.value
        buttonFunctionality.addProject(projectTitle);
        DOM.modal.style.display = "none";
        
    })

    DOM.projectSelect
}


addEventListeners();
