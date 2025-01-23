import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== 'undefined';
  }

  //*-----------------------------------------
  //* Get Item by Local Storage
  //*-----------------------------------------

  getItem(key: string): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return null;
  }

  //*-----------------------------------------
  //* Get Item by Session Storage
  //*-----------------------------------------
  getSessionItem(key: string): string | null {
    if (this.isBrowser) {
      return sessionStorage.getItem(key);
    }
    return null;
  }

  //*-----------------------------------------
  //* Set Item in Local Storage
  //*-----------------------------------------
  setItem(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }

  //*-----------------------------------------
  //* Set item in Session Storage
  //*-----------------------------------------
  setSessionItem(key: string, value: string): void {
    if (this.isBrowser) {
      sessionStorage.setItem(key, value);
    }
  }

  //*-----------------------------------------
  //* Remove Item
  //*-----------------------------------------
  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  //*-----------------------------------------
  //* Remove Session Item
  //*-----------------------------------------
  removeSessionItem(key: string): void {
    if (this.isBrowser) {
      sessionStorage.removeItem(key);
    }
  }
}
