/// <reference path="../../typings/globals/jquery/index.d.ts"/>
/// <reference path="../../typings/globals/materialize-css/index.d.ts" />

import { Component } from '@angular/core';
import { ApiService } from './shared';
//import '../style/app.scss';

//declare var $:JQueryStatic;

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngAfterViewInit() {
    //handles modal popup 
    jQuery(".modal-trigger").leanModal();

    //handles side nav
    var num = 1
    var mq = window.matchMedia("(max-width: 600px)")
    jQuery(document).ready(function(){
      if(mq.matches){
        jQuery("#nav-toggle").click(function(){
          num += 1 
          jQuery("#nav-toggle").toggleClass("active");
          if(num%2==0){
            jQuery("#routingLink").width("100%");
            jQuery("#social").show();
            jQuery("#routingPlacement").show()
          } else {
            jQuery("#routingLink").width("0%");
            jQuery("#content").css("marginLeft", "0%");
            jQuery("#social").hide();
            jQuery("#routingPlacement").hide();
          }
        });
      } else{
        jQuery("#nav-toggle").hide();
        jQuery("#content").css("margin-left", "20%");
        jQuery("#routingLink").width("20%");
      }
    });

    }
  }
  
