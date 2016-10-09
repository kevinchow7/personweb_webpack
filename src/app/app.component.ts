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

    //modification of iframe

    // jQuery('iframe').load(function() {
    //   jQuery('iframe').contents().find("head")
    //   .append(jQuery("<style type='text/css'> .ss-form-container{box-shadow:none;}"));
    // })

    //handles side nav
    var num = 1
    var mq = window.matchMedia("(max-width: 600px)")
    jQuery(document).ready(function(){
      jQuery("#nav-toggle").click(function(){
        num += 1 
        jQuery("#nav-toggle").toggleClass("active");
        if(num%2==0){
          if(mq.matches){
            jQuery("#routingLink").width("100%");
            jQuery("#social").show();
            jQuery("#routingPlacement").show()
            // jQuery("#routingLink").css("width", "100%");
            //jQuery("#content").css("marginLeft", "50%");
          } else {
            jQuery("#routingLink").width("15%");
            jQuery("#content").css("marginLeft", "15%");
            jQuery("#social").show();
            jQuery("#routingPlacement").show()
          }
        }
        else{
          jQuery("#routingLink").width("0%");
          jQuery("#content").css("marginLeft", "0%");
          jQuery("#social").hide();
          jQuery("#routingPlacement").hide();

        }
      });

    });

    }
  }
  
