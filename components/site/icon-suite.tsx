import type { PackageKey } from '@/lib/site-content';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  ClipboardList,
  Compass,
  Eye,
  FileText,
  Focus,
  Gem,
  Handshake,
  Layers3,
  LayoutGrid,
  LifeBuoy,
  Medal,
  Menu,
  MessageSquare,
  Network,
  Palette,
  Rocket,
  Sparkles,
  TrendingUp,
  X,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type SiteIconTone = 'primary' | 'accent' | 'neutral';
export type SiteIconSize = 'xs' | 'sm' | 'md' | 'lg';
export type SiteIconName =
  | 'arrow-right'
  | 'menu'
  | 'x'
  | 'spark'
  | 'essentials'
  | 'growth'
  | 'full-brand'
  | 'scope'
  | 'deposit'
  | 'intake'
  | 'kickoff'
  | 'launch'
  | 'clarity'
  | 'communication'
  | 'momentum'
  | 'trust'
  | 'business'
  | 'pages'
  | 'brand'
  | 'logistics'
  | 'proof'
  | 'fit'
  | 'week-one'
  | 'onboarding'
  | 'care'
  | 'compass';

const iconMap: Record<SiteIconName, LucideIcon> = {
  'arrow-right': ArrowRight,
  menu: Menu,
  x: X,
  spark: Sparkles,
  essentials: FileText,
  growth: Layers3,
  'full-brand': Gem,
  scope: Focus,
  deposit: BadgeCheck,
  intake: ClipboardList,
  kickoff: CalendarDays,
  launch: Rocket,
  clarity: Eye,
  communication: MessageSquare,
  momentum: TrendingUp,
  trust: BadgeCheck,
  business: Building2,
  pages: LayoutGrid,
  brand: Palette,
  logistics: Network,
  proof: Medal,
  fit: Handshake,
  'week-one': CalendarDays,
  onboarding: Handshake,
  care: LifeBuoy,
  compass: Compass,
};

const badgeToneClasses: Record<SiteIconTone, string> = {
  primary:
    'border-[rgba(80,103,90,0.18)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(231,238,234,0.94))] text-[var(--primary)] shadow-[0_14px_32px_rgba(80,103,90,0.12)]',
  accent:
    'border-[rgba(138,106,82,0.2)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(239,231,225,0.95))] text-[var(--accent)] shadow-[0_14px_32px_rgba(138,106,82,0.12)]',
  neutral: 'border-[var(--line)] bg-[rgba(255,255,255,0.94)] text-[var(--ink)] shadow-[var(--shadow-sm)]',
};

const chipToneClasses: Record<SiteIconTone, string> = {
  primary: 'bg-[var(--primary-soft)] text-[var(--primary)]',
  accent: 'bg-[var(--accent-soft)] text-[var(--accent)]',
  neutral: 'bg-[var(--panel-strong)] text-[var(--ink)]',
};

const badgeSizeClasses: Record<SiteIconSize, string> = {
  xs: 'h-8 w-8 rounded-xl',
  sm: 'h-10 w-10 rounded-[1rem]',
  md: 'h-12 w-12 rounded-[1.15rem]',
  lg: 'h-14 w-14 rounded-[1.3rem]',
};

const glyphSizeClasses: Record<SiteIconSize, string> = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

export const packageIconsBySlug: Record<PackageKey, SiteIconName> = {
  essentials: 'essentials',
  growth: 'growth',
  'full-brand': 'full-brand',
};

export const processIconsByNumber: Record<string, SiteIconName> = {
  '01': 'growth',
  '02': 'deposit',
  '03': 'intake',
  '04': 'kickoff',
  '05': 'launch',
};

export const processValueIconsByTitle: Record<string, SiteIconName> = {
  'Clear scope': 'scope',
  'Direct communication': 'communication',
  'Steady momentum': 'momentum',
};

export const proofIconsByLabel: Record<string, SiteIconName> = {
  'Wellness practice': 'trust',
  'Creative studio': 'brand',
  'Service business': 'clarity',
};

export const studioIconsByTitle: Record<string, SiteIconName> = {
  'Small on purpose': 'fit',
  'Premium without drag': 'momentum',
  'Built for trust': 'trust',
};

type SiteIconProps = LucideProps & {
  icon: SiteIconName;
  title?: string;
};

export function SiteIcon({ icon, className, title, strokeWidth = 1.9, ...props }: SiteIconProps) {
  const Icon = iconMap[icon];

  return (
    <Icon
      aria-hidden={title ? undefined : true}
      aria-label={title}
      strokeWidth={strokeWidth}
      className={cn('h-5 w-5', className)}
      {...props}
    />
  );
}

export function SiteIconBadge({
  icon,
  tone = 'primary',
  size = 'md',
  className,
  iconClassName,
}: {
  icon: SiteIconName;
  tone?: SiteIconTone;
  size?: SiteIconSize;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      aria-hidden='true'
      className={cn(
        'inline-flex flex-none items-center justify-center border',
        badgeToneClasses[tone],
        badgeSizeClasses[size],
        className
      )}>
      <SiteIcon icon={icon} className={cn(glyphSizeClasses[size], iconClassName)} />
    </span>
  );
}

export function SiteChipMark({
  icon = 'spark',
  tone = 'primary',
  className,
}: {
  icon?: SiteIconName;
  tone?: SiteIconTone;
  className?: string;
}) {
  return (
    <span
      aria-hidden='true'
      className={cn(
        'inline-flex h-5 w-5 items-center justify-center rounded-full',
        chipToneClasses[tone],
        className
      )}>
      <SiteIcon icon={icon} className='h-2.5 w-2.5' strokeWidth={2.1} />
    </span>
  );
}

export function SiteListMark({
  icon = 'spark',
  tone = 'primary',
  className,
}: {
  icon?: SiteIconName;
  tone?: SiteIconTone;
  className?: string;
}) {
  return (
    <SiteIconBadge
      icon={icon}
      tone={tone}
      size='xs'
      className={cn('mt-0.5 rounded-full shadow-none', className)}
      iconClassName='h-3.5 w-3.5'
    />
  );
}
