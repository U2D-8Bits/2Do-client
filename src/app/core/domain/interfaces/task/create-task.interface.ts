//*-------------------------------------------
//* Imports
//*-------------------------------------------

import { TaskInterface } from "./task.interface";

//*-------------------------------------------
//* Interfaces
//*-------------------------------------------

export interface CreateTaskInterface extends TaskInterface {
  str_task_title: string;
  str_task_description: string;
  dt_task_due_date: Date;
  bl_task_completed: boolean;
  int_task_priority: number;
  int_user_id: number;
  int_list_id?: number;
}
