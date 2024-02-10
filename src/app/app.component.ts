import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  slideNumber = 0;
  isChosenYes = false;

  arr = ["ЦЬОМ", "Я", "тебе", "кохаю",
    'Уля я тебе кохаю <3', 'Will you be my Valentine?']

  addNumber() {
    this.slideNumber++;
  }
}
