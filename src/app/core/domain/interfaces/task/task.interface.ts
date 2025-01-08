//*------------------------------------------
//* Imports
//*------------------------------------------

import { ListInterface } from "../list/list.interface";
import { SubtaskInterface } from "../subtask/subtask.interface";
import { UserInterface } from "../user/user.interface";

//*------------------------------------------
//* Interfaces
//*------------------------------------------

export interface TaskInterface {
  int_task_id: number;
  str_task_title: string;
  str_task_description: string;
  dt_task_due_date: Date;
  bl_task_completed: boolean;
  int_task_priority: number;
  dt_task_created_at: Date;
  user: UserInterface;
  list: ListInterface;
  subtasks: SubtaskInterface[];
}
