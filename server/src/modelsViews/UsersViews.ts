import { Users } from "../entitiesModels/Users";

export const userViews = {
  render(user: Users): Users {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      // password: user.password,
      admin: user.admin,
    };
  },
  renderMany(users: Users[]): Users[] {
    return users.map((user) => this.render(user));
  },
};
