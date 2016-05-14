import { Component, OnDestroy } from '@angular/core';
import { OnActivate } from '@angular/router';

import { FeathersService } from '../../feathers';

@Component({
  selector: 'sg-bardetail',
  styles: [
    require('./bardetail.component.scss')
  ],
  template: require('./bardetail.component.html')
})
class BarDetailComponent implements OnDestroy, OnActivate {
  private detailSubscription: any;

  public isLoading: boolean = true;
  public errorMessage: any;
  public bar: any;

  constructor(
    private feathersService: FeathersService
  ) {
    this.detailSubscription = feathersService.detail$.subscribe(
      (details: any) => { this.bar = details; this.isLoading = false; },
      (error: any) => this.errorMessage = error
    );
  }

  public ngOnDestroy(): void {
    this.detailSubscription.unsubscribe();
  }

  public routerOnActivate(curr: any): void {
    const { parameters: { barId } }: any = curr;

    this.getBarDetails(barId);
  }

  private getBarDetails(barId: any): any {
    this.feathersService.getBarDetails(barId);
  }
}

export { BarDetailComponent };
