import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'try-http',
  templateUrl: './try-http.component.html',
  styleUrls: ['./try-http.component.css']
})
export class TryHttpComponent implements OnInit {
  http_request$!: Observable<object>;

  constructor (
    private http: HttpClient,
    private swapi: SwapiService
  ) {

  }

  ngOnInit () {
    this.http_request$ = this.swapi.baseQuery();
  }
}
