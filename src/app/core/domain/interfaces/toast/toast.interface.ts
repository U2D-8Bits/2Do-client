//*-----------------------------------------------------------------------------
//* Interface
//*-----------------------------------------------------------------------------
export interface ToastInterface {
  type: 'success' | 'error' | 'warning';
  message: string;
  duration?: number;
}
