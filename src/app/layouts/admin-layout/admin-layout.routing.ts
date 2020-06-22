import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { DeviceDataComponent } from 'src/app/pages/device-data/device-data.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { RouteGuardService } from 'src/app/service/route-guard.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [RouteGuardService]},
    { path: 'tables',         component: TablesComponent, canActivate: [RouteGuardService]},
    { path: 'icons',          component: IconsComponent, canActivate: [RouteGuardService]},
    { path: 'maps',           component: MapsComponent, canActivate: [RouteGuardService]},
    { path: 'device-data',    component: DeviceDataComponent, canActivate: [RouteGuardService]},
    { path: '/login',         component:LoginComponent},
    { path: '/register',      component:RegisterComponent}
];
