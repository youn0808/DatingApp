import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpServiceService } from './http-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Dating App';
  // http = inject(HttpClient);

  users:any;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next:(response)=> {
        this.users = response
      },
      error:(error)=>{console.log(error)},
      complete:()=>{console.log('Request has completed');
      }
    });
  }

}
