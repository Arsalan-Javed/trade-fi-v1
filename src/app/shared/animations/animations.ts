import { animate, state, style, transition, trigger } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '210px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '75px'
    })
  ),
  state('open',
    style({
      'margin-left': '210px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);

export const showLogo = trigger('showLogo', [
    state('hide',
      style({
        'display': 'none',
        opacity: 0,
      })
    ),
    state('show',
      style({
        'display': 'block',
        opacity: 1,
      })
    )
  ]);

export const accountCopyFlash = trigger('flash', [
  state('flashed', style({
    backgroundColor: 'transparent'
  })),
  state('notflashed', style({
    backgroundColor: '#1eff93a8'
  })),
  transition('notflashed => flashed', [
    animate('0.6s')
  ]),
  transition('flashed => notflashed', [
    animate('0.6s')
  ])
]);
