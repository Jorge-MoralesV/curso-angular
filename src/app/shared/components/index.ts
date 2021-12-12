import { CardUserComponent } from './cards/card-user/card-user.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardLoaderComponent } from './loaders/card-loader/card-loader.component';
import { TitleH1Component } from './titles/title-h1/title-h1.component';

export const components: any[] = [
    CardUserComponent,
    CarouselComponent,
    TitleH1Component,
    //Loaders
    CardLoaderComponent
];

export * from './cards/card-user/card-user.component';
export * from './titles/title-h1/title-h1.component';
export * from './carousel/carousel.component';

//Loaders
export * from './loaders/card-loader/card-loader.component';