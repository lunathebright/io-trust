export interface IVisibleFor {
  languages?: ("ko" | "en")[];
  platforms?: ("ios" | "android" | "web")[];
  environments?: ("dev" | "stage" | "prod")[];
}
