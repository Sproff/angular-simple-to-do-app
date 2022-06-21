import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QueriesService, TaskProps } from 'src/app/services/queries.service';
import { ToastNotificationService } from './../../services/toast-notification.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  posts: TaskProps[] = [];
  populateTasks: any;
  title: string = '';
  body: string = '';

  constructor(
    private queriesService: QueriesService,
    private toastNotificationService: ToastNotificationService
  ) { }

  ngOnInit() {}

  onSubmit(task: TaskProps) {
    const newTask = {
      title: this.title,
      body: this.body,
    };
    this.btnClick.emit(newTask);
    this.queriesService.postData(task).subscribe({
      next: (data) => {
        this.populateTasks = data;
        console.log(this.populateTasks)
        this.toastNotificationService.renderSuccessToast(
          'Task submitted successfully!'
        );
      },
      error: () =>
        this.toastNotificationService.renderErrorToast(
          'Sorry, an error occured. Try again later!'
        ),
    });
  }
}
