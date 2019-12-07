import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() private toggleSidebar = new EventEmitter<void>();
  @Output() private toggleDarkTheme = new EventEmitter<boolean>();

  ngOnInit() {}

  private openSidebar(): void {
    this.toggleSidebar.emit();
  }

  private onChange(checked: boolean): void {
    this.toggleDarkTheme.emit(checked);
  }
}
