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
};
