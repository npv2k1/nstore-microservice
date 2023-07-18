import AxiosInstance from "./request";

export class BaseService {
  http = AxiosInstance;
  basePath: string = "";
  constructor(basePath: string) {
    this.basePath = basePath;
  }
  // reqest() {
  //   return this.http.;
  // }

  // findAll() {
  //   return this.http.get(this.basePath);
  // }
  // find() {
  //   return this.http.get(`${this.basePath}`).then((res) => res.data);
  // }
  // findOne(id) {
  //   return this.http.get(`${this.basePath}${id}`).then((res) => res.data);
  // }
  // create(data: any, options) {
  //   return this.http.post(this.basePath, data, options).then((res) => res.data);
  // }
  // update(id, data) {
  //   return this.http.put(`${this.basePath}${id}`, data).then((res) => res.data);
  // }
  // patch(id, data) {
  //   return this.http
  //     .patch(`${this.basePath}${id}`, data)
  //     .then((res) => res.data);
  // }
  // delete(id) {
  //   return this.http.delete(`${this.basePath}${id}`);
  // }
  // get(url) {
  //   return this.http.get(url).then((res) => res.data);
  // }
  // post(url, data) {
  //   return this.http.post(url, data);
  // }
  // put(url, data) {
  //   return this.http.put(url, data);
  // }
}
