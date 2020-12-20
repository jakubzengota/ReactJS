import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';





const showImages = [
  {
    label: 'photo1',
    imgPath:'https://i.ytimg.com/vi/MImZkQNu7og/maxresdefault.jpg',
  },
  {
    label: 'photo2',
    imgPath:'https://www.autoguide.com/blog/wp-content/uploads/2018/11/top-10-bmw-accessories.jpg',
  },
  {
    label: 'photo3',
    imgPath:'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/51080303_1757414344358547_2982758120243068928_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=_1uO3kTKgagAX-0dkc-&_nc_ht=scontent-waw1-1.xx&oh=027bf52b4d7da06c9de589ac087e1294&oe=6002C9DC',
  },
  {
    label: 'photo4',
    imgPath:'https://i.ytimg.com/vi/D3MrUSTb6po/maxresdefault.jpg',
  },
];

export default function TextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = showImages.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
    <div style={{width: '600px',height: '300px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px'}}>
      <img style={{width: '600px',height: '300px'}}
        src={showImages[activeStep].imgPath}
        alt={showImages[activeStep].label}
      />
      <MobileStepper
      style={{backgroundColor: '#fff'}}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}