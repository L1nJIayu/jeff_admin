

export enum UserStatus {
  Active = 0,
  Inactive = 1
}
export const displayName_userStatus: Record<UserStatus, string> = {
  [UserStatus.Active]: '可用',
  [UserStatus.Inactive]: '禁用'
}