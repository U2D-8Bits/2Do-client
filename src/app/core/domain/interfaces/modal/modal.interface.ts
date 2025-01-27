import { TemplateRef } from "@angular/core";

export interface ModalInterface {
  isVisible: boolean;
  title: string;
  content: string | TemplateRef<any>;
}
