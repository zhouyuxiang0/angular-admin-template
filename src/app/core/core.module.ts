import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [SharedModule],
  exports: [
    HeaderComponent,
    SidenavComponent
  ],
  providers: [{
    provide: 'BASE_CONFIG',
    useValue: {
      uri: 'http://localhost:3000'
    }
  }]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    matIconRegist: MatIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载!');
    }
    loadSvgResources(matIconRegist, domSanitizer);
  }
}
