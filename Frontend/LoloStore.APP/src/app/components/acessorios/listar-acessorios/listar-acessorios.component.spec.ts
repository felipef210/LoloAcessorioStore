import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAcessoriosComponent } from './listar-acessorios.component';

describe('ListarAcessoriosComponent', () => {
  let component: ListarAcessoriosComponent;
  let fixture: ComponentFixture<ListarAcessoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAcessoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
