export interface BasicUserType {
  name: string;
  password: string;
}
export interface UserType extends BasicUserType {
  id: string;
}

export interface usersSlice {
  data: UserType[];
  currentUser: string | null;
}
