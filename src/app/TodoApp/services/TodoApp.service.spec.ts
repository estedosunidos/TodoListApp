/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoAppService } from './TodoApp.service';

describe('Service: TodoApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoAppService]
    });
  });

  it('should ...', inject([TodoAppService], (service: TodoAppService) => {
    expect(service).toBeTruthy();
  }));
});
