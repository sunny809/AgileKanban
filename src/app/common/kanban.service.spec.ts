import { TestBed, inject } from '@angular/core/testing';

import { KanbanService } from './common/services';

describe('KanbanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanbanService]
    });
  });

  it('should be created', inject([KanbanService], (service: KanbanService) => {
    expect(service).toBeTruthy();
  }));
});
