import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medrepo-text-box',
  templateUrl: './medrepo-text-box.component.html',
  styleUrls: ['./medrepo-text-box.component.css']
})
export class MedrepoTextBoxComponent implements OnInit {

    inputText: string;
    showButton = false;
    theClass = 'form-control';
    // vx-text-input-box properties
    // placeholder
    @Input()
    public medrepoPlaceHolder = '';

    // Box Boarder
    @Input() public hasBorder = false;

    // has extra button
    @Input() public hasButton = false;

    // extra button typ (vx-show-password-button oder vx-clear-text-button)   )
    @Input() public medrepoButton = 'medrepo-clear-text-button';

    // button Typ (password oder text)
    @Input() public textType = 'text';

    @Input() public hasError = false;

    // current text
    @Input() public currentText = '';

    @Output() medrepoText = new EventEmitter<string>();

    constructor(){
    }

    ngOnInit() {
        if (this.currentText && this.currentText.length > 0)
        {
            this.inputText = this.currentText;
        }

        if (this.hasError)
        {
            this.theClass = this.theClass.concat('form-control input-text-error');
        }

        if (this.hasBorder)
        {
            this.theClass = this.theClass.concat(' medrepo-user-information-box-input-box-with-boarder');
        }

        if (!this.hasBorder)
        {
            this.theClass = this.theClass.concat(' medrepo-user-information-box-input-box-no-boarder');
        }
    }

    onTextChange(){
        if (this.hasButton && this.inputText.length > 0){
            this.showButton = true;
        } else {
            this.showButton = false;
        }
        this.medrepoText.emit(this.inputText);
    }

    onButtonClick(){
        // Switch
        if (this.medrepoButton == 'medrepo-clear-text-button') {
            this.inputText = '';
            this.showButton = false;
        } else
        if (this.medrepoButton == 'medrepo-show-password-button') {
            this.textType = 'text';
            this.medrepoButton = 'medrepo-hide-password-button';
        } else
        if (this.medrepoButton == 'medrepo-hide-password-button') {
            this.textType = 'password';
            this.medrepoButton = 'medrepo-show-password-button';
        }
    }
}
