import { DOM } from "./DOM";

export function dynamicEdit(itemTask, itemInput){
    itemTask.innerText = itemInput.value;
}