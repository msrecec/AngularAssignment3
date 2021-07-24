import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  display: boolean = false;
  logItems: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  /**
   * Toggles the paragraph display
   *
   */

  displayParagraph() {
    this.display = !this.display;
    this.logClick();
  }

  /**
   * Logs the button Click event to the logItems array
   *
   */

  logClick() {
    const now = new Date();
    this.logItems.push(
      `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${
        this.logItems.length + 1
      }. log output`
    );
  }
}
