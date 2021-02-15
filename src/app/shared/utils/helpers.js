/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default class Helpers {
  static getDateTime() {
    const date = new Date();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    const hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
    const minute =
      date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    return `${year}-${month}-${day} ${hour}:${minute}`;
  }
}
