export interface Album {
  userId: number;
  id: number;
  title: string;

}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

}
