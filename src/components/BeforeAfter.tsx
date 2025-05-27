import React, { useState } from 'react';
import { default as ReactCompareImage } from 'react-compare-image';

type BeforeAfterProps = {
  beforeImage: string;
  afterImage: string;
};

const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage }) => {
  const [loaded, setLoaded] = useState({ before: false, after: false });
  const [error, setError] = useState(false);

  const isValidImage = (url: string): boolean => {
    return typeof url === 'string' && url.trim() !== '';
  };

  const handleError = () => {
    setError(true);
    console.error('Error loading one or both images for comparison');
  };

  if (!isValidImage(beforeImage) || !isValidImage(afterImage)) {
    return <p className="text-red-500">Error: One or both images are invalid.</p>;
  }

  return (
    <div className="flex justify-center w-full">
      {/* Hidden preloaders */}
      <img
        src={beforeImage}
        alt="Before preload"
        style={{ display: 'none' }}
        onLoad={() => setLoaded(prev => ({ ...prev, before: true }))}
        onError={handleError}
      />
      <img
        src={afterImage}
        alt="After preload"
        style={{ display: 'none' }}
        onLoad={() => setLoaded(prev => ({ ...prev, after: true }))}
        onError={handleError}
      />

      {error && <p className="text-red-500">Failed to load one of the images.</p>}

      {loaded.before && loaded.after && !error && (
        <div className="w-full max-w-xl">
          <ReactCompareImage
            leftImage={beforeImage}
            rightImage={afterImage}
            leftImageLabel="Before"
            rightImageLabel="After"
            sliderLineWidth={2}
          />
        </div>
      )}
    </div>
  );
};

export default BeforeAfter;
