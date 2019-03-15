import { Model, Lst, spinalCore } from 'spinal-core-connectorjs_type';
import { UserProfile } from "./UserProfile";

export class UserProfileLst extends Model {
  public users: spinal.Lst<UserProfile>;

  constructor() {
    super();
    this.add_attr({
      users: new Lst()
  })
  }
}

spinalCore.register_models(UserProfileLst);