import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  private placesService = inject(PlacesService);
  private mapService = inject(MapService);

  goToMyLocation(): void {
    if (!this.placesService.isUserLocationReady) throw Error('No hay ubicación de usuario');
    if (!this.mapService.isMapReady) throw Error('No se ha inicializado el mapa');

    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
