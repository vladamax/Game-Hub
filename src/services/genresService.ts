import APIClient from "./api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const genresService = new APIClient<Genre>("/genres");

export default genresService;
