import { Model } from 'spinal-core-connectorjs_type';
import { Role } from "./UserProfile";
export declare class UserProfileLst extends Model {
    users: spinal.Lst<Role>;
    constructor();
}
