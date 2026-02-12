import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = environment.firebaseDbUrl;


  constructor(private http: HttpClient) {}
  addStudent(data: any) {
  return this.http.post(`${this.baseUrl}/students.json`, data);
}

// getStudents() {
//   return this.http.get(`${this.baseUrl}/students.json`)
//     .pipe(
//       map((res: any) => {
//         const students = [];
//         for (let key in res) {
//           students.push({ id: key, ...res[key] });
//         }
//         return students;
//       })
//     );
// }


updateStudent(id: string, data: any) {
  return this.http.patch(`${this.baseUrl}/students/${id}.json`, data);
}


deleteStudent(id: string) {
  return this.http.delete(`${this.baseUrl}/students/${id}.json`);
}


getStudents() {
  return this.http
    .get<any>(`${this.baseUrl}/students.json`)
    .pipe(
      map(res => {
        if (!res) return [];

        return Object.keys(res).map(key => ({
          id: key,
          ...res[key]
        }));
      })
    );
}


}
