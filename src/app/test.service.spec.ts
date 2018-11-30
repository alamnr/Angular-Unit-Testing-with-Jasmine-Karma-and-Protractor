import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });
  it('should have add function', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.add).toBeTruthy();

  })

  it('should add correctly',()=>{
    inject([TestService],(service:TestService)=>{
      expect(service.add(1,2)).toEqual(3);
    })
    //const service:TestService = TestBed.get(TestService);
    //expect(service.add1).toBeTruthy();
  })

});
