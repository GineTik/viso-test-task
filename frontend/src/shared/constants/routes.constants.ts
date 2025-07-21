export class Routes {
  HOME = "/";
  LOGIN = "/auth/login";
  REGISTER = "/auth/register";

  ALL_RECIPES = "/recipes";
  MY_RECIPES = "/recipes/my";
  ADD_RECIPE = "/recipes/add";
  UPDATE_RECIPE = (id: string) => `/recipes/${id}/update`;
  RECIPE_INFO = (id: string) => `/recipes/${id}`;
}

export const ROUTES = new Routes();
