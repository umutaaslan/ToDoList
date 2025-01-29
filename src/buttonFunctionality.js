import { DOM } from "./DOM";
import { projects } from ".";
import { newTaskElement } from "./createNewTaskElement";
import { updateLocalStorage, getLatestLocalStorage } from "./localStorage";
import { tasksLoader } from "./tasksLoader";
import { projectsLoader } from "./projectsLoader";

export const buttonFunctionality = (function(){
    let currentProject = "project1";
    const addProject = function(projectTitle){
        if (!(projects[projectTitle])){
            projects[projectTitle] = [];
            currentProject = projectTitle;
            tasksLoader(currentProject);
            projectsLoader();
            updateLocalStorage();
        }
    }

    const switchProject = function(project){
        if (currentProject !== project){
            currentProject = project;
        }
        tasksLoader(currentProject);
        updateLocalStorage();
    }

    const deleteProject = function(project){
        delete projects[project];
        currentProject = Object.keys(projects).shift();
        tasksLoader(currentProject);
        projectsLoader();
        updateLocalStorage();
    }

    const createTask = function(title, importance, description, dueDate){
        let locationToBeAdded = (projects[currentProject].length === 0) ? 0 : projects[currentProject].at(-1).taskID + 1;
        projects[currentProject][locationToBeAdded] = {
            title: title,
            importance: importance,
            description: description,
            dueDate: dueDate,
            taskID: locationToBeAdded
        }
        tasksLoader(currentProject);
        updateLocalStorage();
    }

    const deleteTask = function(taskID){
       projects[currentProject].forEach(task => {
        if (task.taskID == taskID) projects[currentProject].splice(projects[currentProject].indexOf(task), 1);
       })
       tasksLoader(currentProject);
       updateLocalStorage();
    }

    const editTask = function(taskID, title, importance, description, dueDate){
        let task;
        projects[currentProject].forEach(t => {
            if (t.taskID == taskID) {task = t};
        })
        task.title = title;
        task.importance = importance;
        task.description = description;
        task.dueDate = dueDate;

        tasksLoader(currentProject);
        updateLocalStorage();
    }
    return {addProject, createTask, deleteTask, switchProject, deleteProject, editTask};
}());



// Assumed user won't enter 2 exact same tasks