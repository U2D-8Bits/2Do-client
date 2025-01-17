//*-------------------------------------------------------------------
//* Imports
//*-------------------------------------------------------------------

import { List } from "./list.entity";
import { Task } from "./task.entity";

//*-------------------------------------------------------------------
//* Class Definition
//*-------------------------------------------------------------------

export class User {
  constructor(
    int_user_id: number,
    str_user_username: string,
    str_user_email: string,
    str_user_password: string,
    str_user_password_confirm: string,
    str_user_profile_picture: string,
    dt_user_created_at: Date,
    lists: List[],
    tasks: Task[]
  ){}
}
