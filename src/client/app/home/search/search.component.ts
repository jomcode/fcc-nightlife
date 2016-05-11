import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'sg-search',
  styles: [
    require('./search.component.scss')
  ],
  template: require('./search.component.html')
})
class SearchComponent implements OnInit {
  @Output() public submitHandler: any = new EventEmitter();
  @ViewChild('searchForm') public searchForm: any;

  public ngOnInit(): void {
    //
  }

  public onSubmit(d: any): any {
    this.submitHandler.emit({
      value: d.queryInput,
      isValid: this.searchForm.form.valid
    });
  }
}

export { SearchComponent };
