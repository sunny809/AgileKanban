import {Component, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {MessageService} from '../../../common/services';

@Component({
    selector: 'detailsDialog',
    templateUrl: './details.component.html'
})
export class DetailsDialog {

    @ViewChild("content") dialogContent;
    closeResult: string;

    constructor(private messageService: MessageService, private modalService: NgbModal) {

        this.messageService.messageHandler().subscribe(message => {
            if (message["message"] === "opendialog") {
                var taskId = message["data"];

                console.log("Task id :: " + taskId)

                this.modalService.open(this.dialogContent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
                    this.closeResult = `Closed with: ${result}`;
                    console.log("dialog result :: " + this.closeResult)
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                    console.log("dialog result :: " + this.closeResult)
                });
            }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}