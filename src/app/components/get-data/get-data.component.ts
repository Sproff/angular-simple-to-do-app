import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { QueriesService, TaskProps } from 'src/app/services/queries.service';
import { ToastNotificationService } from './../../services/toast-notification.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit, OnChanges {
  posts: TaskProps[] = [];
  @Input() task: TaskProps[] = [];
  @Input() updateTask: any;
  @Output() onDeleteTask = new EventEmitter();

  constructor(
    private queriesService: QueriesService,
    private toastNotificationService: ToastNotificationService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'].currentValue) {
      this.posts.push(changes['task'].currentValue);
    }
  }

  ngOnInit(): void {
    this.getTasks();
  }

  columns = [{ name: 'ID' }, { name: 'Title' }];

  getTasks() {
    this.queriesService.getData().subscribe((data) => {
      this.posts = data;
    });
  }

  onDelete(task: TaskProps) {
    this.queriesService.deleteData(task).subscribe({
      next: () => {
        this.posts = this.posts.filter((data) => data.id !== task.id);
        this.toastNotificationService.renderSuccessToast(
          'Task deleted successfully!'
        );
      },
      error: () =>
        this.toastNotificationService.renderErrorToast(
          'Sorry, an error occured. Try again later!'
        ),
    });
  }
}
