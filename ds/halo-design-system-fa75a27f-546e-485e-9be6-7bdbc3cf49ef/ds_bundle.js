/* @ds-bundle: {"format":4,"namespace":"HaloDesignSystem_fa75a2","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"NumberBadge","sourcePath":"components/core/NumberBadge.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"FloatingDock","sourcePath":"components/navigation/FloatingDock.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Ticker","sourcePath":"components/navigation/Ticker.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"GlassPanel","sourcePath":"components/surfaces/GlassPanel.jsx"},{"name":"MediaFrame","sourcePath":"components/surfaces/MediaFrame.jsx"},{"name":"StatDial","sourcePath":"components/surfaces/StatDial.jsx"}],"sourceHashes":{"components/core/Button.jsx":"35176671d64e","components/core/Chip.jsx":"d05cd7a1b48a","components/core/Icon.jsx":"2d2f642eb74d","components/core/IconButton.jsx":"9f395e895a9e","components/core/NumberBadge.jsx":"597df820503d","components/core/SectionLabel.jsx":"ec8f3b92b275","components/core/Wordmark.jsx":"4581a611859d","components/navigation/FloatingDock.jsx":"d0d96dcb34a0","components/navigation/ListRow.jsx":"0a02bb5a81ba","components/navigation/NavBar.jsx":"9b8c9bcc7681","components/navigation/Ticker.jsx":"a134b6cde74d","components/surfaces/Card.jsx":"612a92b143ab","components/surfaces/GlassPanel.jsx":"223615515346","components/surfaces/MediaFrame.jsx":"fe563311af5e","components/surfaces/StatDial.jsx":"54a3acfc1fcb","ui_kits/app/Weather.jsx":"08923a423616","ui_kits/site/About.jsx":"3724c13f3af2","ui_kits/site/Home.jsx":"ccf989d8125c","ui_kits/site/Projects.jsx":"445f39eba392"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HaloDesignSystem_fa75a2 = window.HaloDesignSystem_fa75a2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
/* Wrapper for the Lucide icon set (loaded from CDN by the host page).
   Renders a <i data-lucide> placeholder that lucide.createIcons() swaps for an SVG. */
function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({
      nameAttr: 'data-lucide',
      root: ref.current.parentNode
    });
  }, [name]);
  return /*#__PURE__*/React.createElement("i", {
    ref: ref,
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      color,
      strokeWidth,
      flex: '0 0 auto',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '7px 14px',
    fontSize: 12
  },
  md: {
    padding: 'var(--control-pad-y) var(--control-pad-x)',
    fontSize: 13
  },
  lg: {
    padding: '13px 22px',
    fontSize: 15
  }
};
const variants = {
  solid: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-invert)',
    boxShadow: 'none'
  },
  outline: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    boxShadow: 'var(--inset-hairline)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    boxShadow: 'none'
  },
  glass: {
    background: 'var(--glass-fill)',
    color: 'var(--text-strong)',
    backdropFilter: 'var(--blur-glass)',
    boxShadow: 'var(--inset-hairline)'
  }
};

/** Pill button. The brand's default is a small dark pill with a trailing circular arrow. */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  icon,
  trailingDot = false,
  disabled = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.solid;
  const knob = variant === 'solid' ? {
    background: 'var(--grey-0)',
    color: 'var(--grey-950)'
  } : {
    background: 'var(--grey-950)',
    color: 'var(--grey-0)'
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      letterSpacing: '-.01em',
      lineHeight: 1,
      borderRadius: 'var(--radius-control)',
      whiteSpace: 'nowrap',
      opacity: disabled ? 0.38 : 1,
      transition: 'transform var(--dur-fast) var(--ease-standard), opacity var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
      transform: hover && !disabled ? 'var(--hover-lift)' : 'none',
      paddingRight: icon ? 5 : undefined,
      ...sizes[size],
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: icon ? 4 : 0
    }
  }, children), trailingDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...knob
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
/** Small pill label — the brand's most repeated element. Sits on cards, over imagery, and in filter rows. */
function Chip({
  children,
  icon,
  dot = false,
  tone = 'light',
  active = true,
  onClick,
  style = {}
}) {
  const tones = {
    light: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      boxShadow: 'var(--inset-hairline)'
    },
    dark: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-invert)'
    },
    glass: {
      background: 'var(--glass-fill)',
      color: 'var(--text-strong)',
      backdropFilter: 'var(--blur-glass)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--chip-size)',
      letterSpacing: 'var(--chip-track)',
      lineHeight: 1,
      cursor: onClick ? 'pointer' : 'default',
      opacity: active ? 1 : 0.38,
      transition: 'opacity var(--dur-base) var(--ease-standard)',
      ...tones[tone],
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 28,
  md: 38,
  lg: 52
};

