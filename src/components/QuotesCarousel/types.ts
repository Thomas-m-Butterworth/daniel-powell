export interface Quote {
    accolade: string;
    source: string;
};

export interface DotsProps {
    quotes: Quote[];
    setCurrentSlide: (index: number) => void;
    currentSlideIndex: number;
};

export interface SlideProps {
    quote: Quote;
    key: number | string;
};

export interface SlidesProps {
    quotes: Quote[];
    currentSlideIndex: number;
};