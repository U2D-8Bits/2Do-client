//*---------------------------------------------------------
//* Imports
//*---------------------------------------------------------

import { ListInterface } from "../list/list.interface";
import { TaskInterface } from "../task/task.interface";

//*---------------------------------------------------------
//* Interface definition
//*---------------------------------------------------------
export interface UserInterface {
  int_user_id: number;
  str_user_username: string;
  str_user_email: string;
  str_user_password: string;
  str_user_password_confirm: string;
  str_user_profile_picture: string;
  dt_user_created_at: Date;
  lists: ListInterface[];
  tasks: TaskInterface[];
}
