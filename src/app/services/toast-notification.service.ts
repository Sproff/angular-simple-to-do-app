import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {
  static renderToast: any;

  constructor( private toastr: ToastrService) { }

  renderSuccessToast(message: string) {
    this.toastr.success(message);
  }

  renderErrorToast(message: string) {
    this.toastr.error(message);
  }
}
