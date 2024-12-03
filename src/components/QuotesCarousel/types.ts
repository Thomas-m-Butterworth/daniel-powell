export interface Quote {
    id: string;
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
    // slideKey: string;
};

export interface SlidesProps {
    quotes: Quote[];
    currentSlideIndex: number;
};