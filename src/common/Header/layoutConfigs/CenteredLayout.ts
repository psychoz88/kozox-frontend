import { TLayout } from "../types";

const getCenteredLayout = (isButtonVisible = false): TLayout => ({
  type: 'centered',
  components: [
    {component: 'isBackButton', isButtonVisible},
    {component: 'isLogo'},
    // {component: 'isSignOutButton'},
  ],
});

export {getCenteredLayout};
