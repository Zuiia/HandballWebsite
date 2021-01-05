import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      $('.dropright button').on('click', (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!$(this).next('div').hasClass('show')) {
          $(this).next('div').addClass('show');
        } else {
          $(this).next('div').removeClass('show');
        }

      });
  }

}
