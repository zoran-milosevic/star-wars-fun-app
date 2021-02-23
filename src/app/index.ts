import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { MainModule } from './modules/main/main.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ContactModule } from './modules/contact/contact.module';
import { AboutModule } from './modules/about/about.module';

export const APP_MODULES: any[] = [
    MainModule,
    AuthenticationModule,
    ContactModule,
    AboutModule
];

export const APP_COMPONENTS: any[] = [
    NavigationComponent,
    FooterComponent
];
