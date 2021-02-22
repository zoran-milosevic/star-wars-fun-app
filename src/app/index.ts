import { MainModule } from './modules/main/main.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

export const APP_MODULES: any[] = [
    MainModule,
    AuthenticationModule    
];

export const APP_COMPONENTS: any[] = [
    NavigationComponent,
    FooterComponent
];
