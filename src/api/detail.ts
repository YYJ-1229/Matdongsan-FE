import api from "../lib/api";
import { FoodInfo } from "../types/detail";

export async function getFoodInfo(id: number): Promise<FoodInfo> {
  const res = await api.get(`/api/v1/foods/${id}/info`);

  return res.data;
}
