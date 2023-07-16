interface OnboardingBottomContentButton {
  text: string;
}

export interface OnboardingBottomContentProps {
  title?: string;
  description?: string;
  buttons: OnboardingBottomContentButton[];
}

export const OnboardingBottomContent = () => {};
