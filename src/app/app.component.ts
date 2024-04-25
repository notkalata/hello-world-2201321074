import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private openSection: number = 0;
  private closedArrow: string = '&#9658;';
  private openArrow: string = '&#9660;';

  public handleOpenSection(section: number): void {
    if (this.openSection != section) {
      this.openSection = section;
    } else {
      this.openSection = 0;
    }
  }

  public iconForSection(section: number): string {
    return this.isSectionOpen(section) ? this.openArrow : this.closedArrow;
  }

  public isSectionOpen(section: number) {
    return this.openSection == section;
  }
}
