import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
          borderRadius: 35,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}
        >
          {/* Left Bracket */}
          <div style={{ fontSize: 160, color: '#e8e8e8', marginRight: 2, lineHeight: 1 }}>
            {'{'}
          </div>

          {/* Stacked Letters */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f5a623',
              fontSize: 55,
              fontWeight: 900,
              lineHeight: 0.75,
              marginTop: 15,
            }}
          >
            <span>A</span>
            <span>B</span>
            <span>E</span>
          </div>

          {/* Right Bracket */}
          <div style={{ fontSize: 160, color: '#e8e8e8', marginLeft: 2, lineHeight: 1 }}>
            {'}'}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