/** Circular icon-only control — the brand's navigation and "explore" affordance. */
function IconButton({
  icon = 'arrow-up-right',
  variant = 'outline',
  size = 'md',
  label,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size] || sizes.md;
  const v = {
    solid: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-invert)',
      boxShadow: 'none'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      boxShadow: 'var(--inset-hairline)'
    },
    glass: {
      background: 'var(--glass-fill)',
      color: 'var(--text-strong)',
      backdropFilter: 'var(--blur-glass)',
      boxShadow: 'var(--inset-hairline)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label || icon,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform var(--dur-base) var(--ease-out-soft)',
      transform: hover ? 'scale(1.06)' : 'none',
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(d * 0.38)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/NumberBadge.jsx
try { (() => {
/** Thin-ruled circular counter used down the left edge of numbered list rows. */
function NumberBadge({
  children,
  size = 30,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      color: 'var(--text-body)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { NumberBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NumberBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/** Uppercase eyebrow with a leading bullet — marks the start of every page section. */
function SectionLabel({
  children,
  index,
  bullet = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 7,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--label-size)',
      letterSpacing: 'var(--label-track)',
      fontWeight: 'var(--label-weight)',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      ...style
    }
  }, bullet && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor',
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", null, children), index && /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: 9,
      color: 'var(--text-faint)',
      letterSpacing: 0
    }
  }, "[", index, "]"));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/** The brand name set in display type. No logo mark exists in the source material — the name IS the mark. */
function Wordmark({
  name = 'Halo',
  size = 28,
  weight = 300,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: weight,
      fontSize: size,
      letterSpacing: '-.045em',
      lineHeight: 1,
      color: 'var(--text-strong)',
      ...style
    }
  }, name);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FloatingDock.jsx
try { (() => {
/** Dismissible frosted strip pinned to a viewport corner (app download, cookie notice). */
function FloatingDock({
  children,
  actions = [],
  onDismiss,
  position = 'bottom-left',
  style = {}
}) {
  const pos = {
    'bottom-left': {
      left: 12,
      bottom: 12
    },
    'bottom-right': {
      right: 12,
      bottom: 12
    },
    'top-left': {
      left: 12,
      top: 12
    },
    'top-right': {
      right: 12,
      top: 12
    }
  }[position];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px 8px 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--blur-glass)',
      boxShadow: 'var(--shadow-float)',
      fontFamily: 'var(--font-text)',
      fontSize: 11,
      color: 'var(--text-body)',
      lineHeight: 1.35,
      maxWidth: 320,
      ...pos,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: i === actions.length - 1 ? 'var(--surface-inverse)' : 'var(--surface-card)',
      color: i === actions.length - 1 ? 'var(--text-invert)' : 'var(--text-strong)',
      boxShadow: 'var(--inset-hairline)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a,
    size: 13
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), onDismiss && /*#__PURE__*/React.createElement("span", {
    onClick: onDismiss,
    style: {
      cursor: 'pointer',
      color: 'var(--text-faint)',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { FloatingDock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FloatingDock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
/** Full-width numbered row: index, thumbnail, uppercase label, trailing action. Alternating grey fill. */
function ListRow({
  index,
  thumb,
  children,
  alt = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '14px var(--page-pad-x)',
      background: hover ? 'var(--grey-150)' : alt ? 'var(--surface-sunken)' : 'transparent',
      transition: 'background var(--dur-base) var(--ease-standard)',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, index && /*#__PURE__*/React.createElement(__ds_scope.NumberBadge, null, index), thumb && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 40,
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden',
      background: 'var(--grey-200)',
      flex: '0 0 auto'
    }
  }, typeof thumb === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : thumb), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.01em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      lineHeight: 1.35
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-invert)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "more-horizontal",
    size: 14
  })));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** Floating top bar: detached pill clusters pinned to the page edges, never a full-width band. */
