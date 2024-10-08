import { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/tables",
    },
    {
      title: "Components",
      href: "/components/accordion",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
  sidebarNav: [
    {
      title: "Cross-Section Properties",
      items: [
        {
          title: "Dimensions and Properties of Shapes",
          href: "/tables/dimensions-and-properties-of-shapes",
          label: "New!",
          items: [],
        },
      ],
    },
    {
      title: "Design of Members for Tension",
      items: [
        {
          title: "Avaiable Strength in Axial Tension",
          href: "/tables/avaiable-strength-in-axial-tension",
          items: [],
        },
      ],
    },
    {
      title: "Design of Members for Compression",
      items: [
        {
          title: "Avaiable Strength in Axial Compression",
          href: "/tables/avaiable-strength-in-axial-compression",
          items: [],
        },
        {
          title: "Stiffness Reduction Factor",
          href: "/tables/stiffness-reduction-factor",
          items: [],
        },
        {
          title: "Avaiable Critical Stress",
          href: "/tables/avaiable-critical-stress",
          items: [],
        },
      ],
    },
    {
      title: "Design of Members for Flexure",
      items: [
        {
          title: "Selection by Zx",
          href: "/tables/selection-by-zx",
          items: [],
        },
        {
          title: "Selection by Zy",
          href: "/tables/selection-by-zy",
          items: [],
        },
        {
          title: "Selection by Ix",
          href: "/tables/selection-by-ix",
          items: [],
        },
        {
          title: "Selection by Iy",
          href: "/tables/selection-by-iy",
          items: [],
        },
        {
          title: "Maximum Total Uniform Load",
          href: "/tables/maximum-total-uniform-load",
          items: [],
        },
        {
          title: "Avaiable Moment vs Unbraced Length",
          href: "/tables/avaiable-moment-vs-unbraced-length",
          items: [],
        },
        {
          title: "Avaiable Shear Stress",
          href: "/tables/avaiable-shear-stress",
          items: [],
        },
      ],
    },
    {
      title: "Design of Members for Combined Forces",
      items: [
        {
          title: "Avaiable Strength for Members Subjected to Combined Forces",
          href: "/tables/avaiable-strength-for-members-subjected-to-combined-forces",
          items: [],
        },
      ],
    },
    {
      title: "Design of Composite Members",
      items: [
        {
          title: "Avaible Strength in Flexure for Composite Members",
          href: "/tables/avaible-strength-in-flexure-for-composite-members",
          items: [],
        },
        {
          title:
            "Lower-Bound Elastic Moment of Inertia for Plastic Composites Secrions ",
          href: "/tables/lower-bound-elastic-moment-of-inertia-for-plastic-composites-secrions",
          items: [],
        },
      ],
    },
    {
      title: "Design of Bolts",
      items: [
        {
          title: "Avaiable Shear Strength of Bolts",
          href: "/tables/avaiable-shear-strength-of-bolts",
          items: [],
        },
        {
          title: "Avaiable Tensile Strength of Bolts",
          href: "/tables/avaiable-tensile-strength-of-bolts",
          items: [],
        },
        {
          title: "Slip-Critical Connections",
          href: "/tables/slip-critical-connections",
          items: [],
        },
        {
          title:
            "Avaiable Bearing and Tearout Strength at Bolts Holes Based on Bolt Spacing ",
          href: "/tables/avaiable-bearing-and-tearout-strength-at-bolts-holes-based-on-bolt-spacing",
          items: [],
        },
        {
          title:
            "Avaiable Bearing and Tearout Strength at Bolts Holes Based on Edge Distance",
          href: "/tables/avaiable-bearing-and-tearout-strength-at-bolts-holes-based-on-edge-distance",
          items: [],
        },
        {
          title: "C Coefficient for Eccentricity Loaded Bolt Groups",
          href: "/tables/c-coefficient-for-eccentricity-loaded-bolt-groups",
          items: [],
        },
      ],
    },
    {
      title: "Design of Welds",
      items: [
        {
          title: "C Coefficient for Concentricity Loaded Weld Groups",
          href: "/tables/c-coefficient-for-concentricity-loaded-weld-groups",
          items: [],
        },
        {
          title: "Electrode Strength Coefficient, C1",
          href: "/tables/electrode-strength-coefficient-c1",
          items: [],
        },
        {
          title: "C Coefficient for Eccentricity Loaded Weld Groups",
          href: "/tables/c-coefficient-for-eccentricity-loaded-weld-groups",
          items: [],
        },
      ],
    },
    {
      title: "Design of Connecting Elements",
      items: [
        {
          title: "Reduction in Area for Holes",
          href: "/tables/reduction-in-area-for-holes",
          items: [],
        },
        {
          title: "Elastic Section Modulus for Coped I-Shapes",
          href: "/tables/elastic-section-modulus-for-coped-i-shapes",
          items: [],
        },
        {
          title: "Block Shear:Tension Rupture Component",
          href: "/tables/block-shear-tension-rupture-component",
          items: [],
        },
        {
          title: "Block Shear:Shear Yielding Component",
          href: "/tables/block-shear-shear-yielding-component",
          items: [],
        },
        {
          title: "Block Shear:Shear Rupture Component",
          href: "/tables/block-shear-shear-rupture-component",
          items: [],
        },
        {
          title: "Beam Bearing Constants",
          href: "/tables/beam-bearing-constants",
          items: [],
        },
      ],
    },
  ],
}
