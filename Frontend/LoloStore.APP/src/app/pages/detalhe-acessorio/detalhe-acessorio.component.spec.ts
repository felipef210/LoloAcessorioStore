import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAcessorioComponent } from './detalhe-acessorio.component';

describe('DetalheAcessorioComponent', () => {
  let component: DetalheAcessorioComponent;
  let fixture: ComponentFixture<DetalheAcessorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheAcessorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheAcessorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
