//*************************************************************************
//* Imports
//*************************************************************************
import { Component, HostListener, ElementRef } from '@angular/core';

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
  constructor(private elementRef: ElementRef) {}


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
