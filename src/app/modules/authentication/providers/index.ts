import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth-guard.service';

export const PROVIDERS: any[] = [
    AuthenticationService,
    AuthGuard
];

export {
    AuthenticationService,
    AuthGuard
}