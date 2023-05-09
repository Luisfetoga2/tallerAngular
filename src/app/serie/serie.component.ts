import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieRequestService } from './serieRequest.service';

@Component({
  selector: 'series-list',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieRequestService: SerieRequestService) { }
  series: Array<Serie> = [];
  avgSeasons: number = 0;

  getSeries(): void {
    this.serieRequestService.getSeries().subscribe(series => this.series = series);
  }

  getAvgSeasons(): void {
    this.serieRequestService.getSeries().subscribe(series => {
      for (let serie of series) {
        this.avgSeasons += serie.seasons;
      }
      this.avgSeasons /= series.length;
    });

  }

  ngOnInit() {
    this.getSeries();
    this.getAvgSeasons();
  }

}