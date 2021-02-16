import { TestBed } from '@angular/core/testing';

import { HeroFeedService } from './hero-feed.service';

describe('HeroFeedService', () => {
  let service: HeroFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
