//*--------------------------------------------------------
//* Imports
//*--------------------------------------------------------

import { UserInterface } from "../user/user.interface";

//*--------------------------------------------------------
//* Interfaces
//*--------------------------------------------------------

export interface LoginResponseInterface {
  user: UserInterface;
  token: string;
}
