import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ColumnBody} from './body.component';

describe('ColumnBody', () => {
    let component: ColumnBody;
    let fixture: ComponentFixture<ColumnBody>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ColumnBody]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColumnBody);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
