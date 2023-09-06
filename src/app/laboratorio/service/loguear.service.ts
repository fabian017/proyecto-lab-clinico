import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoguearService {

  private organizacionIdSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setOrganizacionId(id: boolean) {
    this.organizacionIdSubject.next(id);
  }

  getOrganizacionId(): Observable<boolean> {
    return this.organizacionIdSubject.asObservable();
  }

  constructor() { }
}
