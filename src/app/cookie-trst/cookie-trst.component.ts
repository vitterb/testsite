import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-cookie-trst',
  templateUrl: './cookie-trst.component.html',
  styleUrls: ['./cookie-trst.component.css']
})
export class CookieTrstComponent implements OnInit {

  cookie:string = "KOEKJE Test"
  constructor(private cookieservice:CookieService){

  }
  ngOnInit(): void {
    this.SetCookie()
  }
  SetCookie(){
    this.cookieservice.set("Test","Test", 2);
  }
  ViewCookie(){
    const check:boolean = this.cookieservice.check("Test")
    if(check){
      this.cookie = "KOEKJE 😁"
    }
    else{
      this.cookie="GEEN KOEKJE 😒"
    }
  }
  DelCookie(){
    this.cookieservice.delete("Test")
  }
}
