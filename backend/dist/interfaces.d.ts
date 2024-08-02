import User from './models/User';
declare module 'express-serve-static-core' {
    interface request {
        user?: User;
    }
}
export interface UserAttributes {
    id: number;
    username: string;
    password: string;
    email: string;
}
//# sourceMappingURL=interfaces.d.ts.map