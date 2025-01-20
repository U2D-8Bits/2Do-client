//*************************************************************************
//* Imports
//*************************************************************************
import { Component, HostListener, ElementRef } from '@angular/core';
import { SidebarService } from '../../../application/services';

//*************************************************************************
//* Component
//*************************************************************************
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

//*************************************************************************
//* Class
//*************************************************************************
export class NavbarComponent {

  //*************************************************************************
  //* Constructor
  //*************************************************************************
  constructor(
    private elementRef: ElementRef,
    private sidebarService: SidebarService,
  ) {}


  //*************************************************************************
  //* Properties
  //*************************************************************************

  isHidden: boolean = false;

  //*************************************************************************
  //* Mehtods
  //*************************************************************************

  //? Methodo para mostrar el dropdown
  toggleDropDown() {
    this.isHidden = !this.isHidden;
  }


  //? Method to show and hide Sidebar
  toggleSidebar():void{
    this.sidebarService.toggleSidebar();
  }

  //*************************************************************************
  //* Listener
  //*************************************************************************

  //? Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Check if the clicked element is inside the dropdown or the button
    if (
      !this.elementRef.nativeElement.contains(target) &&
      this.isHidden
    ) {
      this.isHidden = false;
    }
  }
}
