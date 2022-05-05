import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
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
      .postData({
        localId: '101',
        id: 101,
        title: 'Sample Angular Request',
        updateText:
          'This is a sample request from an angular project application!',
      })
      .subscribe((res) => {
        this.post = Object.values(res);
      });
  }
}
