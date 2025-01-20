//******************************************************************************/
//* Imports
//******************************************************************************/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//******************************************************************************/
//* Injectable
//******************************************************************************/
@Injectable({
  providedIn: 'root'
})

//******************************************************************************/
//* Service
//******************************************************************************/
export class SidebarService {

  //? Sidebar visibility state
  private sidebarOpen = new BehaviorSubject<boolean>(false);

  //? Observable for components to subscribe to
  sidebarOpen$ = this.sidebarOpen.asObservable();

  //? Mehtod to toggle sidebar Visibility
  toggleSidebar():void {
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }

  //? Optional: Method to set sidebar explicitly
  setSidebarState(value: boolean): void {
    this.sidebarOpen.next(value);
  }

}
