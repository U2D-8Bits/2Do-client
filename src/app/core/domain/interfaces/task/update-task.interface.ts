//*-----------------------------------------------
//* Imports
//*-----------------------------------------------


//*-----------------------------------------------
//* Interfaces
//*-----------------------------------------------
export interface UpdateTaskInterface{
  str_task_title?: string;
  str_task_description?: string;
  dt_task_due_date?: Date;
  bl_task_completed?: boolean;
  int_task_priority?: number;
  int_list_id?: number;
}
