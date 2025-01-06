//*---------------------------------------
//* Imports
//*---------------------------------------

import { Task } from "./task.entity";
import { User } from "./user.entity";


//*---------------------------------------
//* Class
//*---------------------------------------

export class List {

  constructor(
    public int_list_id: number,
    public str_list_name: string,
    public dt_list_created_at: Date,
    public user: User,
    public tasks: Task[]
  ){}

}
