import { DOM } from "./DOM";
import * as urlEditSvg from "./asset/edit.svg";
import * as urlDeleteSvg from "./asset/delete.svg";
import { projects } from ".";
export function newTaskElement(title, importance, description, dueDate, taskID){
                const div = document.createElement("div");
                const checkbox = document.createElement("input");
                const titleDiv = document.createElement("div");
                const importanceDiv = document.createElement("div");
                const descriptionDiv = document.createElement("div");
                const dueDateDiv = document.createElement("div");
                const editButtonNew = document.createElement("button");
                const deleteButtonNew = document.createElement("button");
                div.classList.add("task");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("name", "checkbox");
                checkbox.setAttribute("id", "checkbox");
                editButtonNew.classList.add("editButton");
                let editImg = document.createElement("img");
                editImg.src = urlEditSvg.default;
                editButtonNew.appendChild(editImg);
                editButtonNew.setAttribute("taskid", taskID);
                deleteButtonNew.classList.add("deleteButton");
                let deleteImg = document.createElement("img");
                deleteImg.src = urlDeleteSvg.default;
                deleteButtonNew.appendChild(deleteImg);
                deleteButtonNew.setAttribute("taskid", taskID);
                titleDiv.innerText = title;
                importanceDiv.innerText = importance;
                descriptionDiv.innerText = description;
                dueDateDiv.innerText = dueDate;
                editButtonNew.setAttribute("editOrSubmit", "edit");

                div.appendChild(checkbox);
                div.appendChild(titleDiv);
                div.appendChild(importanceDiv);
                div.appendChild(descriptionDiv);
                div.appendChild(dueDateDiv);
                div.appendChild(editButtonNew);
                div.appendChild(deleteButtonNew);
                DOM.dynamic.appendChild(div);  
                return { titleDiv, importanceDiv, descriptionDiv, dueDateDiv }
            }