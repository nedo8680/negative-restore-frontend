import ReactCompareImage from 'react-compare-image';

type BeforeAfterProps = {
  beforeImage: string;
  afterImage: string;
};

const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage }) =>{
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-xl">
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          leftImageLabel="Before"
          rightImageLabel="After"
          sliderLineWidth={2}
        />
      </div>
    </div>
  );
};
export default BeforeAfter;