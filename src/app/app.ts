import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Carousel } from "./components/carousel/carousel";
import { Categories } from "./components/categories/categories";
import { Footer } from "./components/footer/footer";
import { Body } from "./components/body/body";
import { Directives } from './components/directives/directives';

@Component({
  selector: 'apps-root',
  imports: [RouterOutlet, Carousel, Categories, Footer, Navbar, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practise');
}
