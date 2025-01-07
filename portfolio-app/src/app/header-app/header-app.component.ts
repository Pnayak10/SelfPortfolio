import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { PlanningComponent } from '../planning/planning.component';
import { ServicesComponent } from '../services/services.component';
import { CarrierComponent } from "../carrier/carrier.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'header-app',
  standalone: true,
  imports: [CommonModule, MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, FormsModule, ReactiveFormsModule, ContactMeComponent, PlanningComponent, ServicesComponent, CarrierComponent, AboutComponent,SkillsComponent],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.scss'
})
export class HeaderAppComponent {
  topMate: boolean = false;
  isSticky: boolean = false;
  contactForm: FormGroup | any;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.scrollY >= 70;
    console.log("this.isSticky", this.isSticky,window.scrollY)
  }
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [ Validators.email]],
      phone: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Thank you for your message!');
      this.contactForm.reset();
    }
  }




letsConnect() {
  this.topMate = true;
}

closeMe() {
  console.log('close');
  this.topMate = false;
}
}
 

