import { Component } from '@angular/core';

/**
 * Generated class for the ComponentsUsertableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-usertable',
  templateUrl: 'components-usertable.html'
})
export class ComponentsUsertableComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentsUsertableComponent Component');
    this.text = 'Hello World';
  }

}
