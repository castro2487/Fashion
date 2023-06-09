import React, { useState } from 'react';

import { Toast, ToastProvider } from '@molecules/Toast';

export default {
  title: 'Examples/Toast',
  component: Toast,
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
};

export const Default = () => {
  const [open, setOpen] = useState(true);

  return (
    <ToastProvider>
      <Toast
        open={open}
        onOpenChange={setOpen}
        className="ToastRoot"
        title="Thank you for your inquiry."
        isSuccess={true}
      />
    </ToastProvider>
  );
};
