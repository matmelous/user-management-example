export interface UserType{
    id: string,
    name: string,
    password: string,
}

export interface usersSlice{
    data: UserType[],
    currentUser: string | null,
}