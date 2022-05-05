import { Component, OnInit } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  post: any[] = [];

  constructor(private queriesService: QueriesService) {}

  ngOnInit(): void {
    this.queriesService.getData().subscribe((res) => {
      this.post = Object.values(res);
    });
  }
}
