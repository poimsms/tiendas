import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('contenedor') contenedor: ElementRef;

  addApp = false;
  showLocation = false;

  constructor(
    private router: Router,
    public _control: ControlService
  ) {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }
   }

  
  openHome() {
    this.router.navigateByUrl('/home');
    this._control.activarSeccion('home');
    this._control.toggleArrow();
  }


  ngOnInit() {
  }

}
