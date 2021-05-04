import { Component } from '@angular/core';

@Component({
  selector: 'portal-root',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {

  count: number = 0;

  increase() {
    this.count++;
  }
}
