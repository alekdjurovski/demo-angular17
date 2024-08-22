import { Component } from '@angular/core';
import { FakeApiService } from '../../services/fake-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/api-model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  slides: Product[] = []
  currentSlide = 0;

  constructor(private fakeApiService: FakeApiService) {
    this.loadData();
  }

  loadData() {
    this.fakeApiService.getData().subscribe((response: Product[]) => {
      this.slides = response;
    })

  }

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide < this.slides.length - 1) ? this.currentSlide + 1 : 0;
  }
}