function NavBar({
  brand = 'Halo',
  left,
  items = [],
  onSelect,
  active,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px var(--page-pad-x)',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    variant: "solid",
    size: "sm",
    label: "menu"
  }), left), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    tone: "dark",
    dot: true
  }, brand), items.map(it => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: it,
    tone: "light",
    active: !active || active === it,
    onClick: () => onSelect && onSelect(it)
  }, it))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Ticker.jsx
try { (() => {
/** Full-bleed scrolling marquee of oversized words separated by slashes. */
function Ticker({
  items = [],
  size = 64,
  duration = 'var(--marquee-dur)',
  style = {}
}) {
  const run = items.concat(items);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      width: '100%',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      padding: '10px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 26,
      whiteSpace: 'nowrap',
      animation: `halo-marquee ${duration} linear infinite`
    }
  }, run.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size,
      letterSpacing: '-.035em',
      color: 'var(--text-strong)'
    }
  }, it), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.6,
      color: 'var(--text-faint)',
      fontWeight: 300
    }
  }, "/")))), /*#__PURE__*/React.createElement("style", null, '@keyframes halo-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'));
}
Object.assign(__ds_scope, { Ticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Ticker.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
/** Soft white panel on a grey page. Radius 24, hairline or nothing, shadow only when floating. */
function Card({
  children,
  tone = 'card',
  pad = 'var(--card-pad)',
  radius = 'var(--radius-card)',
  elevated = false,
  hairline = false,
  style = {}
}) {
  const tones = {
    card: {
      background: 'var(--surface-card)'
    },
    sunken: {
      background: 'var(--surface-sunken)'
    },
    tint: {
      background: 'var(--surface-tint)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-invert)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: radius,
      padding: pad,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: [elevated ? 'var(--shadow-md)' : null, hairline ? 'var(--inset-hairline)' : null].filter(Boolean).join(', ') || 'none',
      fontFamily: 'var(--font-text)',
      color: 'var(--text-body)',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassPanel.jsx
try { (() => {
/** Frosted floating panel: app-download bar, cookie strip, overlay toolbars. */
function GlassPanel({
  children,
  tone = 'light',
  radius = 'var(--radius-pill)',
  style = {}
}) {
  const tones = {
    light: {
      background: 'var(--glass-fill)',
      color: 'var(--text-strong)'
    },
    dark: {
      background: 'var(--glass-fill-dark)',
      color: 'var(--text-invert)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      borderRadius: radius,
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      boxShadow: 'var(--shadow-float)',
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MediaFrame.jsx
try { (() => {
/** Image container. Supports the brand's three masks: rounded rectangle, circle, and organic blob. */
function MediaFrame({
  src,
  alt = '',
  shape = 'rounded',
  ratio = '4 / 3',
  scrim = false,
  children,
  style = {}
}) {
  const shapes = {
    rounded: {
      borderRadius: 'var(--radius-media)'
    },
    circle: {
      borderRadius: '50%'
    },
    blob: {
      borderRadius: 'var(--blob)'
    },
    pill: {
      borderRadius: 'var(--radius-pill)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio,
      background: 'linear-gradient(150deg, var(--mist-100), var(--grey-200))',
      ...shapes[shape],
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "image"), scrim && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, children));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatDial.jsx
try { (() => {
/** Hairline circle holding a single figure — "500W input", "0-80% in 50 min". */
function StatDial({
  value,
  unit,
  caption,
  size = 104,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: size * 0.24,
      letterSpacing: '-.03em',
      color: 'var(--text-strong)'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.16
    }
  }, unit)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, caption)));
}
Object.assign(__ds_scope, { StatDial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatDial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Weather.jsx
try { (() => {
(function () {
  const {
    Button,
    IconButton,
    Chip,
    Icon,
    Card,
    MediaFrame,
    GlassPanel
  } = window.HaloDesignSystem_fa75a2;
  function Phone({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 300,
        height: 620,
        borderRadius: 44,
        background: 'var(--grey-950)',
        padding: 8,
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 37,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--sky-200), var(--mist-100) 60%, var(--grey-100))'
      }
    }, children));
  }
  function Today({
    onOpen
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "21:30"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 13
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 13
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, "New York"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, "Today  26.12.23"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 74,
        fontWeight: 300,
        letterSpacing: '-.05em',
        lineHeight: .9,
        color: 'var(--text-strong)'
      }
    }, "10\xB0"), /*#__PURE__*/React.createElement(Chip, {
      tone: "glass",
      icon: "sun",
      style: {
        marginTop: 10
      }
    }, "Clear")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        marginTop: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      tone: "glass",
      icon: "wind"
    }, "3.4 km/h"), /*#__PURE__*/React.createElement(Chip, {
      tone: "glass",
      icon: "droplets"
    }, "78%"), /*#__PURE__*/React.createElement(Chip, {
      tone: "glass",
      icon: "sun"
    }, "UV 2")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 38,
        fontWeight: 400,
        letterSpacing: '-.04em',
        lineHeight: .98,
        marginTop: 22,
        color: 'var(--text-strong)'
      }
    }, "It's", /*#__PURE__*/React.createElement("br", null), "Getting", /*#__PURE__*/React.createElement("br", null), "Cold ", /*#__PURE__*/React.createElement(Icon, {
      name: "thermometer-snowflake",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 6
      }
    }, [['10°', 'Cloudy', 'cloud'], ['12°', 'Clear', 'sun'], ['15°', 'Rain', 'cloud-rain']].map(([t, l, ic]) => /*#__PURE__*/React.createElement(Card, {
      key: l,
      tone: "card",
      pad: "10px",
      radius: "var(--radius-md)",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        letterSpacing: '-.03em',
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 14
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)'
      }
    }, l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      onClick: onOpen,
      icon: "arrow-right"
    }, "add location"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "map",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bar-chart-2",
      size: "sm"
    })));
  }
  function Search({
    onBack
  }) {
    const cities = ['New York, US', 'Lisbon, PT', 'Tokyo, JP', 'Nairobi, KE'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        padding: '14px 16px',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-left",
      size: "sm",
      onClick: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '9px 14px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-card)',
        boxShadow: 'var(--inset-hairline)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Search a city")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, cities.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c,
      pad: "12px 14px",
      radius: "var(--radius-md)",
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-strong)'
      }
    }, c), /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })))));
  }
  window.WeatherApp = function WeatherApp() {
    const [screen, setScreen] = React.useState('today');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }
    }, /*#__PURE__*/React.createElement(Phone, null, screen === 'today' ? /*#__PURE__*/React.createElement(Today, {
      onOpen: () => setScreen('search')
    }) : /*#__PURE__*/React.createElement(Search, {
      onBack: () => setScreen('today')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 320
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 40,
        fontWeight: 300,
        letterSpacing: '-.04em',
        lineHeight: 1,
        color: 'var(--text-strong)'
      }
    }, "Weather ", /*#__PURE__*/React.createElement(Icon, {
      name: "cloud",
      size: 30
    }), " forecast in your ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-pill)',
        padding: '0 12px'
      }
    }, "pocket")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, [['UV index', 'Know the UV index for today, tomorrow and coming days'], ['Animated wind forecast', 'Explore the animated wind forecast for 2 weeks in advance'], ['Hourly precipitation outlook', 'Get hourly precipitation outlook']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(GlassPanel, null, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), " Get the app"))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Weather.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/About.jsx
