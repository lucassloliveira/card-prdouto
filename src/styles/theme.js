// ================
// DESIGN TOKENS 
// ================
export const theme = {
  colors: {
    // Cores principais
    primary:       '#0f4c81',
    primaryLight:  '#6c757d',
    primaryHover:  '#0d3f6e',

    // Estados do botão
    success:       '#198754',
    successLight:  '#e6f4ed',
    danger:        '#c0392b',
    dangerLight:   '#fdecea',

    // Tipografia
    text:          '#1a1a2e',
    textMuted:     '#6b7280',
    textLight:     '#9ca3af',

    // Superfícies
    surface:       '#ffffff',
    surfaceHover:  '#f9fafb',
    background:    '#f0f2f5',

    // Bordas
    border:        'rgba(0, 0, 0, 0.08)',
    borderStrong:  'rgba(0, 0, 0, 0.15)',
    borderSuccess: '#1a7f4b',
  },

  typography: {
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    sizes: {
      xs:   '0.75rem',   // 12px
      sm:   '0.875rem',  // 14px
      base: '1rem',      // 16px
      lg:   '1.125rem',  // 18px
      xl:   '1.25rem',   // 20px
      xxl:  '1.5rem',    // 24px
    },
    weights: {
      regular: 400,
      medium:  500,
      bold:    600,
    },
  },

  spacing: {
    xs:  '4px',
    sm:  '8px',
    md:  '12px',
    lg:  '16px',
    xl:  '24px',
    xxl: '32px',
  },

  radii: {
    sm:   '6px',
    md:   '10px',
    lg:   '14px',
    full: '9999px',
  },

  shadows: {
    sm:   '0 1px 4px rgba(0,0,0,0.06)',
    card: '0 2px 12px rgba(0,0,0,0.07)',
    lg:   '0 8px 24px rgba(0,0,0,0.10)',
  },

  transitions: {
    fast:   '0.15s ease',
    normal: '0.25s ease',
  },
}
