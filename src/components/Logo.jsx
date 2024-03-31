import React, { useId } from 'react';
import clsx from 'clsx';

export function Logo({
  className,
  text = "Portfolio", // Default text, replaceable via props
  invert = false,
  ...props
}) {
  // This ID might be used if you have specific elements within your logo that need unique identifiers
  // If you don't need unique identifiers for elements anymore, you can remove the useId hook.
  let id = useId();

  return (
    <div {...props} className={clsx('logo-container', className, invert && 'logo-inverted')}>
      <h1 className="logo-text font-extrabold text-5xl">{text}</h1>
    </div>
  );
}
