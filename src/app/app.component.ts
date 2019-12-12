import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appboticarioyvana';
  ngOnInit() {
    // Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', (e) => {
      if ($(window).width() > 750) {
        let _d = $(e.target).closest('.nav-item'); _d.addClass('show');
        setTimeout(() => {
          _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        }, 1);
      }
    });

    $('#switch').on('click', () => {
      if ($('body').hasClass('dark')) {
        $('body').removeClass('dark');
        $('#switch').removeClass('switched');
      } else {
        $('body').addClass('dark');
        $('#switch').addClass('switched');
      }
    });
  }
}
