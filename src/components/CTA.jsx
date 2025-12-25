import GradientButton from './GradientButton';

function CTA() {
  return (
    <div className='main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center'>
      <h4 className='max-w-6xl text-2xl lg:text-5xl text-center leading-tight'>
        Freelance projects, collaborations and full time opportunities. Let's
        get acquainted
      </h4>
      <GradientButton text='Book a Call' link='/' />
    </div>
  );
}

export default CTA;
