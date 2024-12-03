import { NgFor } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService);

  @Output() cancelRegister = new EventEmitter();
  model:any ={};

  register(){
    this.accountService.register(this.model).subscribe({
      next:response =>{
        console.log(response);
      },
      error:error=>console.log(error)
    })
  }

  cancel(){
    this.cancelRegister.emit(false)
  }
}
