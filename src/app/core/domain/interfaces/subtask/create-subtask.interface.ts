//*------------------------------------------
//* Imports
//*------------------------------------------

import { SubtaskInterface } from "./subtask.interface";


//*------------------------------------------
//* Interface
//*------------------------------------------
export interface CreateSubtaskInterface extends SubtaskInterface {
  str_subtask_title: string;
  bln_subtask_completed: boolean;
  int_task_id: number;
}