try { (() => {
(function () {
  const {
    Button,
    IconButton,
    Chip,
    SectionLabel,
    Icon,
    Card,
    MediaFrame,
    Ticker,
    ListRow
  } = window.HaloDesignSystem_fa75a2;
  function AboutSplit() {
    const [tab, setTab] = React.useState('OUR PURPOSE');
    const tabs = ['OUR PURPOSE', 'OUR IDENTITY', 'OUR ROLE'];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px var(--page-pad-x) 10px'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, "about us")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRight: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        padding: '14px var(--page-pad-x)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 38,
        fontWeight: 400,
        letterSpacing: '-.04em',
        color: 'var(--text-strong)'
      }
    }, "CSR"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)',
        lineHeight: 1.3
      }
    }, "Corporate Social", /*#__PURE__*/React.createElement("br", null), "Responsibility"), /*#__PURE__*/React.createElement(Chip, {
      icon: "link",
      style: {
        marginLeft: 'auto'
      }
    }, "csrglobal.com")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '10px var(--page-pad-x) 26px',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      shape: "blob",
      ratio: "4 / 3"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 40,
        bottom: 50,
        width: 86,
        height: 86,
        borderRadius: '50%',
        background: 'var(--surface-card)',
        display: 'grid',
        placeItems: 'center',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)'
      }
    }, "explore")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 26,
        padding: '14px var(--page-pad-x)',
        alignItems: 'baseline'
      }
    }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(t),
      style: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'var(--font-text)',
        fontSize: 14,
        letterSpacing: '-.01em',
        color: tab === t ? 'var(--text-strong)' : 'var(--text-faint)'
      }
    }, t, " ", /*#__PURE__*/React.createElement("sup", {
      style: {
        fontSize: 9
      }
    }, "0", i + 1)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-hairline)',
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        minHeight: 330
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 330,
        height: 330,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 35%, var(--grey-100), var(--grey-200))'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        textAlign: 'center',
        maxWidth: 260
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 500,
        letterSpacing: '-.03em',
        color: 'var(--text-strong)'
      }
    }, tab), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: 'var(--text-body)'
      }
    }, "We help pharmacy teams ", /*#__PURE__*/React.createElement("b", null, "spend less time"), " counting pills so they can spend more with patients."), /*#__PURE__*/React.createElement(Button, {
      icon: "arrow-up-right",
      variant: "outline"
    }, "read more")), /*#__PURE__*/React.createElement(Chip, {
      icon: "activity",
      style: {
        position: 'absolute',
        left: 40,
        top: 46
      }
    }, "build"), /*#__PURE__*/React.createElement(Chip, {
      icon: "pencil",
      style: {
        position: 'absolute',
        right: 40,
        top: 78
      }
    }, "design"), /*#__PURE__*/React.createElement(Chip, {
      icon: "package",
      style: {
        position: 'absolute',
        left: 56,
        bottom: 60
      }
    }, "sell")))));
  }
  function Benefits() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px var(--page-pad-x) 12px'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, "benefits")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 30,
        alignItems: 'center',
        padding: '20px var(--page-pad-x) 30px',
        borderTop: '1px solid var(--border-hairline)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 600,
        letterSpacing: '-.02em',
        lineHeight: 1.08,
        textTransform: 'uppercase',
        color: 'var(--text-strong)'
      }
    }, "Enhance healthcare efficiency"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      shape: "circle",
      ratio: "1 / 1",
      style: {
        width: 200,
        margin: '0 auto'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 40,
        bottom: -6,
        width: 70,
        height: 70,
        borderRadius: '50%',
        background: 'var(--surface-card)',
        display: 'grid',
        placeItems: 'center',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: 'var(--text-muted)'
      }
    }, "explore"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.45,
        color: 'var(--text-body)',
        maxWidth: 260
      }
    }, "By combining robotics and automation, robots are built to assist healthcare workers in ", /*#__PURE__*/React.createElement("b", null, "repetitive tasks"), ", thus freeing time."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, "Read More"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-up-right",
      variant: "solid"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      trailingDot: true
    }, "work with us"))), /*#__PURE__*/React.createElement(ListRow, {
      index: "2",
      alt: true,
      onClick: () => {}
    }, "Streamline healthcare processes and workflows"), /*#__PURE__*/React.createElement(ListRow, {
      index: "3",
      alt: true,
      onClick: () => {},
      style: {
        background: 'var(--grey-100)'
      }
    }, "Improve patient medication safety"));
  }
  window.AboutScreen = function AboutScreen() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AboutSplit, null), /*#__PURE__*/React.createElement(Ticker, {
      items: ['WITSA', 'GLOBAL ICT', 'INNOVATIVE E-HEALTH'],
      size: 56
    }), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 60
      }
    }));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Home.jsx
