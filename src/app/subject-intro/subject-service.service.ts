import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface user {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  favouriteSubject = new BehaviorSubject<user[]>([]);

  constructor(private http: HttpClient) { }

  getUserData(): Observable<user[]> {
    return this.http.get<user[]>(this.url);
  }

  toggleFavourite(u: user) {
    const current = this.favouriteSubject.getValue();
    const exists = current.find(f => f.id === u.id);

    if (exists) {
      this.favouriteSubject.next(current.filter(f => f.id !== u.id));
    } else {
      this.favouriteSubject.next([...current, u]);
    }
  }
}