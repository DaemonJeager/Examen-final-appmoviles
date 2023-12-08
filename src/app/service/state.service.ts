import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
 
  nombreUsuario:BehaviorSubject<string> = new BehaviorSubject('');

  get getNombreUsuario() {
   return this.nombreUsuario.asObservable();
  }

  set setNombreUsuario(nombreUsuario:string){
     this.nombreUsuario.next(nombreUsuario);
  }


  
  //otro si
  private isLogged:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false)
  getisLogged(){
    return this.isLogged.asObservable();
  }

  set setisLoggin(dataisLogged:any){
    this.isLogged.next(dataisLogged);
  }
  

  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() {}

  userIsLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  setUserIsLogged(isLogged: boolean): void {
    this.isLoggedSubject.next(isLogged);
  }



}