try { (() => {
(function () {
  const {
    Button,
    IconButton,
    Chip,
    SectionLabel,
    Wordmark,
    Icon,
    Card,
    MediaFrame,
    GlassPanel,
    StatDial,
    NavBar,
    FloatingDock
  } = window.HaloDesignSystem_fa75a2;
  function Hero() {
    const [dock, setDock] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '0 var(--page-pad-x)'
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      brand: "halo",
      items: ['About', 'Services', 'Contact'],
      left: /*#__PURE__*/React.createElement(Chip, {
        tone: "light",
        icon: "search"
      }, "explore")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        height: 420,
        background: 'linear-gradient(150deg, var(--mist-100) 0%, var(--grey-300) 55%, var(--grey-400) 100%)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        color: 'var(--grey-500)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.1em',
        textTransform: 'uppercase'
      }
    }, "hero image"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 26,
        top: 26,
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      tone: "glass",
      dot: true
    }, "efficiency"), /*#__PURE__*/React.createElement(Chip, {
      tone: "glass",
      dot: true
    }, "workflow"), /*#__PURE__*/React.createElement(Chip, {
      tone: "glass",
      dot: true
    }, "safety")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 30,
        top: 30,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-body)',
        maxWidth: 200,
        lineHeight: 1.35
      }
    }, "Combining robotics & automation to build technology solutions."), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-up-right",
      size: "lg",
      variant: "glass"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 26,
        bottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu",
      variant: "solid",
      size: "lg"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      variant: "glass",
      size: "sm"
    })), dock && /*#__PURE__*/React.createElement(FloatingDock, {
      actions: ['smartphone', 'plus', 'download'],
      onDismiss: () => setDock(false)
    }, "Get ", /*#__PURE__*/React.createElement("b", null, "halo"), " for an all-in-one control assistant on your device")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        fontSize: 11,
        color: 'var(--text-muted)',
        padding: '10px 0 0'
      }
    }, "(pharmacy automation system)"));
  }
  function Masthead() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px var(--page-pad-x) 6px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      name: "Autopharma",
      size: 104
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingTop: 10
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'var(--grey-200)',
        marginLeft: i ? -10 : 0,
        boxShadow: '0 0 0 2px var(--surface-page)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, "Our team."), /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 12
    })));
  }
  function Statement() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '80px var(--page-pad-x) 40px'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      tone: "light",
      style: {
        marginBottom: 22
      }
    }, "1\u20133kWh expandable energy storage"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--display-2-size)',
        fontWeight: 300,
        letterSpacing: 'var(--display-2-track)',
        lineHeight: 1.02,
        color: 'var(--text-strong)'
      }
    }, "Providing ", /*#__PURE__*/React.createElement("span", {
      style: {
        textDecoration: 'underline',
        textUnderlineOffset: 6
      }
    }, "stored"), " energy", /*#__PURE__*/React.createElement("br", null), "to take anywhere."));
  }
  function EcosystemGrid() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--page-pad-x)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      icon: "arrow-up-right"
    }, "About mobile universe"), /*#__PURE__*/React.createElement(Chip, null, "Our ecosystem"), /*#__PURE__*/React.createElement(Chip, null, "Our community")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2.1fr 1fr 1fr',
        gap: 'var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      pad: "0",
      style: {
        position: 'relative',
        minHeight: 240
      }
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      ratio: "16 / 9",
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 22,
        top: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: '-.035em',
        lineHeight: 1.02,
        background: 'var(--glass-fill)',
        backdropFilter: 'var(--blur-glass)',
        borderRadius: 'var(--radius-sm)',
        padding: '2px 8px',
        display: 'inline-block',
        color: 'var(--text-strong)'
      }
    }, "Portable &", /*#__PURE__*/React.createElement("br", null), "light"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        maxWidth: 190,
        fontSize: 12,
        background: 'var(--glass-fill)',
        backdropFilter: 'var(--blur-glass)',
        borderRadius: 'var(--radius-sm)',
        padding: '8px 10px'
      }
    }, "Designed so you can take power anywhere."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      icon: "arrow-up-right"
    }, "details"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 20,
        bottom: 18
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-up-right",
      size: "lg",
      variant: "glass"
    })))), /*#__PURE__*/React.createElement(Card, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 400,
        letterSpacing: '-.035em',
        lineHeight: 1,
        color: 'var(--text-strong)'
      }
    }, "Ever-growing ecosystem."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Link with a wide variety of products."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      icon: "sun"
    }, "Explore"))), /*#__PURE__*/React.createElement(Card, {
      tone: "sunken",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      icon: "link"
    }, "Subscribe"), /*#__PURE__*/React.createElement(MediaFrame, {
      shape: "rounded",
      ratio: "1 / 1",
      style: {
        width: '100%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        letterSpacing: '-.03em',
        color: 'var(--text-strong)'
      }
    }, "Stay in loop."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, "An ecosystem to be part of.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "view all")));
  }
  function Solutions() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '80px var(--page-pad-x) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      tone: "light"
    }, "solutions"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 0',
        fontFamily: 'var(--font-display)',
        fontSize: 52,
        fontWeight: 300,
        letterSpacing: '-.04em',
        lineHeight: 1.02,
        color: 'var(--text-strong)'
      }
    }, "Customised energy", /*#__PURE__*/React.createElement("br", null), "management.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: 'var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      ratio: "1 / 1"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: -10,
        alignItems: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(StatDial, {
      value: /*#__PURE__*/React.createElement(Icon, {
        name: "sun",
        size: 22
      }),
      size: 88
    }), /*#__PURE__*/React.createElement(StatDial, {
      value: "500",
      unit: "W",
      caption: "input",
      size: 88,
      style: {
        marginLeft: -14
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        fontWeight: 400,
        letterSpacing: '-.035em',
        color: 'var(--text-strong)'
      }
    }, "Go green!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        maxWidth: 220
      }
    }, "Plug in portable solar panels and get up to 500W input."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, "more about solar charge"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-right",
      variant: "solid"
    })))), [['smart home', 'Charge at home.'], ['car charging', 'Top up on-the-go.']].map(([chip, title]) => /*#__PURE__*/React.createElement(MediaFrame, {
      key: title,
      ratio: "3 / 4",
      scrim: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 12,
        top: 12
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      tone: "glass"
    }, chip)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        bottom: 14,
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontSize: 26,
        letterSpacing: '-.03em',
        lineHeight: 1.05
      }
    }, title)))));
  }
  window.HomeScreen = function HomeScreen() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Masthead, null), /*#__PURE__*/React.createElement(Statement, null), /*#__PURE__*/React.createElement(EcosystemGrid, null), /*#__PURE__*/React.createElement(Solutions, null), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 80
      }
    }));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Projects.jsx
