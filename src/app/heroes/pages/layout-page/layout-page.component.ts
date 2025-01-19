import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'Listado', icon: 'label', url:'./list'},
    {label: 'Añadir', icon: 'add', url:'./new-hero'},
    {label: 'Buscar', icon: 'search', url:'./search'}
  ]

}
