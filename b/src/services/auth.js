import {request} from 'umi';

/**
 *
 * @param body
 * email  是  string  邮箱
 * password  是  string  密码
 * @returns {Promise<*>}
 *
 * access_token  是  string  token
 * token_type  是  string  token类型
 * expires_in  是  int  过期时间
 */
export async function login(body) {
  return request('/api/auth/login', {
    method: 'POST', headers: {"Content-Type": "application/json",}, data: body
  });
}

/**
 *
 * @param token Authorization  是  string  JWT token
 * @returns {Promise<*>}
 * 状态码 204 请求成功
 */
export async function logout(token) {
  return request("/api/auth/logout", {method: "POST"});
}

//user start
/**
 *
 * @param body
 * name  是  string  昵称
 * email  是  string  邮箱
 * password  是  string  密码
 * password_confirmation  是  string  确认密码
 * openid  否  string  微信公众平台openid， 小程序注册使用
 * avatar  否  string  用户头像
 * > 非小程序注册， 请不要使用openid参数， 否则会导致验证不通过
 * @param options
 *
 * @returns {Promise<*>}
 * 状态码 201 创建成功
 *
 * 状态码 422 参数错误
 */
export async function register(body, options) {
  return request("/api/auth/register", {
    method: "POST", headers: {"Content-Type": "application/json",}, data: body, ...(options || {})
  });
}

/**
 *
 * @param token
 * Authorization  是  string  JWT token
 * @returns {Promise<*>}
 * access_token  是  string  token
 * token_type  是  string  token类型
 * expires_in  是  int  过期时间
 */
export async function refreshToken(token) {
  return request("/api/auth/refresh", {method: "POST",});
}

/**
 *
 * @param token
 * Authorization  是  string  JWT token
 * @returns {Promise<*>}
 * accessid  是  string  accessid
 * host  是  string  host
 * policy  是  string  policy
 * signature  是  string  signature
 * expire  是  int  expire
 * callback  是  string  callback
 * callback-var  是  string  callback-var
 * dir  是  string  dir
 */
export async function getOssToken(token) {
  return request("/api/auth/oss/token", {method: "GET",});
}

/**
 * Authorization  是  string  JWT token
 * @param body
 * old_password  是  string  旧密码
 * password  是  string  密码
 * password_confirmation  是  string  确认密码
 * @param options
 * @returns {Promise<*>}
 */
export async function updatePassword(body, options) {
  return request("/api/auth/password/update", {
    method: "POST", headers: {"Content-Type": "application/json"}, data: body, ...(options || {})
  });
}

/**
 * Authorization  是  string  JWT token
 * code  是  string  邮箱收到的验证码
 * email  是  string  邮箱
 * @returns {Promise<*>}
 */
export async function updateEmail(body) {
  return request("/api/auth/email/update", {
    method: "POST", headers: {"Content-Type": "application/json"}, data: body
  });
}

/**
 *
 * Authorization  是  string  JWT token
 * @param body
 * code  是  string  手机收到的验证码
 * phone  是  string  手机
 * @returns {Promise<*>}
 */
export async function updatePhone(body) {
  return request("/api/auth/phone/update", {
    method: "POST", headers: {"Content-Type": "application/json"}, data: body
  });
}

/**
 *
 * Authorization  是  string  JWT token
 * @param body
 * email  是  string  邮箱
 * @returns {Promise<*>}
 */
export async function getEmailCodeOnUpdatingEmail(body) {
  return request("/api/auth/email/code", {
    method: "POST", headers: {"Content-Type": "application/json"}, data: body
  });
}

/**
 *
 * Authorization  是  string  JWT token
 * @param body
 * phone  是  string  手机号
 * @returns {Promise<*>}
 */
export async function getPhoneCodeOnUpdatingPhone(body) {
  return request("/api/auth/phone/code", {
    method: "POST", headers: {"Content-Type": "application/json"}, data: body
  });
}

/**
 * 找回密码
 * Authorization  是  string  JWT token
 * @param body
 * email  是  string  邮箱
 * @returns {Promise<*>}
 */
export async function sendEmailCodeOnFindingEmail(body) {
  return request("/api/auth/reset/password/email/code", {
    method: "POST", headers: {"Content-Type": "application/json"}, data: body
  });
}

/**
 * Authorization  是  string  JWT token
 * @param body
 * code  是  string  邮箱收到的验证码
 * email  是  string  邮箱
 * password  是  string  密码
 * password_confirmation  是  string  确认密码
 * @returns {Promise<*>}
 */
export async function verifyOnFindingEmail(body) {
  return request("/api/auth/reset/password/email", {
    method: "POST", headers: {"Content-Type": "application/json"}, data: body
  });
}

// 小程序Code换取用户信息
//小程序绑定或解绑
//user end

