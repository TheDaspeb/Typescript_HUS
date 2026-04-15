import React from 'react';

export type BadgeStatus = 'success' | 'warning' | 'info' | 'error' | 'neutral';

export interface BadgeProps {
  label: string;
  status?: BadgeStatus;
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ label, status = 'neutral', icon }) => {
  return (
    <span className={`ui-badge ui-badge--${status}`}>
      {icon ? <span className="ui-badge__icon">{icon}</span> : null}
      <span>{label}</span>
    </span>
  );
};

export default Badge;
