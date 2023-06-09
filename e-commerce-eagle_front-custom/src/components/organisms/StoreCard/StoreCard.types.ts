declare module '@amq' {
  interface StoreCardProps {
    title: string;
    description: React.ReactNode;
    phoneNumber: {
      linkUrl: string;
      label: string;
    };
    children: React.ReactNode;
    disabled: boolean;
    active: boolean;
    openingHours?:
      | string
      | {
          title: string;
          items: { id: string; text: string }[];
        };
  }
}
export {};
