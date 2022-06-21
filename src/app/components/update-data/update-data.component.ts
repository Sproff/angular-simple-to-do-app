import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueriesService, TaskProps } from 'src/app/services/queries.service';
import { ToastNotificationService } from './../../services/toast-notification.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss'],
})
export class UpdateDataComponent implements OnInit {
  post: TaskProps[] = [];
  populateTasks: TaskProps[] = [];
  id: any;
  title: string = '';
  body: string = '';

  @Output() btnClick = new EventEmitter();
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private activatedRoute: ActivatedRoute,
    private queriesService: QueriesService,
    private toastNotificationService: ToastNotificationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getUrlParam();
  }

  getUrlParam() {
    this.activatedRoute.params.subscribe((params: { [x: string]: any }) => {
      let paramId = params['id'];

      const url = `${this.baseUrl}/posts/${paramId}`;
      this.http.get<TaskProps>(url).subscribe((data) => {
        this.post.push(data);
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
      });
    });
  }

  onUpdate() {
    const updateTask = {
      id: this.id,
      title: this.title,
      body: this.body,
    };

    this.btnClick.emit(updateTask);
    this.queriesService.updateData(updateTask).subscribe({
      next: (data) => {
        this.populateTasks = [...this.post];
        // console.log(this.populateTasks);

        this.populateTasks.splice(
          this.post.findIndex((x) => x.id === data.id),
          1,
          data
        );
        console.log(data);
        console.log(this.populateTasks);
        this.toastNotificationService.renderSuccessToast(
          'Task updated successfully!'
        );
      },
      error: () =>
        this.toastNotificationService.renderErrorToast(
          'Sorry, an error occured. Try again later!'
        ),
    });
  }
}
