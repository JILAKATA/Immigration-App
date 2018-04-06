
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Page1Page } from './page1';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('Page1', () => {
  let de: DebugElement;
  let comp: Page1Page;
  let fixture: ComponentFixture<Page1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Page],
      imports: [
        IonicModule.forRoot(Page1Page)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Page);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <h3> text', () => {
    fixture.detectChanges();
    const h3 = de.nativeElement;
    expect(h3.innerText).toMatch(/ionic/i,
      '<h3> should say something about "Ionic"');
  });

  it('should show the favicon as <img>', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/icon/favicon.ico');
  });
});