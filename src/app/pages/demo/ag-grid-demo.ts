import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  _ColumnFilterModule,
  CellClassParams,
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  GridApi,
  GridOptions,
  iconSetQuartzBold,
  NumberFilterModule,
  TextFilterModule,
  themeQuartz,
  ValidationModule,
} from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';
import { concat, delay, map, switchMap, tap, toArray } from 'rxjs';
import { AudioButtonRenderer } from './AudioButtonRenderer';

export const myTheme = themeQuartz.withPart(iconSetQuartzBold).withParams({
  accentColor: '#05AB19',
  backgroundColor: '#06061C',
  foregroundColor: '#B8B8B8',
  headerFontWeight: 900,
  browserColorScheme: 'dark',
  oddRowBackgroundColor: '#19192C',
});

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  cries: { latest: string; legacy: string };
  base_experience: number;
  sprites: { front_default: string };
};

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ClientSideRowModelApiModule,
  _ColumnFilterModule,
  ValidationModule,
  TextFilterModule,
  NumberFilterModule,
]);
@Component({
  selector: 'app-ag-grid-demo',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid-demo.html',
  host: {
    class: 'flex h-screen w-full flex-col',
  },
})
export class AgGridDemoComponent {
  #http = inject(HttpClient);
  #gridApi: GridApi | undefined = undefined;

  gridOptions: GridOptions = {
    loading: true,
    columnDefs: [
      { field: 'id', headerName: 'ID', filter: 'agNumberColumnFilter' },
      {
        field: 'img',
        headerName: 'Image',

        cellRenderer: (params: CellClassParams) =>
          `<img style="object-fit: cover; height: 40px;" src="${params.value}" alt="Image" style="width: 50px; height: 50px;" />`,
      },
      { field: 'name', headerName: 'Name' },
      {
        headerName: 'Types',
        children: [
          { field: 'types.type1', headerName: 'Type 1' },
          { field: 'types.type2', headerName: 'Type 2' },
        ],
      },
      { field: 'weight', headerName: 'Weight', filter: 'agNumberColumnFilter' },
      {
        field: 'cries',
        headerName: 'Cry',
        cellRenderer: AudioButtonRenderer,
      },
      { field: 'base_experience', headerName: 'Base EXP', filter: 'agNumberColumnFilter' },
    ],
    theme: myTheme,
    defaultColDef: {
      floatingFilter: true,
      filter: 'agTextColumnFilter',
    },
  };

  loadData() {
    this.#http
      .get<{ results: { url: string }[] }>('https://pokeapi.co/api/v2/pokemon?limit=' + 30)
      .pipe(
        delay(1000),
        tap(() => this.#gridApi?.setGridOption('loading', false)),
        switchMap((all) =>
          concat(...all.results.map(({ url }) => this.#http.get<Pokemon>(url).pipe(delay(100)))),
        ),
        map((pokemon: Pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          types: { type1: pokemon.types[0].type.name, type2: pokemon.types[1]?.type.name },
          weight: pokemon.weight,
          cries: pokemon.cries.latest,
          base_experience: pokemon.base_experience,
          img: pokemon.sprites.front_default,
        })),
        tap((row) => this.#gridApi?.applyTransaction({ add: [row] })),
        toArray(),
      )
      .subscribe();
  }

  onGridReady(params: any) {
    this.#gridApi = params.api;
    this.loadData();
  }
}
