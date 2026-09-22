import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#09090B',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: '6px',
          fontWeight: 700,
          border: '1px solid rgba(99, 102, 241, 0.4)', // Indigo subtle border
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#6366f1' }}>R</span>J
      </div>
    ),
    {
      ...size,
    }
  );
}