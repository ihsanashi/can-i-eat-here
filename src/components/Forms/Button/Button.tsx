interface ButtonProps {
  /**
   * Specify variant type.
   */
  variant?: 'solid' | 'ghost' | 'outline' | 'unstyled';
  /**
   * Which colour to use for the background.
   */
  bgColor?:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'groovyNavy'
    | 'fantasticTeal'
    | 'mushyYellow'
    | 'meanPink';
  /**
   * If set to true, the button will be in a disabled state.
   */
  isDisabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  /**
   * Set the border radius sizes.
   */
  borderRadius?:
    | 'none'
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'full';
  /**
   * Set which corners to round.
   */
  borderCorner?:
    | 'all'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left';
  /**
   * If set to true, the button will take up the entire width of the parent container.
   */
  isFullWidth?: boolean;
  /**
   * If set to true, the button will contain a loading spinner.
   */
  isLoading?: boolean;
  /**
   * The label inside the button when isLoading is true. If no text is specified, only the spinner is shown.
   */
  loadingText?: string;
  /**
   * If specified, an icon will be present on the left side of the button's label text.
   */
  leftIcon?: React.ReactElement;
  /**
   * If specified, an icon will be present on the right side of the button's label text.
   */
  rightIcon?: React.ReactElement;
  /**
   * Display the spinner component when isLoading is set to true.
   */
  spinner?: React.ReactElement;
  /**
   * Specify the placement of the spinner when isLoading is set to true.
   */
  spinnerPosition: 'start' | 'end';
  /**
   * Button contents.
   */
  label: string;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

/**
 * Primary UI button component
 */
export const Button = ({
  variant = 'solid',
  bgColor = 'fantasticTeal',
  isDisabled = false,
  size = 'medium',
  isFullWidth = false,
  isLoading = false,
  label = 'Click me',
  ...props
}: ButtonProps) => {
  return (
    <button type='button' className='' {...props}>
      {label}
    </button>
  );
};
