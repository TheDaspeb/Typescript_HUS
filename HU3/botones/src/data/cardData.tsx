import React from 'react';
import { BadgeProps, CardProps } from '../components/ui';

type CardItem = Omit<CardProps, 'footer'> & {
  description: string;
  actionText: string;
  actionVariant: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
};

const analyticsBadges: [BadgeProps, ...BadgeProps[]] = [
  { label: 'Activo', status: 'success', icon: <span aria-hidden="true">OK</span> },
  { label: 'Analytics', status: 'info' },
];

const securityBadges: [BadgeProps, ...BadgeProps[]] = [
  { label: 'Critico', status: 'warning', icon: <span aria-hidden="true">!</span> },
  { label: 'Seguridad', status: 'neutral' },
];

const supportBadges: [BadgeProps, ...BadgeProps[]] = [
  { label: 'Pendiente', status: 'error', icon: <span aria-hidden="true">!</span> },
  { label: 'Soporte', status: 'neutral' },
];

export const cardItems: CardItem[] = [
  {
    title: 'Panel de conversion',
    type: 'green',
    badges: analyticsBadges,
    description: 'Resume el rendimiento semanal y destaca la accion principal para el equipo.',
    actionText: 'Ver reporte',
    actionVariant: 'primary',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Revision de accesos',
    type: 'white',
    badges: securityBadges,
    description: 'Centraliza permisos sensibles con estados visibles y una accion secundaria.',
    actionText: 'Auditar',
    actionVariant: 'secondary',
  },
  {
    title: 'Incidencias abiertas',
    type: 'black',
    badges: supportBadges,
    description: 'Expone alertas activas y permite priorizar respuestas desde la misma tarjeta.',
    actionText: 'Resolver ahora',
    actionVariant: 'danger',
    loading: true,
  },
];
