import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css'],
})
export class UpdateDataComponent implements OnInit {
  post: any[] = [];

  @Output() btnClick = new EventEmitter();

  constructor(private queriesService: QueriesService) {}

  ngOnInit(): void {
    this.queriesService.getData().subscribe((res) => {
      this.post = Object.values(res);
    });
  }

  onClick() {
    this.btnClick.emit();
    this.queriesService
      .updateData({
        localId: '100',
        id: 100,
        title: 'Updated Angular Sample Request',
        body:
          'This is an UPDATED sample request from an angular project application!',
      })
      .subscribe((res) => {
        this.post = Object.values(res);
      });
  }
}
