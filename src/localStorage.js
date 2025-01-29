import { projects } from ".";

export function updateLocalStorage(){
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function getLatestLocalStorage(){
    return JSON.parse(localStorage.getItem("projects"));
}