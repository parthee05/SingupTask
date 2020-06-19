import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable()
export class ToasterService {
    constructor(
        private toastr: ToastrService
    ) {}
    showSucess(title, message) {
        this.toastr.success(title, message);
    }
    showWarning(title, message) {
        this.toastr.warning(title, message);
    }
    showError(title, message) {
        this.toastr.error (title, message);
    }
    showInfo(title, message) {
        this.toastr.info(title.message);
    }
 }