import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SmpLoaderService {

  
  getList(){
    return this.http.get<{name: String, lore: String, smpMark: String, members: []}[]>('../../assets/smp.json')
  }

  // @TODO Add an update SMP component

  constructor(
    private http: HttpClient
  ) { 
  }
}
