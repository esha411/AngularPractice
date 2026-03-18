import { Component, OnInit } from '@angular/core';
import { SubjectServiceService, user } from '../subject-intro/subject-service.service';

@Component({
  selector: 'app-subject-intro-second',
  templateUrl: './subject-intro-second.component.html',
  styleUrl: './subject-intro-second.component.scss'
})
export class SubjectIntroSecondComponent implements OnInit {
  favouriteUsers: user[] = [];

  constructor(private subjectservice: SubjectServiceService) { }

  ngOnInit(): void {
    this.subjectservice.favouriteSubject.subscribe(favs => {
      this.favouriteUsers = favs;
    });
  }

  removeFromFavs(u: user) {
    this.subjectservice.toggleFavourite(u);
  }
}