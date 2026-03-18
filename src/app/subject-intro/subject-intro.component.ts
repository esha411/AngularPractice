import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubjectServiceService, user } from './subject-service.service';

@Component({
  selector: 'app-subject-intro',
  templateUrl: './subject-intro.component.html',
  styleUrl: './subject-intro.component.scss'
})
export class SubjectIntroComponent implements OnInit {
  users: user[] = [];
  filteredUsers: user[] = [];
  searchControl = new FormControl('');
  favouriteIds: number[] = [];

  constructor(private subjectservice: SubjectServiceService) { }

  ngOnInit(): void {
    this.fetchUserData();

    this.subjectservice.favouriteSubject.subscribe(favs => {
      this.favouriteIds = favs.map(f => f.id);
    });

    this.searchControl.valueChanges.subscribe(keyword => {
      const k = (keyword || '').toLowerCase();
      this.filteredUsers = this.users.filter(u =>
        u.name.toLowerCase().includes(k)
      );
    });
  } 

  fetchUserData() {
    this.subjectservice.getUserData().subscribe((val) => {
      this.users = val;
      this.filteredUsers = val;
    });
  }

  toggleFav(u: user) {
    this.subjectservice.toggleFavourite(u);
  }

  isFav(u: user): boolean {
    return this.favouriteIds.includes(u.id);
  }
}