//*-------------------------------------------------------------------
//* Imports
//*-------------------------------------------------------------------

import { List } from './list.entity';
import { Task } from './task.entity';
import { environment } from '../../../../environments/environment';

//*-------------------------------------------------------------------
//* Constants
//*-------------------------------------------------------------------

const baseUrl = environment.baseUrl;

//*-------------------------------------------------------------------
//* Class Definition
//*-------------------------------------------------------------------

export class User {
  constructor(
    public int_user_id: number,
    public str_user_username: string,
    public str_user_email: string,
    public str_user_password: string,
    public str_user_password_confirm: string,
    public dt_user_created_at: Date,
    public str_user_profile_picture?: string,
    public lists?: List[],
    public tasks?: Task[]
  ) {}

  getImageUrl() {
    if (!this.str_user_profile_picture) {
      return `${baseUrl}/upload/default-profile.png`;
    } else if (this.str_user_profile_picture.includes('https')) {
      return this.str_user_profile_picture;
    } else if (this.str_user_profile_picture) {
      return `${baseUrl}/upload/profile_pictures/${this.str_user_profile_picture}`;
    }else{
      return `${baseUrl}/upload/default-profile.png`;
    }
  }
}
