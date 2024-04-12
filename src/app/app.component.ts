import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular_formularz';

  header = "";
  list = "";
  date = "";
  prio = "";
  person = "";

  lists = [] as any[]

  onSubmit () {
    const newList = {
      header: this.header,
      list: this.list.split("\n"),
      date: this.date,
      prio: this.prio,
      person: this.person
    }

    this.lists.push(newList)

    this.header = "";
    this.list = "";
    this.date = "";
    this.prio = "";
    this.person = "";
  }
}