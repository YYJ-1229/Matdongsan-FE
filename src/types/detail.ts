export type NutrientsDetail = {
  servingSizeLabel: string;
  servingSizeGram: number;
  calories: number;
  carbohydrate: number;
  dietaryFiber: number;
  sugars: number;
  protein: number;
  fat: number;
};

export interface FoodInfo {
  id: number;
  name: string;
  englishName: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  color: string;
  isFeatured: boolean;
  lastFeatureDate: string;
  isLiked: boolean;
  seasonMonths: string;
  regions: string;
  benefits: string;
  buyingTipes: string;
  preparationTip: string;
  nutrients: NutrientsDetail;
}

export interface FlipImageProps {
  week: string;
  name: string;
  descTitle: string;
  descDetail: string;
}

export interface FoodDetailInfo {
  title: string;
  desc: string;
}

export interface FoodIngredientInfo {
  title: string;
  data: string;
}

export type FoodReviewType = "Review" | "Recipe" | "SEASONAL_NOTE";

export type ImagesList = {
  imageUrl: string;
  thumbnailUrl: string;
};

export interface BaseFoodReviewInfo {
  id: string;
  nickname: string;
  profileImageUrl: string;
  date: string;
  type: FoodReviewType;
  title: string;
  desc: string;
  images?: ImagesList[];
  isLiked: boolean;
  likeCount: number;
}

export interface FoodReviewDetail extends BaseFoodReviewInfo {
  type: "Review";
  ingredient: string;
  receipe: string;
}

export interface FoodRecipeDetail extends BaseFoodReviewInfo {
  type: "Recipe";
  position: string;
  comment: string;
}
export interface FoodDiaryDetail extends BaseFoodReviewInfo {
  type: "SEASONAL_NOTE";
  date: string;
  comment: string;
}

export type FoodReviewInfo =
  | FoodReviewDetail
  | FoodRecipeDetail
  | FoodDiaryDetail;
