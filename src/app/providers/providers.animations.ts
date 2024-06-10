import { animate, state, style, transition, trigger } from "@angular/animations";

export const PROVIDERS_ANIMATIONS: any = trigger('providerAnimationState', [
    state('in', style({
        transform: 'scale(0)',
        height: 'auto'
    })),
    transition('void => *', [
        style({
            transform: 'scale(0)',
            height: 'auto'
        }),
        animate(300)
    ]),
    transition('* => void', [
        animate(300, style({
            transform: 'scale(0)',
            height: '0'
        }))
    ])
]);