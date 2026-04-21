import { siteConfig } from '@/lib/seo';

type OgImageCardProps = {
  title: string;
  description: string;
  eyebrow: string;
  path: string;
};

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

function getDisplayPath(path: string) {
  const normalizedPath = path === '/' ? '' : path.replace(/\/$/, '');
  const domain = siteConfig.url.replace(/^https?:\/\//, '');

  return normalizedPath ? `${domain}${normalizedPath}` : domain;
}

function getTitleFontSize(title: string) {
  if (title.length > 90) {
    return 52;
  }

  if (title.length > 70) {
    return 60;
  }

  if (title.length > 48) {
    return 68;
  }

  return 80;
}

export function OgImageCard({ title, description, eyebrow, path }: OgImageCardProps) {
  const titleFontSize = getTitleFontSize(title);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        padding: 34,
        background:
          'radial-gradient(circle at top left, rgba(80,103,90,0.2), transparent 24%), radial-gradient(circle at top right, rgba(138,106,82,0.18), transparent 24%), linear-gradient(180deg, #f8fafb 0%, #f3f6f7 42%, #eef2f4 100%)',
        color: '#1b2229',
      }}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: -72,
          top: -72,
          width: 260,
          height: 260,
          borderRadius: 999,
          background: 'rgba(80, 103, 90, 0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: -92,
          bottom: -110,
          width: 320,
          height: 320,
          borderRadius: 999,
          background: 'rgba(138, 106, 82, 0.12)',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '36px 38px',
          borderRadius: 34,
          border: '1px solid rgba(184, 194, 203, 0.9)',
          background:
            'linear-gradient(150deg, rgba(255,255,255,0.98) 0%, rgba(248,250,251,0.95) 52%, rgba(231,238,234,0.88) 100%)',
          boxShadow: '0 24px 60px rgba(23, 31, 38, 0.08)',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 18px',
              borderRadius: 999,
              border: '1px solid rgba(230, 235, 239, 1)',
              background: 'rgba(255,255,255,0.86)',
            }}>
            <div
              style={{
                display: 'flex',
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#50675a',
              }}
            />
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 3.6,
                textTransform: 'uppercase',
                color: '#66727e',
              }}>
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 8,
            }}>
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 3.2,
                textTransform: 'uppercase',
                color: '#66727e',
              }}>
              Blake Marcus Studio
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                color: '#5b6672',
              }}>
              Strategy • Design • Build
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            maxWidth: 890,
          }}>
          <div
            style={{
              display: 'flex',
              fontSize: titleFontSize,
              fontWeight: 700,
              letterSpacing: -2.8,
              lineHeight: 1.02,
              color: '#1b2229',
            }}>
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              maxWidth: 820,
              fontSize: 28,
              lineHeight: 1.45,
              color: '#4f5c67',
            }}>
            {description}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '100%',
            gap: 24,
          }}>
          <div
            style={{
              display: 'flex',
              gap: 14,
            }}>
            {[
              'Premium websites',
              'Founder-led service businesses',
              'Las Vegas, Nevada',
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 18px',
                  borderRadius: 22,
                  border: index === 1 ? '1px solid rgba(215, 222, 228, 1)' : '1px solid transparent',
                  background: index === 1 ? 'rgba(255,255,255,0.82)' : '#e7eeea',
                  color: index === 1 ? '#5b6672' : '#415347',
                  fontSize: 20,
                  fontWeight: 600,
                }}>
                <div
                  style={{
                    display: 'flex',
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: index === 2 ? '#8a6a52' : '#50675a',
                  }}
                />
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              padding: '14px 18px',
              borderRadius: 22,
              border: '1px solid rgba(215, 222, 228, 1)',
              background: 'rgba(255,255,255,0.84)',
              color: '#5b6672',
              fontSize: 20,
              fontWeight: 600,
            }}>
            {getDisplayPath(path)}
          </div>
        </div>
      </div>
    </div>
  );
}
