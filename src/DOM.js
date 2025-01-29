export const DOM = (function(){
    const deleteButton = document.querySelector(".deleteButton");
    const appendButton = document.querySelector(".appendButton");
    const addProjectButton = document.querySelector(".addProject");
    const title = document.querySelector("#title");
    const importance = document.querySelector("#importance");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const dynamic = document.querySelector("#dynamic");
    const modal = document.querySelector(".add-project-modal");
    const addProjectInput = document.querySelector("#addProjectInput")
    const addProjectSubmit = document.querySelector(".addProjectSubmit")
    const projectSelect = document.querySelector("#project");
    return {appendButton, addProjectButton, title, importance, description, dueDate, dynamic, deleteButton, modal, addProjectInput, addProjectSubmit, projectSelect};
}())