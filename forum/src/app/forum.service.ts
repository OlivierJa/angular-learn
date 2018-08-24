import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type User = {
  name: String;
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  users: User[];

  constructor(public http: HttpClient) {
  }

  fetchUsers()
  {
    this.http.get<any[]>('http://localhost:8000/api/users')
      .subscribe((r: any[]) => this.users = r);
  }


}

