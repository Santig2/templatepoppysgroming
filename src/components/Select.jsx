'use client';

export const Select = ({ className, children, variant, contentKey, ... props }) => {
  return (
    <select className={className} {...props}>{children}</select>
  );
};
