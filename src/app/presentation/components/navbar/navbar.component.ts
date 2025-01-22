//*************************************************************************
//* Imports
//*************************************************************************
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { SidebarService, StorageService, UserService } from '../../../application/services';
import { UserInterface } from '../../../core/domain/interfaces';

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
export class NavbarComponent implements OnInit {

  //*************************************************************************
  //* Constructor
  //*************************************************************************
  constructor(
    private elementRef: ElementRef,
    private sidebarService: SidebarService,
    private userService: UserService,
    private storageService: StorageService,
  ) {}


  //*************************************************************************
  //* Lifecycle
  //*************************************************************************

  ngOnInit(): void {

    const userId: number = Number(this.storageService.getSessionItem('ID'));

    if(userId){
      this.userService.getUserDataByID(userId)
      .subscribe({
        next: (userData: UserInterface) => {
          this.userData = userData;
        },
        error: (error: any) => {
          console.error(error);
        }
      })
    }
  }

  //*************************************************************************
  //* Properties
  //*************************************************************************

  isHidden: boolean = false;
  userData: UserInterface | null = null;

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
