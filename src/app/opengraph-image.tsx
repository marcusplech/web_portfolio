import { ImageResponse } from 'next/og';

import { siteTagline, siteTitle } from '@/content/site';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background:
            'radial-gradient(circle at 20% 10%, rgba(126, 87, 194, 0.28), transparent 40%), linear-gradient(135deg, #f7f7ff 0%, #ececff 100%)',
          color: '#171721',
          padding: '48px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 74, fontWeight: 700, letterSpacing: -2 }}>{siteTitle}</div>
        <div style={{ fontSize: 34, marginTop: 18, color: '#4e4e63' }}>{siteTagline}</div>
      </div>
    ),
    { ...size }
  );
}
