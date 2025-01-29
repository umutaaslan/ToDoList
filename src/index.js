import "./style.css";
import { buttonFunctionality } from "./buttonFunctionality";
import { updateLocalStorage, getLatestLocalStorage } from "./localStorage";
import { addEventListeners } from "./buttonFunc";
import { tasksLoader } from "./tasksLoader";
import { projectsLoader } from "./projectsLoader";

console.log(getLatestLocalStorage())

export const projects = (getLatestLocalStorage()) ? getLatestLocalStorage() : {};
tasksLoader()



buttonFunctionality.addProject("project1");
tasksLoader(Object.keys(projects).shift());
// projectsLoader();

// buttonFunctionality.createTask("a", "low", "b", "2025");
// buttonFunctionality.createTask("afsa", "lowfsa", "bfa", "2025");
// buttonFunctionality.addProject("project2");
// buttonFunctionality.createTask("p2", "high", "bdgs", "2020");
// buttonFunctionality.switchProject("project1");
// buttonFunctionality.deleteProject("project1");
// buttonFunctionality.deleteTask(1)
// buttonFunctionality.editTask(0, "k", "k", "gds", "20453")

//update due dates every time page loaded