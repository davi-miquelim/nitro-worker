export interface IProductOrServiceRequest {
  productOrService: string;
  qualities: string[];
  amount: number;
}

export interface ICopywriteFrameworkRequest
  extends Partial<IDescriptionRequest> {
  callToAction: string;
  emotion: string;
}

export interface IFacebookAdsFeedRequest {
  description: string;
  amount: number;
}

export interface IDescriptionRequest {
  description: string;
  amount: number;
}
