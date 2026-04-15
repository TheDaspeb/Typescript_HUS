import React from 'react';
import Badge, { BadgeProps } from '../atoms/Badge';

export type CardType = 'green' | 'white' | 'black';

export interface CardProps {
  title: string;
  type: CardType;
  badges: [BadgeProps, ...BadgeProps[]];
  imageUrl?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  type,
  badges,
  imageUrl,
  footer,
  children,
}) => {
  return (
    <article className={`ui-card ui-card--${type}`}>
      {imageUrl ? (
        <div className="ui-card__media">
          <img src={imageUrl} alt={title} className="ui-card__image" />
        </div>
      ) : null}

      <div className="ui-card__content">
        <div className="ui-card__badges" aria-label={`${title} badges`}>
          {badges.map((badge) => (
            <Badge
              key={`${badge.label}-${badge.status ?? 'neutral'}`}
              label={badge.label}
              status={badge.status}
              icon={badge.icon}
            />
          ))}
        </div>

        <h3 className="ui-card__title">{title}</h3>

        {children ? <div className="ui-card__body">{children}</div> : null}

        {footer ? <div className="ui-card__footer">{footer}</div> : null}
      </div>
    </article>
  );
};

export default Card;
