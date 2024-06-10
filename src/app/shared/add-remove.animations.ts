import { animate, state, style, transition, trigger } from "@angular/animations";

export function createAnimationForTrigger(triggerName: string) {
    return trigger(triggerName, [
        state('in', style({
            transform: 'scale(0)',
            height: '0'
        })),
        transition('void => *', [
            style({
                transform: 'scale(0)',
                height: '0'
            }),
            animate(300)
        ]),
        transition('* => void', [
            animate(300, style({
                transform: 'scale(0)',
                height: '0'
            }))
        ])
    ])
};