try { (() => {
(function () {
  const {
    Button,
    IconButton,
    Chip,
    SectionLabel,
    Icon,
    Card,
    MediaFrame,
    StatDial
  } = window.HaloDesignSystem_fa75a2;
  window.ProjectsScreen = function ProjectsScreen() {
    const [cat, setCat] = React.useState('management & administration');
    const cats = [['management & administration', 'activity'], ['prescription', 'pencil'], ['packaging', 'package']];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px var(--page-pad-x) 12px'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, "projects")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--gutter)',
        padding: '0 var(--page-pad-x)'
      }
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      ratio: "3 / 4"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 26,
        bottom: 26,
        width: 96,
        height: 96,
        borderRadius: '50%',
        background: 'var(--glass-fill)',
        backdropFilter: 'var(--blur-glass)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)'
      }
    }, "explore")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 18,
        bottom: 18,
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      variant: "glass",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "share-2",
      variant: "glass",
      size: "sm"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 26
      }
    }, cats.map(([c, ic]) => /*#__PURE__*/React.createElement(Chip, {
      key: c,
      icon: ic,
      active: cat === c,
      onClick: () => setCat(c)
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        fontWeight: 600,
        letterSpacing: '-.025em',
        lineHeight: 1.08,
        textTransform: 'uppercase',
        color: 'var(--text-strong)',
        maxWidth: 380
      }
    }, "Outpatient pharmacy automation system"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-left"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-right"
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-body)',
        maxWidth: 300
      }
    }, "Automate pharmacy processes of ", /*#__PURE__*/React.createElement("b", null, "sorting, packing, assembling"), " and dispensing."), /*#__PURE__*/React.createElement(Button, {
      icon: "arrow-up-right"
    }, "read more"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 40,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(StatDial, {
      value: "0\u201380",
      unit: "%",
      caption: "in 50 min"
    }), /*#__PURE__*/React.createElement(StatDial, {
      value: "90",
      unit: "%",
      caption: "of appliances"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 110,
        height: 110,
        borderRadius: '50%',
        background: 'var(--mist-200)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "play",
      variant: "glass"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      trailingDot: true
    }, "contact us")))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 60
      }
    }));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Projects.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.NumberBadge = __ds_scope.NumberBadge;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.FloatingDock = __ds_scope.FloatingDock;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Ticker = __ds_scope.Ticker;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.StatDial = __ds_scope.StatDial;

})();
