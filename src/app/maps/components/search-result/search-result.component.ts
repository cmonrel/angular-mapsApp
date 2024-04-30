import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  public selectedId: string = '';

  private placesService = inject(PlacesService);
  private mapService = inject(MapService)

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  public flyTo(place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.geometry.coordinates;
    this.mapService.flyTo([lng, lat]);
  }

  public getDirections(place: Feature): void {
    if (!this.placesService.userLocation) throw Error('No hay userLocation');

    this.placesService.deletePlaces();

    const start = this.placesService.userLocation;
    const end = place.geometry.coordinates as [number, number];
    this.mapService.getRouteBetweenPoints(start, end);
  }
}
