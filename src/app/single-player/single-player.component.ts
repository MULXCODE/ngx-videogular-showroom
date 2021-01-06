import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-single-player',
    templateUrl: './single-player.component.html',
    styleUrls: [ './single-player.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePlayerComponent {
    sources: any[];

    constructor() {
        this.sources = [
            {
                src: '//static.videogular.com/assets/videos/videogular.mp4',
                type: 'video/mp4'
            },
            {
                src: '//static.videogular.com/assets/videos/videogular.ogg',
                type: 'video/ogg'
            },
            {
                src: '//static.videogular.com/assets/videos/videogular.webm',
                type: 'video/webm'
            }
        ];
    }
}
