import { Component } from '@angular/core';
import { UiModule } from "../../../modules/ui/ui.module";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {


  onClick(){
    console.log('Login button clicked');
  }

}
