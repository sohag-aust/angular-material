import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './components/badges/badges.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { HomeComponent } from './components/home/home.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabComponent } from './components/tab/tab.component';
import { TypographyComponent } from './components/typography/typography.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mat-button', component: ButtonComponent},
  {path: 'mat-typography', component: TypographyComponent},
  {path: 'mat-buttonToggle', component: ButtonToggleComponent},
  {path: 'mat-icon', component: IconComponent},
  {path: 'mat-badges', component: BadgesComponent},
  {path: 'mat-progressSpinner', component: ProgressSpinnerComponent},
  {path: 'mat-navbar', component: NavbarComponent},
  {path: 'mat-sidenav', component: SidenavComponent},
  {path: 'mat-menu', component: MenuComponent},
  {path: 'mat-list', component: ListComponent},
  {path: 'mat-gridList', component: GridListComponent},
  {path: 'mat-expansionPanel', component: ExpansionPanelComponent},
  {path: 'mat-card', component: CardComponent},
  {path: 'mat-tab', component: TabComponent},
  {path: 'mat-stepper', component: StepperComponent},
  {path: 'mat-input', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent, ButtonComponent, TypographyComponent, ButtonToggleComponent,
  IconComponent, BadgesComponent, ProgressSpinnerComponent, NavbarComponent,
  SidenavComponent, MenuComponent, ListComponent, GridListComponent,
  ExpansionPanelComponent, CardComponent, TabComponent, StepperComponent,
  InputComponent
];
