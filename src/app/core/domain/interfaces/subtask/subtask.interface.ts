//*--------------------------------------------
//* Imports
//*--------------------------------------------

import { TaskInterface } from "../task/task.interface";

//*--------------------------------------------
//* Interfaces
//*--------------------------------------------

export interface SubtaskInterface {
  int_subtask_id: number;
  str_subtask_title: string;
  bl_subtask_completed: boolean;
  dt_subtask_created_at: Date;
  task: TaskInterface;
}
