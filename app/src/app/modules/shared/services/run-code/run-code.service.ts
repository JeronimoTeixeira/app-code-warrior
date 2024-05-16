import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunCodeService {
  private runCodeSubject = new Subject();
  runCodeObs = this.runCodeSubject.asObservable();
  constructor() { }

  emitRunCode(){
    this.runCodeSubject.next(undefined);
  }
}
