/// <reference path="../../typings/globals/jquery/index.d.ts"/>

import { Component } from '@angular/core';
import { ApiService } from './shared';
import '../style/app.scss';

//declare var $:JQueryStatic;

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngAfterViewInit() {
    var num = 1
    var mq = window.matchMedia("(max-width: 600px)")
    jQuery(document).ready(function(){
      jQuery("#nav-toggle").click(function(){
        num += 1 
        jQuery("#nav-toggle").toggleClass("active");
        if(num%2==0){
          if(mq.matches){
            jQuery("#routingLink").css("width", "100%");
            //jQuery("#content").css("marginLeft", "50%");
          } else {
            jQuery("#routingLink").css("width", "50%");
            jQuery("#content").css("marginLeft", "50%");
          }
        }
        else{
          jQuery("#routingLink").css("width", "0%");
          jQuery("#content").css("marginLeft", "0%");

        }
      });

    });

    }
  }
  
}
