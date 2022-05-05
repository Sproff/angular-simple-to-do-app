import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css'],
})
export class DeleteDataComponent implements OnInit {
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
    this.queriesService.deleteData().subscribe((res) => {
      this.post = res;
    });
  }
}
