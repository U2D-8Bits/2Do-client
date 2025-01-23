//*-----------------------------------------------------------------------------
//* Imports
//*-----------------------------------------------------------------------------
import { Component, OnInit } from '@angular/core';
import { AuthService, SidebarService } from '../../../application/services';

//*-----------------------------------------------------------------------------
//* @Component
//*-----------------------------------------------------------------------------
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})

//*-----------------------------------------------------------------------------
//* Class
//*-----------------------------------------------------------------------------
export class AsideComponent implements OnInit{

  //*---------------------------------------------------------------------------
  //* Constructor
  //*---------------------------------------------------------------------------
  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
  ){}

  //*---------------------------------------------------------------------------
  //* Lifecycle Hooks
  //*---------------------------------------------------------------------------

  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe((open: boolean) => {
      this.isSidebarOpen = open;
    });
  }


  //*---------------------------------------------------------------------------
  //* Properties
  //*---------------------------------------------------------------------------
  menuStates: Record<string, boolean> = {
    pages: false,
    controllers: false,
  }

  isSidebarOpen: boolean = false;

  //*---------------------------------------------------------------------------
  //* Methods
  //*---------------------------------------------------------------------------
  toggleMenu(menu: string): void {
    this.menuStates[menu] = !this.menuStates[menu];
  }


  //? Logout function
  logout(): void {
    this.authService.logout();
  }
}
