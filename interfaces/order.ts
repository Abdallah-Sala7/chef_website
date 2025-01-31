type contentItemType = {
  title: string;
  desc?: string;
  textStyle?: string;
  content: {
    type: string;
    name: string;
    value: string;
    label: string;
  }[];
};

export interface ITabsContent {
  [key: string]: contentItemType[];
}

export interface IOrder {
  id: string;
  day: string;
  from_time: string;
  to_time: string;
  state: "open" | "new";
  addition_service: string;
  adult: number;
  children: number;
  teen: number;
  cost: number;
  details: string;
  chef: any;

  cuisine_name: string;
  package_name: string;
  package_average: string;
  service_name: string;

  breakfast_status: string;
  lunch_status: string;
  dinner_status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
