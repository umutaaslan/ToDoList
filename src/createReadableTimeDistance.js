import { formatDistanceToNow, isBefore } from "date-fns";

export function createReadableTimeDistance(dueDate){
    const timeDistance = formatDistanceToNow(dueDate);
    if (isBefore(new Date(), dueDate)){
        return `You have ${timeDistance}`;
    }
    else {
        return `You're ${timeDistance} late`;
    }
}