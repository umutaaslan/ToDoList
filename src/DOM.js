export const DOM = (function(){
    const deleteButton = document.querySelector(".deleteButton");
    const appendButton = document.querySelector(".appendButton");
    const addProjectButton = document.querySelector(".addProject");
    const deleteProjectButton = document.querySelector(".deleteProject");
    const title = document.querySelector("#title");
    const importance = document.querySelector("#importance");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const dynamic = document.querySelector("#dynamic");
    const modal = document.querySelector(".add-project-modal");
    const addProjectInput = document.querySelector("#addProjectInput")
    const addProjectSubmit = document.querySelector(".addProjectSubmit")
    const projectSelect = document.querySelector("#project");
    const deleteProjectInput = document.querySelector("#deleteProjectInput");
    const deleteProjectSubmit = document.querySelector(".deleteProjectSubmit");
    const deleteProjectModal = document.querySelector(".delete-project-modal");


    return {appendButton, addProjectButton, deleteProjectButton, title, importance,
        description, dueDate, dynamic, deleteButton, modal, addProjectInput,
        addProjectSubmit, projectSelect, deleteProjectInput , deleteProjectSubmit, deleteProjectModal};
}())