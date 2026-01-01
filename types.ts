
export type StripeResourcesData = Record<string, any>;

export interface ResourceItem {
  id: string;
  name: string;
  data: any;
}

export enum ViewMode {
  STRUCTURED = 'STRUCTURED',
  RAW = 'RAW'
}
