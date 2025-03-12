import request from "../../core/request";

export async function getListCategory(): Promise<any> {
  return await request({
    url: `http://127.0.0.1:5002/api/category`,
    method: "GET",
  });
}
