import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const videos = [
  {
    title: 'Online Drive Hub',
    tagline: 'See how driving schools run smarter',
    description:
      'Watch how Online Drive Hub transforms the daily chaos of running a driving school into a streamlined, automated operation — from first booking to final test.',
    color: '#3b82f6',
    // Replace src with your actual video URLs
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  },
  {
    title: "Doctor's Office",
    tagline: 'A practice management demo you can feel',
    description:
      "See how Doctor's Office simplifies patient scheduling, records management, and billing so your practice runs like clockwork — every single day.",
    color: '#10b981',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
  {
    title: 'My Online Garage',
    tagline: 'Watch your workshop work for itself',
    description:
      'Discover how My Online Garage helps mechanics manage job cards, bookings, and invoicing with ease — giving you more time under the hood and less time behind a desk.',
    color: '#f59e0b',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
  },
];

const VideoPlayer = ({ video, isActive }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleFullscreen = () => {
    if (videoRef.current) videoRef.current.requestFullscreen();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pct * videoRef.current.duration;
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div
      className="glass"
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        border: isActive ? `1px solid ${video.color}55` : '1px solid rgba(255,255,255,0.1)',
        boxShadow: isActive ? `0 0 40px ${video.color}22` : '0 8px 32px rgba(0,0,0,0.4)',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Wrapper */}
      <div style={{ position: 'relative', background: '#000', cursor: 'pointer' }} onClick={togglePlay}>
        <video
          ref={videoRef}
          src={video.src}
          poster={video.thumbnail}
          style={{ width: '100%', display: 'block', maxHeight: 340, objectFit: 'cover' }}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          playsInline
        />

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: playing
              ? 'rgba(0,0,0,0)'
              : 'linear-gradient(to top, rgba(5,13,31,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
            transition: 'background 0.3s',
          }}
        />

        {/* Big play button when paused */}
        {!playing && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e91e8c, #ff5cb8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(233,30,140,0.6)',
                transition: 'transform 0.3s',
              }}
            >
              <Play size={26} color="#fff" fill="#fff" style={{ marginLeft: 3 }} />
            </div>
          </div>
        )}

        {/* Controls overlay (on hover) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 16px 8px',
            background: 'linear-gradient(to top, rgba(5,13,31,0.9), transparent)',
            opacity: showControls || !playing ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div
            onClick={handleSeek}
            style={{
              height: 4,
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 2,
              marginBottom: 10,
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: `linear-gradient(90deg, #e91e8c, ${video.color})`,
                borderRadius: 2,
                transition: 'width 0.1s',
              }}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={togglePlay}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: 4,
                  display: 'flex',
                }}
              >
                {playing ? <Pause size={18} /> : <Play size={18} fill="#fff" />}
              </button>
              <button
                onClick={toggleMute}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: 4,
                  display: 'flex',
                }}
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
            <button
              onClick={handleFullscreen}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
              }}
            >
              <Maximize size={16} />
            </button>
          </div>
        </div>

        {/* Product color tag */}
        <div style={{
          position: 'absolute',
          top: 14,
          left: 14,
          background: `${video.color}22`,
          border: `1px solid ${video.color}55`,
          backdropFilter: 'blur(8px)',
          borderRadius: 8,
          padding: '4px 12px',
          fontSize: '0.75rem',
          color: video.color,
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          letterSpacing: '0.5px',
        }}>
          {video.title}
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <p style={{
          fontSize: '0.72rem',
          color: video.color,
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: 6,
        }}>
          {video.tagline}
        </p>
        <p style={{
          fontSize: '0.87rem',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.75,
          margin: 0,
        }}>
          {video.description}
        </p>
      </div>
    </div>
  );
};

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="videos" style={{ position: 'relative' }}>
      {/* Decorative orb */}
      <div style={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '50%',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(233,30,140,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <div
            className="d-inline-flex align-items-center gap-2 mb-3"
            style={{
              background: 'rgba(233,30,140,0.1)',
              border: '1px solid rgba(233,30,140,0.25)',
              borderRadius: '50px',
              padding: '6px 16px',
              fontSize: '0.78rem',
              color: '#ff5cb8',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Product Walkthroughs
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            See Our Software <br />
            <span className="gradient-text">In Action</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            maxWidth: 500,
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Don't just take our word for it — watch real walkthroughs of each product and see exactly how they'll transform your business.
          </p>
        </div>

        {/* Tab selector */}
        <div
          className="d-flex justify-content-center flex-wrap gap-2 mb-5"
        >
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                background: activeIndex === i
                  ? `linear-gradient(135deg, ${v.color}33, ${v.color}11)`
                  : 'rgba(255,255,255,0.04)',
                border: activeIndex === i
                  ? `1px solid ${v.color}66`
                  : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                padding: '10px 24px',
                color: activeIndex === i ? '#fff' : 'rgba(255,255,255,0.5)',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)',
              }}
            >
              {v.title}
            </button>
          ))}
        </div>

        {/* Featured video (active) */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <VideoPlayer video={videos[activeIndex]} isActive={true} />
          </Col>
        </Row>

        {/* Smaller preview cards for others */}
        <Row className="gy-4">
          {videos
            .map((v, i) => ({ v, i }))
            .filter(({ i }) => i !== activeIndex)
            .map(({ v, i }) => (
              <Col md={6} key={i} onClick={() => setActiveIndex(i)} style={{ cursor: 'pointer' }}>
                <VideoPlayer video={v} isActive={false} />
              </Col>
            ))}
        </Row>

        {/* Bottom note */}
        <div
          className="glass text-center mt-5 p-4"
          style={{ borderRadius: 16 }}
        >
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.55)',
          }}>
            Want a <span style={{ color: '#ff5cb8', fontWeight: 600 }}>live demo</span> with one of our team members?{' '}
            <a
              href="#contact"
              style={{
                color: '#ff5cb8',
                textDecoration: 'none',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                borderBottom: '1px solid rgba(233,30,140,0.4)',
              }}
            >
              Book a free session →
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;