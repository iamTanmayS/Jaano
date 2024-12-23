const maintheme = {
    colors: {
      background: '#FEFCFA', // Subtle peachy background
      cardBackground: '#FFFFFF', // Clean white for cards
      textPrimary: '#2E2E2E', // Rich black for headlines
      textSecondary: '#6D6D6D', // Subtle gray for body text
      accent: '#FF6347', // Bright red-orange for highlights
      success: '#4CAF50', // Green for positive actions
      error: '#FF4D4D', // Bright red for errors
      shadow: '#D3D3D3', // Light shadow for neomorphic effect
      info: '#2196F3', // Blue for informational text
      highlight: '#FFD700', // Gold for special highlights
    },
    fonts: {
      heading: 'Poppins-SemiBold', // Rounded, friendly font
      body: 'OpenSans-Regular', // Clean, modern font for body text
      medium: 'Poppins-Medium',
      subtitle: 'OpenSans-Medium', // Semi-bold for subtitles
      accent: 'DancingScript-Regular', // Script font for accents
      mono: 'RobotoMono-Regular', // Monospaced font for code
    },
    fontSizes: {
      xs: 10, // Extra small font size for minor text
      small: 12, // Small font size for minor text
      medium: 16, // Medium font size for body text
      large: 20, // Large font size for headings
      xLarge: 24, // Extra large font size for titles
      xxLarge: 30, // Extra-extra large for prominent titles
      huge: 36, // Very large for emphasis
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 40, // Extra-large spacing
      huge: 50, // Huge spacing for major layout elements
    },
    borderRadius: {
      small: 12,
      medium: 20,
      large: 30,
      extraLarge: 50, // Extra-large radius for rounded elements
      circle: 9999, // Full circle for avatar or circular buttons
    },
    shadows: {
      light: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      },
      medium: {
        shadowColor: '#888',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
      },
      soft: {
        shadowColor: '#D3D3D3',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
      },
      heavy: {
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 15,
      },
    },
    animations: {
      button: {
        duration: 300,
        easing: 'ease-in-out',
      },
      fadeIn: {
        duration: 500,
        easing: 'ease-in',
      },
      bounce: {
        duration: 700,
        easing: 'ease-out',
      },
      slideIn: {
        duration: 600,
        easing: 'ease-in-out',
      },
      rotate: {
        duration: 1000,
        easing: 'linear',
      },
    },
    transitions: {
      default: 'all 0.3s ease-in-out',
      fast: 'all 0.2s ease-in-out',
      slow: 'all 0.5s ease-in-out',
    },
    buttons: {
      primary: {
        backgroundColor: '#FF6E30',
        borderColor: '#FF6E30',
        borderWidth: 1,
        borderRadius: 30,
        padding: 16,
        alignItems: 'center',
      },
      secondary: {
        backgroundColor: 'transparent',
        borderColor: '#FF6E30',
        borderWidth: 1,
        borderRadius: 30,
        padding: 16,
        alignItems: 'center',
      },
    },
    cards: {
      default: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      },
    },
  };
  
  export default maintheme;
  