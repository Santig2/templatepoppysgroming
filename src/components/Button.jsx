export const Button = ({ className, children, variant, contentKey, ... props }) => {
  return (
    <button id="menu-toggle" className={className} {...props}>{children}</button>
  );
};
