interface BadgeProps {
  /**
   * Set the background colour.
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
   * Set the size.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Specify variant type.
   */
  variant?: 'outline' | 'solid' | 'soft';
  /**
   * Content of the badge.
   */
  label: string;
}

export const Badge = ({ label = 'Default', ...props }: BadgeProps) => {
  return (
    <span className='' {...props}>
      {label}
    </span>
  );
};
