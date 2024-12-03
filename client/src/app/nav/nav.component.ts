import { AccountService } from './../_services/account.service';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,NgIf,BsDropdownModule,RouterLink, TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  private router = inject(Router);
  private toaster = inject(ToastrService);
  model:any = {};

  login(loginForm:NgForm){

    if(loginForm.form.invalid) return;

    this.accountService.login(this.model).subscribe({
      next:res =>{
        this.router.navigate(['/members'])
      },
      error:error =>this.toaster.error(error.error)
    })
    this.accountService.login(this.model);
    loginForm.reset();
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')

  }
}
