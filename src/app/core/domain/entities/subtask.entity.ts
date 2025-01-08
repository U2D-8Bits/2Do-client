//*------------------------------------------------
//* Imports
//*------------------------------------------------

import { Task } from "./task.entity";

//*------------------------------------------------
//* Class
//*------------------------------------------------

export class Subtask {

  constructor(
    int_subtask_id: number,
    str_subtask_title: string,
    bln_subtask_completed: boolean,
    dt_subtask_created_at: Date,
    task: Task
  ){}

}
