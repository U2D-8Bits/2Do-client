//*-----------------------------------------------
//* Imports
//*-----------------------------------------------

import { TaskInterface } from "../task/task.interface";
import { UserInterface } from "../user/user.interface";

//*-----------------------------------------------
//* Interfaces
//*-----------------------------------------------

export interface ListInterface {

  int_list_id: number;
  str_list_name: string;
  dt_list_created_at: Date;
  user: UserInterface;
  tasks: TaskInterface[];
}
