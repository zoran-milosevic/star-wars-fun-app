import { LogService } from './log.service';
import { NavBarService } from "./nav-bar.service";
import { AuthGuard } from './auth-guard.service';

export const PROVIDERS: any[] = [
    LogService,
    NavBarService,
    AuthGuard
];

export {
    LogService,
    NavBarService,
    AuthGuard
}