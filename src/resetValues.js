import { DOM } from "./DOM";

export function resetValues(){
    DOM.title.value =  "";
    DOM.importance.value = "high";
    DOM.description.value = "";
    DOM.dueDate.value = "";
}