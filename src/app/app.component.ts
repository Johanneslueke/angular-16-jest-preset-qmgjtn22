import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IxMenu } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
  template: `
  <ix-basic-navigation>
    <ix-menu [enableToggleTheme]="true"> </ix-menu>
  </ix-basic-navigation>

`,
})
export class AppComponent {}
