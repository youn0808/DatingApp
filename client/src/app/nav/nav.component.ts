import { AccountService } from './../_services/account.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,NgIf,BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model:any = {};

  login(loginForm:NgForm){

    if(loginForm.form.invalid) return;

    this.accountService.login(this.model).subscribe({
      next:res =>{
        console.log(res);
      },
      error:error =>console.log(error)
    })
    this.accountService.login(this.model);
    loginForm.reset();
  }

  logout(){
    this.accountService.logout();
  }
}
