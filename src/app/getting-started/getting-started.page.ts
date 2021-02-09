import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: [
    './styles/getting-started.page.scss',
    './styles/getting-started.shell.scss',
    './styles/getting-started.responsive.scss'
  ]
})
export class GettingStartedPage implements OnInit, AfterViewInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  @HostBinding('class.last-slide-active') isLastSlide = false;

  gettingStartedForm: FormGroup;

  constructor(
    public menu: MenuController,
    private router: Router
    ) {
    this.gettingStartedForm = new FormGroup({
      language: new FormControl('en'),
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }
  chooseLanguage(){
    localStorage.setItem('language', this.gettingStartedForm.value.language);
    this.router.navigateByUrl('app/categories');
  }
  ngAfterViewInit(): void {
    // // ViewChild is set
    // this.slides.isEnd().then(isEnd => {
    //   this.isLastSlide = isEnd;
    // });

    // // Subscribe to changes
    // this.slides.ionSlideWillChange.subscribe(changes => {
    //   this.slides.isEnd().then(isEnd => {
    //     this.isLastSlide = isEnd;
    //   });
    // });
  }
}
