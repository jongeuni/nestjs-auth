/**
 * user create rq
 * @namespace UserCreateRq
 * @property email
 * @property password
 * @property name
 */

export interface UserCreateRq {
  /** 변경할 푸시 알림 설정값 */
  email: string;
  password: string;
  name: string;
}
