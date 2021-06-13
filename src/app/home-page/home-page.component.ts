import { Component, OnInit } from '@angular/core';
import { SmpLoaderService } from "../smp-loader.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private smpLoader: SmpLoaderService) { }

  smpList = this.smpLoader.getList()

  ngOnInit(): void {
  }

}
