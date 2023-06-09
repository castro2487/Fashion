declare module '@amq' {
  type Breadcrumb = {
    id: string;
    label: string;
    linkUrl: string;
  };

  interface BreadcrumbsProps {
    items: Breadcrumb[];
    current: string;
    css?: StichesCSS;
    className?: string;
  }
}

export const module_isolation = true;
