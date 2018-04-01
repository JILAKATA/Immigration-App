import { Component } from '@angular/core';

import { ClientPage } from '../client/client';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import { LogOptionsPage} from '../log-options/log-options';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ClientPage;
  tab2Root = ContactPage;

  constructor() {

  }
}
