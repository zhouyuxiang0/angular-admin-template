import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() private navClick = new EventEmitter<void>();

  public menu: {url: string, label: string}[] = [
    {
      url: '',
      label: '菜单一'
    }, {
      url: '',
      label: '菜单二'
    }
  ];

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  onNavClick(): void {
    this.navClick.emit();
  }
}
