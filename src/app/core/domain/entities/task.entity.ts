//*---------------------------------------------------------------
//* Task Entity
//*---------------------------------------------------------------

import { List } from "./list.entity";
import { Subtask } from "./subtask.entity";
import { User } from "./user.entity";

export class Task {

  constructor(
    int_task_id: number,
    str_task_title: string,
    str_task_description: string,
    dt_task_due_date: Date,
    bl_task_completed: boolean,
    int_task_priority: number,
    dt_task_created_at: Date,
    user: User,
    list: List,
    subtasks: Subtask[]
  ){}

}
