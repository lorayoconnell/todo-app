export class TodoItem {
    title: string;
    duedate: string;

    

    constructor(title: string, duedate: string) {
        this.title = title;
        this.duedate = duedate;
    }

}



// https://blog.angularindepth.com/understanding-enumerations-f02935d4a66c

const Deadline = {
    urgent: 0,
    days: 1,
    weeks: 2
};
Object.freeze(Deadline);



