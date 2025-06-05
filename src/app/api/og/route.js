import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'My Default Title';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          backgroundColor: '#000',
          color: '#fff',
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
          fontFamily: 'sans-serif',
          padding: '40px',
          textAlign: 'center',
          letterSpacing: '-1px',
        }}>
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
