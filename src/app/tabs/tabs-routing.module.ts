import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },

      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      }, {
        path: 'cliente',
        loadChildren: () => import('../cliente/cliente.module').then(m => m.ClientePageModule)
      },
      {
        path: 'curso',
        loadChildren: () => import('../curso/curso.module').then(m => m.CursoPageModule)
      },
      {
        path: 'inscripcion',
        loadChildren: () => import('../inscripcion/inscripcion.module').then(m => m.InscripcionPageModule)
      },

      {
        path: 'update-cliente',
        loadChildren: () => import('../update-cliente/update-cliente.module').then(m => m.UpdateClientePageModule)
      },
      {
        path: 'update-curso',
        loadChildren: () => import('../update-curso/update-curso.module').then( m => m.UpdateCursoPageModule)
      },
      {
        path: 'update-inscripcion',
        loadChildren: () => import('../update-inscripcion/update-inscripcion.module').then( m => m.UpdateInscripcionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
