import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the component', () => {
            expect(component).toBeTruthy();
        });

        it('should have a default title "Component Angular Test"', () => {
            expect(component.title).toBe('Component Angular Test');
        });

        it('should change the title when changeTitle is called', () => {
            const newTitle = 'New Component Title';
            component.changeTitle(newTitle);
            expect(component.title).toBe(newTitle);
        });
    });
});
