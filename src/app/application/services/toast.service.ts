//*-----------------------------------------------------------------------------
//* Imports
//*-----------------------------------------------------------------------------
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastInterface } from '../../core/domain/interfaces';

//*-----------------------------------------------------------------------------
//* @Injectable
//*-----------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})

//*-----------------------------------------------------------------------------
//* Service
//*-----------------------------------------------------------------------------
export class ToastService {

  //*---------------------------------------------------------------------------
  //* Private Properties
  //*---------------------------------------------------------------------------
  private ToastsSubjects = new BehaviorSubject<ToastInterface[]>([]);
  toasts$ = this.ToastsSubjects.asObservable();

  //*---------------------------------------------------------------------------
  //* Methods
  //*---------------------------------------------------------------------------

  showToast(type: 'success' | 'error' | 'warning', message: string, duration = 3000): void {
    const currentToasts = this.ToastsSubjects.value;
    const newToast: ToastInterface = { type, message, duration };
    this.ToastsSubjects.next([...currentToasts, newToast]);

    setTimeout(() => {
      this.removeToast(newToast);
    }, duration);
  }

  private removeToast(toast: ToastInterface): void {
    const updatedToasts = this.ToastsSubjects.value.filter((t) => t !== toast);
    this.ToastsSubjects.next(updatedToasts);
  }
}
