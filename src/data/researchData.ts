import {
  ResearchArea,
  ResearchDirection,
  ResearchNote,
  ComputationalProject,
  RoadmapNode,
  ResearchQuestion,
  TimelineItem,
  PublicationItem
} from '../types';

export const RESEARCHER_INFO = {
  name: "Snehasis Sarkar",
  title: "Theoretical Physics • Mathematical Physics • Quantum Field Theory",
  role: "Theoretical & Mathematical Physics Researcher",
  institution: "Faculty of Mechanics and Mathematics, Lomonosov Moscow State University (2024–2026)",
  affiliation: "Faculty of Mechanics and Mathematics, Lomonosov Moscow State University",
  location: "Delhi, India",
  tagline: "Exploring fundamental questions at the intersection of quantum field theory, gravity, and mathematical physics.",
  bio: "Theoretical and mathematical physicist with dual graduate degrees in Physics (2022–2024) and Master's in Mathematical Physics from the Faculty of Mechanics and Mathematics, Lomonosov Moscow State University (2024–2026). Focused on gauge/gravity duality, black-hole horizon dynamics, differential geometric methods, and correlation functions in curved spacetime. Working to understand how quantum information, thermodynamic chaos, and field-theoretic boundary correlators probe the microstates and horizon physics of gravitational backgrounds.",
  email: "snehasissarkar29@gmail.com",
  links: {
    github: "https://github.com",
    arxiv: "https://arxiv.org",
    scholar: "https://scholar.google.com",
    orcid: "https://orcid.org",
    linkedin: "https://linkedin.com",
    inspireHep: "https://inspirehep.net"
  }
};

export const ABOUT_CONTENT = {
  bio: "I am a theoretical physics graduate working on quantum field theory, holography, and black hole horizon dynamics. My core goal is to understand how the microstates of quantum gravity and the thermodynamics of spacetime horizons are imprinted onto the non-perturbative structure of boundary correlation functions.",
  philosophy: "Nature exhibits profound mathematical simplicity through symmetries and variational principles. I believe that deep progress in fundamental physics arises from coupling rigorous mathematical formulations—such as differential geometry, complex analysis, and operator algebras—with physical intuition regarding causality and information conservation.",
  perspective: "I approach theoretical physics from an analytic and geometric perspective: viewing gauge fields as connections on fiber bundles, gravitational dynamics through asymptotic symmetries and geodesics, and quantum chaos through complex frequency pole-skipping. Complementing analytical derivations with numerical solutions ensures precision and provides insight into non-linear regimes.",
  longTermGoals: "Pursuing PhD-level and postdoctoral research in theoretical high-energy physics, with a focused trajectory toward bulk reconstruction, quantum extremal surfaces, chaotic scrambling in black hole horizons, and the holographic characterization of spacetime singularities."
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "qft",
    title: "Quantum Field Theory",
    shortDesc: "Perturbative and non-perturbative formulations of interacting fields, renormalization group dynamics, and conformal field theories.",
    formula: "Z[J] = \\int \\mathcal{D}\\phi \\, \\exp\\left(i \\int d^d x \\, [\\mathcal{L}(\\phi) + J\\phi]\\right)",
    formulaDesc: "Path integral generating functional for quantum correlation functions",
    subtopics: [
      "Quantum fields and interactions",
      "Perturbative and non-perturbative methods",
      "Correlation functions and Wightman axioms",
      "Renormalization & Wilsonian effective actions",
      "Effective field theories (EFT)",
      "Conformal field theory & Bootstrap"
    ],
    keyTechniques: [
      "Feynman diagrammatics",
      "Functional determinants",
      "Conformal blocks decomposition",
      "Operator Product Expansion (OPE)"
    ],
    accent: "from-blue-500/20 to-indigo-500/10"
  },
  {
    id: "holography",
    title: "Holography & AdS/CFT",
    shortDesc: "The equivalence between gravitational dynamics in Anti-de Sitter spacetime and conformal field theories on its boundary.",
    formula: "\\langle \\exp\\left( \\int d^d x \\, \\phi_0(x) \\mathcal{O}(x) \\right) \\rangle_{\\text{CFT}} = Z_{\\text{sugra}}[\\phi \\to \\phi_0]",
    formulaDesc: "Gubser-Klebanov-Polyakov-Witten (GKPW) holographic dictionary",
    subtopics: [
      "Gauge/gravity duality",
      "Holographic correlation functions",
      "Scalar fields in AdS & wave equations",
      "Operator mixing and RG flows",
      "Deformed gravitational backgrounds",
      "Black-hole horizon physics & Quasinormal modes",
      "Quantum information aspects of holography"
    ],
    keyTechniques: [
      "Boundary limits of bulk Green's functions",
      "Infalling Eddington-Finkelstein coordinates",
      "Ryu-Takayanagi surfaces",
      "Pole-skipping at Matsubara points"
    ],
    accent: "from-teal-500/20 to-emerald-500/10"
  },
  {
    id: "gravitation",
    title: "Gravitation & Mathematical Physics",
    shortDesc: "Exact classical and quantum geometric frameworks, differential geometry, Lie algebras, and gravitational singularities.",
    formula: "R_{\\mu\\nu} - \\frac{1}{2} R g_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}",
    formulaDesc: "Einstein field equations with negative cosmological constant (AdS)",
    subtopics: [
      "General relativity & exact solutions",
      "Differential geometry & connections",
      "Geometric mechanics & Hamiltonian dynamics",
      "Lie groups & Lie algebra representation theory",
      "Geometric methods in physics & Quantization",
      "Quantum gravity & Black hole thermodynamics"
    ],
    keyTechniques: [
      "Killing vector symmetries",
      "Geodesic congruence & Raychaudhuri equation",
      "Exterior calculus and differential forms",
      "Asymptotic boundary symmetries (BMS / Virasoro)"
    ],
    accent: "from-purple-500/20 to-indigo-500/10"
  },
  {
    id: "quantum-info",
    title: "Quantum Information & Gravity",
    shortDesc: "Entanglement measures in relativistic systems, open quantum dynamics, holographic entanglement entropy, and the information paradox.",
    formula: "S(A) = \\frac{\\text{Area}(\\gamma_A)}{4 G_N} + S_{\\text{bulk}}(\\Sigma_A)",
    formulaDesc: "Quantum Extremal Surface (QES) generalized entropy formula",
    subtopics: [
      "Quantum information in relativistic settings",
      "Open quantum systems & Lindblad master equations",
      "Entanglement in quantum field theory",
      "Quantum information aspects of gravity"
    ],
    keyTechniques: [
      "Von Neumann & Relative entropy",
      "Modular Hamiltonians",
      "Replicas & twist operators",
      "Out-of-time-order correlators (OTOC)"
    ],
    accent: "from-violet-500/20 to-pink-500/10"
  }
];

export const RESEARCH_DIRECTIONS: ResearchDirection[] = [
  {
    id: "dir-1",
    number: 1,
    title: "Quantum Field Theory",
    subtitle: "From Operator Formalisms to Bootstrap and Anomalies",
    accentColor: "border-blue-500/40 text-blue-400",
    overview: "Developing comprehensive proficiency in both continuous path integral formulations and non-perturbative algebraic constraints governing relativistic quantum systems.",
    topics: [
      {
        id: "dir1-path-integrals",
        title: "Path Integrals",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Active Research",
        description: "Functional integration over field configurations as the unifying bridge between quantum mechanics, statistical mechanics, and gauge field dynamics.",
        whyInteresting: "Allows non-perturbative saddle-point approximations (instantons, solitons) and establishes the geometric dictionary linking classical action paths to quantum transition amplitudes.",
        prerequisites: ["Quantum Mechanics (Hilbert spaces, Propagators)", "Functional Analysis", "Gaussian Integrals"],
        suggestedTools: ["Feynman path integral in phase space", "Wick rotation", "Stationary phase approximation", "Grassmann integration"],
        possibleQuestions: [
          "How do measure ambiguities manifest in path integrals over non-trivial metric manifolds?",
          "Can path integral localization yield exact non-perturbative partition functions in lower-dimensional theories?"
        ],
        latexFormula: "K(x_b, t_b; x_a, t_a) = \\int \\mathcal{D}x(t) \\, \\exp\\left( \\frac{i}{\\hbar} \\int_{t_a}^{t_b} L(x, \\dot{x}) dt \\right)"
      },
      {
        id: "dir1-feynman",
        title: "Feynman Diagrams",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Completed",
        description: "Perturbative diagrammatic expansions, tree-level scattering amplitudes, and multi-loop integration techniques.",
        whyInteresting: "The primary computational engine of high-energy physics, revealing deep algebraic structures such as Grassmannians and positive geometries in scattering amplitudes.",
        prerequisites: ["Canonical Quantization", "Wick's Theorem", "S-Matrix Theory"],
        suggestedTools: ["Feynman parameters", "Dimensional regularization", "Passarino-Veltman reduction", "Mandelstam variables"],
        possibleQuestions: [
          "How do multi-loop infrared divergences cancel cleanly in inclusive observable rates?",
          "Can modern on-shell recursion relations (BCFW) bypass off-shell gauge redundancy entirely?"
        ],
        latexFormula: "\\frac{1}{A_1 A_2 \\dots A_n} = (n-1)! \\int_0^1 dx_1 \\dots dx_n \\, \\frac{\\delta(1 - \\sum x_i)}{(\\sum x_i A_i)^n}"
      },
      {
        id: "dir1-renorm",
        title: "Renormalization",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Active Research",
        description: "Treatment of ultraviolet divergences, counterterms, minimal subtraction schemes, and beta-function calculations.",
        whyInteresting: "Transforms apparent infinities into physical running coupling constants, demonstrating that quantum field theories are scale-dependent effective descriptions.",
        prerequisites: ["Feynman Diagrams", "Complex Analysis (Poles, Residues)", "Dimensional Regularization"],
        suggestedTools: ["Callan-Symanzik equation", "MS / MS-bar schemes", "Ward identity constraints", "Renormalization group flow"],
        possibleQuestions: [
          "What criteria ensure asymptotic safety in non-renormalizable field theories?",
          "How do non-perturbative fixed points manifest in the exact renormalization group (Wetterich equation)?"
        ],
        latexFormula: "\\beta(g) = \\mu \\frac{\\partial g}{\\partial \\mu} = -\\frac{b_0}{(4\\pi)^2} g^3 + \\mathcal{O}(g^5)"
      },
      {
        id: "dir1-eft",
        title: "Effective Field Theory",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Active Research",
        description: "Systematic organization of quantum effects through operator dimension hierarchies, Wilsonian matching, and integrating out heavy degrees of freedom.",
        whyInteresting: "Separates long-distance physics from unknown UV completions, forming the rigorous language of particle phenomenology and condensed matter systems.",
        prerequisites: ["Renormalization", "Gauge Theories", "Power Counting"],
        suggestedTools: ["Higher-dimensional operator bases", "Wilsonian effective potential", "Matching conditions at energy thresholds"],
        possibleQuestions: [
          "What positivity bounds on higher-derivative EFT coefficients are imposed by causality and unitarity in the UV?",
          "How does EFT power counting adjust in non-relativistic or extreme gravitational media?"
        ],
        latexFormula: "\\mathcal{L}_{\\text{eff}} = \\mathcal{L}_{\\le 4} + \\sum_{i} \\frac{c_i}{\\Lambda^{d_i - 4}} \\mathcal{O}_i^{(d_i)}"
      },
      {
        id: "dir1-nonperturbative",
        title: "Non-perturbative QFT",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Exploring",
        description: "Topological solitons, instantons, anomalies, confinement, and lattice gauge theory.",
        whyInteresting: "Most physically rich phenomena in nature—including the mass of nucleons, colour confinement, and chiral symmetry breaking—lie beyond perturbation theory.",
        prerequisites: ["Differential Geometry", "Homotopy Groups", "Path Integrals"],
        suggestedTools: ["BPST Instantons", "WKB semiclassical analysis", "Exact dualities (Seiberg-Witten)", "Lattice discretization"],
        possibleQuestions: [
          "Can instanton-anti-instanton configurations be resummed unambiguously via resurgence theory?",
          "What is the exact microscopic mechanism for color confinement in 4D Yang-Mills theory?"
        ],
        latexFormula: "Q = \\frac{1}{32\\pi^2} \\int d^4 x \\, \\epsilon^{\\mu\\nu\\rho\\sigma} \\text{Tr}(F_{\\mu\\nu} F_{\\rho\\sigma}) \\in \\mathbb{Z}"
      },
      {
        id: "dir1-cft",
        title: "Conformal Field Theory",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Active Research",
        description: "Scale-invariant quantum theories governed by conformal algebra $so(d, 2)$, Virasoro symmetry in 2D, and primary operators.",
        whyInteresting: "Describes critical phenomena and second-order phase transitions, and serves as the boundary theory in AdS/CFT duality.",
        prerequisites: ["Group Theory", "Complex Analysis", "Correlation Functions"],
        suggestedTools: ["Radial quantization", "Virasoro generators $L_n$", "Conformal Ward identities", "State-operator correspondence"],
        possibleQuestions: [
          "How are boundary conformal data mapped to bulk geometric structures under the holographic dictionary?",
          "What are the precise bounds on central charges in higher-dimensional CFTs?"
        ],
        latexFormula: "[L_m, L_n] = (m - n) L_{m+n} + \\frac{c}{12} m(m^2 - 1) \\delta_{m+n, 0}"
      },
      {
        id: "dir1-ope",
        title: "Operator Product Expansion",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Learned",
        description: "Expansion of products of local operators at short distances into a convergent sum of local operators multiplied by c-number coefficients.",
        whyInteresting: "Turns the non-perturbative calculation of n-point correlation functions into algebraic combinations of known 3-point structure constants.",
        prerequisites: ["Conformal Field Theory", "Wightman Axioms", "Primary Operators"],
        suggestedTools: ["OPE coefficients $C_{ijk}$", "Conformal blocks", "Crossing symmetry equations"],
        possibleQuestions: [
          "Can universal high-energy spectral densities be extracted from light-cone OPE limits?",
          "How does the OPE converge in Lorentzian signatures near null lightcones?"
        ],
        latexFormula: "\\mathcal{O}_i(x) \\mathcal{O}_j(0) = \\sum_k \\frac{C_{ijk}}{|x|^{\\Delta_i + \\Delta_j - \\Delta_k}} \\mathcal{O}_k(0)"
      },
      {
        id: "dir1-tqft",
        title: "Topological Quantum Field Theory",
        directionId: "dir-1",
        directionName: "Quantum Field Theory",
        status: "Exploring",
        description: "Metric-independent quantum field theories sensitive solely to global topology, knot invariants, and modular tensor categories.",
        whyInteresting: "Bridges modern algebraic topology, knot polynomials (Jones polynomial), Chern-Simons gauge theory, and topological quantum computing.",
        prerequisites: ["Differential Topology", "Chern-Simons Theory", "Category Theory"],
        suggestedTools: ["Witten-Reshetikhin-Turaev invariants", "Cobordism hypothesis", "Wilson loop braids"],
        possibleQuestions: [
          "How does 3D Chern-Simons theory relate holographically to 2D chiral WZW boundary modes?",
          "Can higher categorical symmetries classify non-invertible topological defects in 4D gauge theories?"
        ],
        latexFormula: "S_{\\text{CS}} = \\frac{k}{4\\pi} \\int_M \\text{Tr}\\left( A \\wedge dA + \\frac{2}{3} A \\wedge A \\wedge A \\right)"
      }
    ]
  },
  {
    id: "dir-2",
    number: 2,
    title: "Holography and Quantum Gravity",
    subtitle: "Spacetime Emergence, Horizon Dynamics & Quantum Information",
    accentColor: "border-teal-500/40 text-teal-400",
    overview: "Investigating the holographic encoding of bulk spacetime geometry, black-hole thermalization, and horizon singularities in boundary CFT correlators.",
    topics: [
      {
        id: "dir2-adscft",
        title: "AdS/CFT Correspondence",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "The holographic duality equating IIB superstring theory on $AdS_5 \\times S^5$ with 4D $\\mathcal{N}=4$ Super Yang-Mills at large N.",
        whyInteresting: "Provides the first concrete, non-perturbative formulation of quantum gravity where bulk gravity is an emergent manifestation of boundary entanglement.",
        prerequisites: ["General Relativity", "Conformal Field Theory", "Large N Gauge Theories"],
        suggestedTools: ["GKPW prescription", "Extrapolate dictionary", "Fefferman-Graham coordinate expansions", "Bulk-to-boundary propagators"],
        possibleQuestions: [
          "How does bulk locality break down at the string scale in strongly coupled CFTs?",
          "What is the dual mechanism for resolving the interior curvature singularity of black holes?"
        ],
        latexFormula: "ds^2 = \\frac{L^2}{z^2} \\left( dz^2 + \\eta_{\\mu\\nu} dx^\\mu dx^\\nu \\right)"
      },
      {
        id: "dir2-correlators",
        title: "Holographic Correlation Functions",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "Computation of boundary n-point real-time retarded Green's functions by solving wave equations in asymptotically AdS geometries.",
        whyInteresting: "Directly connects macroscopic gravitational response (waves falling into horizons) with boundary transport coefficients, viscosity, and thermal correlators.",
        prerequisites: ["Curved Space Wave Equations", "Green's Function Theory", "Boundary Value Problems"],
        suggestedTools: ["Infalling boundary conditions at horizon", "Son-Starinets prescription", "Hypergeometric solutions in BTZ"],
        possibleQuestions: [
          "Can real-time retarded correlators reveal non-perturbative microstate structure in thermal states?",
          "How do multi-point correlators detect shockwave interactions near horizons?"
        ],
        latexFormula: "G^R(k) = -2\\nu \\left( \\frac{A_-}{A_+} \\right) + \\dots"
      },
      {
        id: "dir2-bh-thermo",
        title: "Black-Hole Thermodynamics",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "Bekenstein-Hawking entropy, Hawking radiation, Euclidean path integral action, and generalized second law of thermodynamics.",
        whyInteresting: "Unifies gravity, thermodynamics, and quantum mechanics, suggesting that black hole horizons are fundamental thermal systems with finite entropy.",
        prerequisites: ["General Relativity", "Statistical Mechanics", "Euclidean Field Theory"],
        suggestedTools: ["Gibbons-Hawking-York boundary term", "Conical singularity avoidance", "Bogoliubov transformations", "Wald entropy formula"],
        possibleQuestions: [
          "How do non-perturbative Euclidean gravitational path integrals (spacetime wormholes) resolve the Page curve?",
          "What microstates account for the macroscopic Bekenstein-Hawking entropy in non-supersymmetric backgrounds?"
        ],
        latexFormula: "S_{\\text{BH}} = \\frac{k_B c^3 A}{4 G_N \\hbar}, \\quad T_H = \\frac{\\hbar \\kappa}{2\\pi k_B c}"
      },
      {
        id: "dir2-curved-qft",
        title: "Quantum Fields in Curved Spacetime",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "Quantization of field operators on fixed background metrics without Poincaré invariance, mode expansions, and ambiguous vacua.",
        whyInteresting: "Reveals that the particle concept is observer-dependent (Unruh effect, Hawking radiation) and governs early-universe inflationary cosmological perturbations.",
        prerequisites: ["Quantum Field Theory", "Riemannian Geometry", "Differential Equations"],
        suggestedTools: ["Bogoliubov coefficients $\\alpha_{ij}, \\beta_{ij}$", "Hadamard states", "Stress-energy tensor renormalization $\\langle T_{\\mu\\nu} \\rangle$"],
        possibleQuestions: [
          "How does backreaction of the renormalized stress tensor alter the horizon structure during evaporation?",
          "What is the global algebraic structure of operator algebras in causally restricted wedges?"
        ],
        latexFormula: "\\hat{a}_i = \\sum_j \\left( \\alpha_{ij}^* \\hat{b}_j - \\beta_{ij}^* \\hat{b}_j^\\dagger \\right)"
      },
      {
        id: "dir2-qnm",
        title: "Quasinormal Modes",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "Complex characteristic frequencies of dissipative perturbations in black-hole spacetimes under infalling and outgoing boundary conditions.",
        whyInteresting: "Dually represent the relaxation timescale of thermal perturbations and hydrodynamics in boundary quantum field theories.",
        prerequisites: ["Scattering Theory", "Complex Analysis", "Numerical Shooting Methods"],
        suggestedTools: ["Continued fraction methods (Leaver)", "Horowitz-Hubeny numerical technique", "Exact analytic solutions in 2+1D BTZ"],
        possibleQuestions: [
          "How does the quasinormal mode spectrum reflect the quantum chaos Lyapunov exponent?",
          "Can overtone instability explain non-perturbative horizon restructuring?"
        ],
        latexFormula: "\\Phi(t, r, x) \\sim e^{-i \\omega_n t} f_n(r) e^{i k x}, \\quad \\omega_n \\in \\mathbb{C}"
      },
      {
        id: "dir2-pole-skipping",
        title: "Pole-Skipping",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "The remarkable phenomenon where lines of poles and zeros in energy-momentum and matter retarded correlators intersect at complex frequencies, yielding a non-unique correlator.",
        whyInteresting: "Directly relates horizon dynamics, classical chaos (Lyapunov exponent $\\lambda_L = 2\\pi T$ and butterfly velocity $v_B$), and hydrodynamic energy transport.",
        prerequisites: ["Holographic Correlators", "BTZ Geometry", "Near-Horizon Expansions"],
        suggestedTools: ["Eddington-Finkelstein coordinates", "Near-horizon Einstein equation decoupling", "Fuchsian differential equations"],
        possibleQuestions: [
          "Does pole-skipping hold universally for higher-spin and massive scalar fields across rotating backgrounds?",
          "How is pole-skipping modified in theories with higher-curvature stringy corrections?"
        ],
        latexFormula: "\\omega_* = -i 2\\pi T, \\quad k_* = \\pm i \\frac{2\\pi T}{v_B}, \\quad G^R(\\omega_*, k_*) = \\frac{0}{0}"
      },
      {
        id: "dir2-transport",
        title: "Holographic Transport",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Learning",
        description: "Calculation of shear viscosity $\\eta/s = 1/(4\\pi)$, electrical conductivity, and thermoelectric transport in strongly coupled plasma duals.",
        whyInteresting: "Explained the 'nearly perfect fluid' behaviour discovered experimentally in Quark-Gluon Plasma at RHIC and LHC.",
        prerequisites: ["Hydrodynamics", "Kubo Formulas", "Black Hole Horizons"],
        suggestedTools: ["Kubo formulas $\\eta = \\lim_{\\omega \\to 0} \\frac{1}{\\omega} \\text{Im}\\, G^R_{xy, xy}(\\omega, 0)$", "Membrane paradigm", "Stau-Kovtun-Son-Starinets bound"],
        possibleQuestions: [
          "What microphysical mechanisms violate the KSS viscosity-to-entropy bound in anisotropic geometries?",
          "How do hydrodynamic attractors form from non-equilibrium holographic collapse?"
        ],
        latexFormula: "\\frac{\\eta}{s} = \\frac{\\hbar}{4\\pi k_B}"
      },
      {
        id: "dir2-entanglement",
        title: "Entanglement Entropy",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "Geometric computation of boundary spatial entanglement via minimal bulk surfaces (Ryu-Takayanagi and Hubeny-Rangamani-Takayanagi proposals).",
        whyInteresting: "Demonstrates that bulk space is geometrically stitched together by boundary quantum entanglement ('ER = EPR').",
        prerequisites: ["Quantum Information", "Differential Geometry", "Minimal Surfaces"],
        suggestedTools: ["Ryu-Takayanagi formula", "Replica trick in CFT", "HRT covariant generalization", "Subregion-subregion duality"],
        possibleQuestions: [
          "How does the entanglement wedge reconstruct bulk operators deep behind the horizon?",
          "Can non-vacuum state entanglement surfaces probe cosmological singularities?"
        ],
        latexFormula: "S_A = \\frac{\\text{Area}(\\gamma_A)}{4 G_N}"
      },
      {
        id: "dir2-qes",
        title: "Quantum Extremal Surfaces",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Learning",
        description: "Extremization of the generalized entropy functional combining classical minimal surface area and bulk quantum field entanglement entropy.",
        whyInteresting: "The critical breakthrough yielding a unitary Page curve for evaporating black holes in semiclassical gravity.",
        prerequisites: ["Black Hole Thermodynamics", "Entanglement Entropy", "Quantum Fields in Curved Spacetime"],
        suggestedTools: ["Island formula", "Generalized entropy $S_{\\text{gen}}$", "Euclidean replica wormholes"],
        possibleQuestions: [
          "What is the exact microscopic CFT Hilbert space decomposition corresponding to bulk islands?",
          "Does the island rule extend rigorously to asymptotically flat, non-AdS black holes?"
        ],
        latexFormula: "S(R) = \\min \\text{ext}_I \\left[ \\frac{\\text{Area}(\\partial I)}{4 G_N} + S_{\\text{bulk}}(R \\cup I) \\right]"
      },
      {
        id: "dir2-bulk-reconstruction",
        title: "Bulk Reconstruction",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Exploring",
        description: "Constructing local quantum operators in the bulk interior from non-local smeared boundary CFT operators (HKLL prescription and quantum error-correcting codes).",
        whyInteresting: "Explains how the bulk radial dimension emerges as an energy scale in the boundary and why bulk locality is protected against boundary erasure.",
        prerequisites: ["AdS/CFT", "Green's Functions", "Quantum Error Correction"],
        suggestedTools: ["HKLL smearing functions", "Modular flow", "Entanglement wedge reconstruction", "Tensor networks"],
        possibleQuestions: [
          "Can bulk operators inside the black hole interior be reconstructed without state-dependent operators?",
          "How does quantum error correction protect bulk spacetime against boundary erasures?"
        ],
        latexFormula: "\\Phi_{\\text{bulk}}(z, t, x) = \\int d t' d x' \\, K(z, t, x; t', x') \\mathcal{O}_{\\text{CFT}}(t', x')"
      },
      {
        id: "dir2-info-paradox",
        title: "Information Paradox",
        directionId: "dir-2",
        directionName: "Holography and Quantum Gravity",
        status: "Active Research",
        description: "Hawking's 1976 paradox stating that black hole evaporation turns pure quantum states into mixed thermal states, violating quantum mechanical unitarity.",
        whyInteresting: "The central foundational puzzle of modern theoretical physics forcing the reconciliation of general relativity and quantum theory.",
        prerequisites: ["Hawking Radiation", "Quantum Mechanics (Density Matrices)", "Entanglement Entropy"],
        suggestedTools: ["Page curve", "Density matrix purification", "Replica wormholes", "Firewall paradox (AMPS)"],
        possibleQuestions: [
          "How does the interior quantum state emerge in the asymptotic radiation without superluminal signalling?",
          "Can non-perturbative topology changes preserve purity in gravitational path integrals?"
        ],
        latexFormula: "\\rho_{\\text{pure}} = |\\psi\\rangle\\langle\\psi| \\xrightarrow{\\text{Hawking?}} \\rho_{\\text{thermal}} = \\frac{1}{Z} e^{-\\beta H}"
      }
    ]
  },
  {
    id: "dir-3",
    number: 3,
    title: "Mathematical Physics",
    subtitle: "Geometry, Lie Algebras, and Modern Quantization",
    accentColor: "border-purple-500/40 text-purple-400",
    overview: "Rigorous mathematical formulations of physical mechanics, differential geometric structures of spacetime, representation theory, and geometric quantization.",
    topics: [
      {
        id: "dir3-diffgeom",
        title: "Differential Geometry",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Completed",
        description: "Smooth manifolds, tangent bundles, vector fields, differential forms, exterior derivatives, and Stokes' theorem.",
        whyInteresting: "The indispensable mathematical language of classical gravitation, gauge theory, and modern field theories.",
        prerequisites: ["Multivariable Calculus", "Linear Algebra", "Point-Set Topology"],
        suggestedTools: ["Differential forms", "Lie derivative", "Interior product", "De Rham cohomology"],
        possibleQuestions: [
          "How do non-trivial topological cohomology classes obstruct global gauge fixing?",
          "What is the differential geometric description of singular spacetime boundaries?"
        ],
        latexFormula: "d(\\omega \\wedge \\eta) = d\\omega \\wedge \\eta + (-1)^p \\omega \\wedge d\\eta, \\quad \\int_{\\partial M} \\omega = \\int_M d\\omega"
      },
      {
        id: "dir3-riemannian",
        title: "Riemannian and Pseudo-Riemannian Geometry",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Active Research",
        description: "Metric tensors, Levi-Civita connection, Riemann curvature tensor, Ricci curvature, geodesics, and Lorentzian signatures.",
        whyInteresting: "Dictates the curvature of spacetime and governs gravitational wave propagation, horizon thermodynamics, and cosmological expansion.",
        prerequisites: ["Differential Geometry", "Tensor Calculus"],
        suggestedTools: ["Christoffel symbols", "Riemann and Weyl tensors", "Killing vectors", "Geodesic deviation equation"],
        possibleQuestions: [
          "Can the Petrov classification of Weyl tensors illuminate asymptotic holographic boundaries?",
          "Under what conditions do Lorentzian spacetimes admit smooth global Cauchy surfaces?"
        ],
        latexFormula: "R^\\rho{}_{\\sigma\\mu\\nu} = \\partial_\\mu \\Gamma^\\rho_{\\nu\\sigma} - \\partial_\\nu \\Gamma^\\rho_{\\mu\\sigma} + \\Gamma^\\rho_{\\mu\\lambda} \\Gamma^\\lambda_{\\nu\\sigma} - \\Gamma^\\rho_{\\nu\\lambda} \\Gamma^\\lambda_{\\mu\\sigma}"
      },
      {
        id: "dir3-lie",
        title: "Lie Groups and Lie Algebras",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Completed",
        description: "Continuous symmetry groups ($SO(N)$, $SU(N)$, $SL(2, \\mathbb{R})$), exponential maps, Lie brackets, and root systems.",
        whyInteresting: "Underpins all gauge symmetries of the Standard Model, spacetime isometry groups, and conformal algebras.",
        prerequisites: ["Abstract Algebra", "Smooth Manifolds", "Linear Algebra"],
        suggestedTools: ["Baker-Campbell-Hausdorff formula", "Killing-Cartan metric", "Dynkin diagrams", "Structure constants $f^{abc}$"],
        possibleQuestions: [
          "How do infinite-dimensional Lie algebras (e.g. affine Kac-Moody and Virasoro) organize 2D CFT spectra?",
          "What is the role of exceptional Lie groups ($E_8$) in unified supergravity models?"
        ],
        latexFormula: "[T^a, T^b] = i f^{abc} T^c, \\quad \\exp(X)\\exp(Y) = \\exp\\left(X + Y + \\frac{1}{2}[X, Y] + \\dots\\right)"
      },
      {
        id: "dir3-rep-theory",
        title: "Representation Theory",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Active Research",
        description: "Linear representations of Lie groups and algebras on vector spaces, highest-weight modules, and Casimir operators.",
        whyInteresting: "Classifies all fundamental particles (as irreducible unitary representations of the Poincaré group via Wigner's classification).",
        prerequisites: ["Lie Algebras", "Hilbert Spaces"],
        suggestedTools: ["Weights and roots", "Schur's lemmas", "Casimir invariants", "Induced representations"],
        possibleQuestions: [
          "How do non-unitary representations of non-compact groups govern Lorentzian conformal bootstrap?",
          "What are the decomposition rules for tensor products of infinite-dimensional Virasoro representations?"
        ],
        latexFormula: "C_2 |\\psi\\rangle = j(j+1) |\\psi\\rangle, \\quad \\mathcal{H} = \\bigoplus_\\lambda V_\\lambda^{\\oplus m_\\lambda}"
      },
      {
        id: "dir3-func-analysis",
        title: "Functional Analysis",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Learning",
        description: "Infinite-dimensional Hilbert and Banach spaces, self-adjoint unbounded operators, spectral theory, and distribution theory.",
        whyInteresting: "Provides the mathematical rigor needed to make sense of quantum mechanical observables, continuous spectra, and delta-function states.",
        prerequisites: ["Real Analysis", "Topology", "Linear Algebra"],
        suggestedTools: ["Spectral theorem", "Rigged Hilbert spaces", "Sobolev spaces", "Fourier transforms of distributions"],
        possibleQuestions: [
          "How does self-adjoint extension theory classify boundary conditions in curved backgrounds with singularities?",
          "Under what functional analytic bounds can operator product expansions be proven strictly convergent?"
        ],
        latexFormula: "A = \\int_{\\sigma(A)} \\lambda \\, dE(\\lambda)"
      },
      {
        id: "dir3-operator-algebras",
        title: "Operator Algebras",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Exploring",
        description: "$C^*$-algebras, von Neumann algebras (Type I, II, and III), modular theory (Tomita-Takesaki), and algebraic QFT.",
        whyInteresting: "Type $\\text{III}_1$ factors represent the true local algebra of observables in relativistic quantum field theory where local density matrices do not exist.",
        prerequisites: ["Functional Analysis", "Quantum Mechanics", "Spectral Theory"],
        suggestedTools: ["Tomita-Takesaki modular operator $\\Delta$", "Modular Hamiltonian $K = -\\log \\Delta$", "KMS condition", "GNS construction"],
        possibleQuestions: [
          "How does the large-N emergence of Type $\\text{II}_\\infty$ factors formalize the generalized entropy in black hole horizons?",
          "Can Tomita-Takesaki modular flow rigorously define bulk time in holography?"
        ],
        latexFormula: "\\Delta^{it} \\mathcal{M} \\Delta^{-it} = \\mathcal{M}, \\quad \\sigma_t^\\omega(A) = \\Delta^{it} A \\Delta^{-it}"
      },
      {
        id: "dir3-geom-quant",
        title: "Geometric Quantization",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Exploring",
        description: "Systematic geometric procedure to construct a quantum Hilbert space and operator algebra directly from a classical phase space manifold.",
        whyInteresting: "Replaces heuristic canonical quantization with a coordinate-independent geometric path using line bundles and polarizations.",
        prerequisites: ["Differential Geometry", "Complex Manifolds", "Fiber Bundles"],
        suggestedTools: ["Prequantum line bundle", "Curvature 2-form $F = -i\\omega$", "Polarizations (Kähler, real)", "Metalinear structures"],
        possibleQuestions: [
          "Can geometric quantization resolve operator ordering ambiguities for non-quadratic Hamiltonians?",
          "How does geometric quantization of coadjoint orbits reconstruct particle representations?"
        ],
        latexFormula: "\\hat{f} = -i\\hbar \\nabla_{X_f} + f \\cdot \\text{id}"
      },
      {
        id: "dir3-bv-brst",
        title: "BV/BRST Quantization",
        directionId: "dir-3",
        directionName: "Mathematical Physics",
        status: "Learned",
        description: "Batalin-Vilkovisky (BV) and Becchi-Rouet-Stora-Tyutin (BRST) homological methods for quantizing gauge theories with open or reducible gauge algebras.",
        whyInteresting: "The master tool for consistently quantizing general relativity, supergravity, topological field theories, and string worldsheets.",
        prerequisites: ["Gauge Theory", "Differential Forms", "Homological Algebra"],
        suggestedTools: ["BRST charge $Q_B^2 = 0$", "Antifields and antibrackets", "Master equation $(S, S) = 0$", "Ghost fields and grading"],
        possibleQuestions: [
          "How does the quantum BV master equation $\\Delta S + \\frac{1}{2}(S, S) = 0$ capture one-loop gauge anomalies?",
          "What is the homological formulation of background independence in BV quantum field theory?"
        ],
        latexFormula: "s^2 = 0, \\quad \\frac{1}{2} (S, S) - i\\hbar \\Delta S = 0"
      }
    ]
  },
  {
    id: "dir-4",
    number: 4,
    title: "Quantum Information and Gravity",
    subtitle: "Entanglement, Quantum Channels, and Spacetime Reconstruction",
    accentColor: "border-violet-500/40 text-violet-400",
    overview: "Connecting the information-theoretic principles of quantum error correction, relative entropy, and operator algebras to the geometry of spacetime.",
    topics: [
      {
        id: "dir5-relative-entropy",
        title: "Relative Entropy & Monotonicity",
        directionId: "dir-4",
        directionName: "Quantum Information and Gravity",
        status: "Active Research",
        description: "Distinguishability measure between two quantum states $S(\\rho || \\sigma) = \\text{Tr}(\\rho \\log \\rho - \\rho \\log \\sigma)$ and its monotonicity under quantum operations.",
        whyInteresting: "Provides rigorous proofs for the Bekenstein bound, the Quantum Null Energy Condition (QNEC), and entropic energy inequalities.",
        prerequisites: ["Quantum Information Theory", "Density Operators"],
        suggestedTools: ["Data processing inequality", "Araki relative entropy", "Modular Hamiltonian $S(\\rho || \\sigma) = \\Delta \\langle K_\\sigma \\rangle - \\Delta S$"],
        possibleQuestions: [
          "How does the monotonicity of relative entropy enforce gravitational energy conditions?",
          "Can relative entropy detect topological order in continuous quantum fields?"
        ],
        latexFormula: "S(\\rho || \\sigma) \\ge S(\\mathcal{N}(\\rho) || \\mathcal{N}(\\sigma)), \\quad S(\\rho || \\sigma) \\ge 0"
      },
      {
        id: "dir5-open-systems",
        title: "Open Quantum Systems",
        directionId: "dir-4",
        directionName: "Quantum Information and Gravity",
        status: "Learning",
        description: "Non-unitary time evolution of a quantum subsystem interacting with an external bath, Lindblad master equations, and non-Markovian dynamics.",
        whyInteresting: "Directly models the decoherence of quantum fields near horizon boundaries and detector models in accelerated frames.",
        prerequisites: ["Quantum Mechanics", "Statistical Mechanics"],
        suggestedTools: ["GKSL (Lindblad) equation", "Completely positive trace-preserving (CPTP) maps", "Kraus representation"],
        possibleQuestions: [
          "How do non-Markovian memory effects manifest in evaporating black hole radiation?",
          "What is the open-system entropy production rate for an Unruh-DeWitt detector?"
        ],
        latexFormula: "\\frac{d\\rho}{dt} = -i [H, \\rho] + \\sum_k \\left( L_k \\rho L_k^\\dagger - \\frac{1}{2} \\{ L_k^\\dagger L_k, \\rho \\} \\right)"
      },
      {
        id: "dir5-curved-qi",
        title: "Quantum Information in Curved Spacetime",
        directionId: "dir-4",
        directionName: "Quantum Information and Gravity",
        status: "Active Research",
        description: "Behavior of entanglement, quantum teleportation, and Bell non-locality across event horizons and non-inertial reference frames.",
        whyInteresting: "Demonstrates that entanglement is degraded by horizon acceleration and that gravitational redshift alters quantum channel capacities.",
        prerequisites: ["General Relativity", "Relativistic Quantum Fields", "Quantum Entanglement"],
        suggestedTools: ["Unruh-DeWitt detector models", "Rindler coordinate frames", "Degradation of tripartite entanglement in acceleration"],
        possibleQuestions: [
          "Can quantum state steering survive across event horizons?",
          "How does spacetime curvature induce quantum decoherence without an external reservoir?"
        ],
        latexFormula: "H_{\\text{int}} = c \\, \\chi(\\tau) \\hat{m}(\\tau) \\hat{\\phi}(x(\\tau))"
      },
      {
        id: "dir5-spacetime-entanglement",
        title: "Entanglement and Spacetime",
        directionId: "dir-4",
        directionName: "Quantum Information and Gravity",
        status: "Active Research",
        description: "The 'ER = EPR' conjecture: quantum entanglement of microscopic states generates the connectivity of smooth classical spacetime bridges (wormholes).",
        whyInteresting: "Points to quantum information as the fundamental microscopic building block of the gravitational continuum.",
        prerequisites: ["AdS/CFT", "Einstein-Rosen Bridges", "Thermofield Double States"],
        suggestedTools: ["Thermofield double (TFD) $|\\text{TFD}\\rangle = \\frac{1}{\\sqrt{Z}} \\sum_n e^{-\\beta E_n/2} |n\\rangle_L |n\\rangle_R$", "Traversable wormhole protocols (Gao-Jafferis-Wall)"],
        possibleQuestions: [
          "Can multi-partite entanglement generate connected multi-boundary wormholes?",
          "How does the complexity of the quantum state correspond to the growth of the wormhole interior volume?"
        ],
        latexFormula: "|\\text{TFD}\\rangle = \\frac{1}{\\sqrt{Z(\\beta)}} \\sum_n e^{-\\frac{\\beta E_n}{2}} |n\\rangle_L \\otimes |n\\rangle_R"
      }
    ]
  }
];

export const CURRENT_PROJECT = {
  id: "btz-pole-skipping",
  title: "Probing Horizon Physics Through Correlators: Pole-Skipping in the BTZ Geometry",
  subtitle: "Analytic structure of retarded boundary Green's functions, complex momentum frequencies, and horizon boundary conditions",
  type: "Ongoing Research Project",
  status: "Active Research",
  metric: "ds^2 = -\\frac{r^2 - r_+^2}{L^2} dt^2 + \\frac{L^2}{r^2 - r_+^2} dr^2 + r^2 d\\phi^2",
  metricDesc: "BTZ black string/hole background in standard Schwarzschild-like coordinates with horizon radius $r_+$",
  temperatureFormula: "T_H = \\frac{r_+}{2\\pi L^2}",
  poleSkippingPoint: "(\\omega_*, k_*) = \\left( -i 2\\pi T, \\pm i \\frac{2\\pi T}{v_B} \\right) \\quad \\Longrightarrow \\quad G^R(\\omega_*, k_*) = \\frac{0}{0}",
  summary: [
    "The BTZ (Banados-Teitelboim-Zanelli) metric in (2+1) dimensions is an exact solution of Einstein's equations with negative cosmological constant, serving as an ideal laboratory for quantum horizon physics.",
    "We analyze scalar fields $\\Phi(t, r, \\phi)$ satisfying $(\\square - m^2)\\Phi = 0$ in the BTZ background, examining the real-time retarded Green's functions $G^R(\\omega, k)$ on the 2D CFT boundary.",
    "In infalling Eddington-Finkelstein coordinates $dv = dt + dr/f(r)$, incoming regularity at the horizon $r=r_+$ specifies a unique boundary condition. However, at special imaginary Matsubara frequencies $\\omega_n = -i 2\\pi T (n + \\dots)$, the equation of motion decouples at the horizon.",
    "At these discrete points, the retarded Green's function exhibits 'pole-skipping': a line of poles and a line of zeros intersect in the complex $(\\omega, k)$ plane, rendering $G^R(\\omega_*, k_*)$ indeterminate (taking the form $0/0$) and dependent on the direction of approach.",
    "This indeterminacy is a direct imprint of horizon dynamics and encodes universal quantum chaos data: the Lyapunov exponent $\\lambda_L = 2\\pi T/\\hbar$ and butterfly velocity $v_B$ in hydrodynamic modes."
  ],
  analyticResults: [
    "Analytic closed-form hypergeometric solution: $\\Phi(z) = z^{\\frac{\\Delta}{2}} (1-z)^{-i\\frac{\\omega}{4\\pi T}} {}_2F_1(a, b; c; z)$.",
    "Retarded Green's function ratio of Gamma functions: $G^R(\\omega, k) \\propto \\frac{\\Gamma(1-c)\\Gamma(a)\\Gamma(b)}{\\Gamma(c-1)\\Gamma(a-c+1)\\Gamma(b-c+1)}$.",
    "Poles occur at $a = -n$ or $b = -n$ for $n \\in \\mathbb{N}_0$, while zeros occur at $c - a = n$ or $c - b = n$.",
    "Pole-skipping manifests at the intersection where the residues of the poles vanish identically due to coefficient degeneracies."
  ],
  methods: [
    "Infalling Eddington-Finkelstein coordinates to regularize horizon singularities",
    "Frobenius series expansion of scalar wave equation around $r = r_+$",
    "Padé approximant analysis and complex frequency contour integration in Python and Mathematica",
    "AdS/CFT extrapolate dictionary mapping bulk boundary limits to CFT 2-point correlators"
  ],
  ongoingWorkNote: "Ongoing investigations focus on extending the scalar field pole-skipping analysis to non-minimally coupled scalars, rotating BTZ backgrounds ($J \\ne 0$), and examining the signature of operator mixing across deformed boundary RG flows."
};

export const PREVIOUS_PROJECT = {
  id: "supernova-neutrino",
  title: "Neutrino Oscillations in Matter Inside Supernova",
  subtitle: "MSW resonance phenomena, matter-induced effective potentials, and multi-flavor conversions in extreme stellar densities",
  type: "Earlier Academic Research",
  status: "Completed",
  hamiltonian: "H = \\frac{1}{2E} U \\begin{pmatrix} 0 & 0 \\\\ 0 & \\Delta m^2 \\end{pmatrix} U^\\dagger + \\begin{pmatrix} \\sqrt{2}G_F n_e(r) & 0 \\\\ 0 & 0 \\end{pmatrix}",
  resonanceCondition: "n_{e,\\text{res}} = \\frac{\\Delta m^2 \\cos 2\\theta}{2\\sqrt{2} E G_F}",
  summary: [
    "Investigated the quantum flavor evolution of neutrinos propagating through the extremely dense, dynamically varying mantle of a core-collapse supernova.",
    "As neutrinos pass through stellar matter, coherent forward scattering on ambient electrons generates an effective potential $V_{\\text{eff}}(r) = \\sqrt{2} G_F n_e(r)$, modifying the effective mixing angles and mass eigenvalues.",
    "Modeled the Mikheyev-Smirnov-Wolfenstein (MSW) resonance mechanism where the effective matter potential exactly cancels the vacuum mass-squared projection, inducing complete adiabatic flavor conversion from $\\nu_e$ to $\\nu_\\mu / \\nu_\\tau$.",
    "Developed numerical integration tools to track the non-adiabatic transition probabilities (Landau-Zener transitions) across steep density gradients.",
    "This project established my foundational foundation in analytical mathematical modeling, numerical ordinary differential equation systems, and quantum transitions in extreme physical environments."
  ],
  methods: [
    "Numerical Runge-Kutta 4th-order solution of the coupled Schrödinger-like flavor evolution equation",
    "Adiabaticity parameter $\\gamma_{\\text{res}}$ evaluation across realistic stellar density profiles $\\rho(r) \\propto r^{-3}$",
    "Two-flavor and three-flavor PMNS parameter scans (solar $\\Delta m_{21}^2$ and atmospheric $\\Delta m_{31}^2$ scales)",
    "Comparison of normal vs inverted neutrino mass hierarchy signatures"
  ],
  reflection: "This early work catalyzed my enduring interest in quantum field theoretic interactions in curved and non-trivial background environments, naturally leading from astrophysical media to quantum fields in curved spacetime and holography."
};

export const TIMELINE_STAGES: TimelineItem[] = [
  {
    id: "stage-msc",
    period: "Academic Foundations",
    stage: "M.Sc. Physics",
    institutionOrFocus: "Graduate Theoretical Physics Curriculum",
    description: "Deep immersion in classical mechanics (Lagrangian/Hamiltonian formulations), classical electrodynamics, advanced quantum mechanics, and statistical mechanics.",
    milestones: [
      "Rigorous study of operator formalisms and perturbation theory",
      "Mathematical physics coursework: complex analysis, group theory, differential equations",
      "Formulation of strong research interests in high-energy theoretical physics"
    ],
    keyMethods: ["Variational principles", "Green's functions", "Lie group representations"],
    status: "Completed"
  },
  {
    id: "stage-neutrino",
    period: "Initial Research Focus",
    stage: "Neutrino Physics & Extreme Media",
    institutionOrFocus: "Particle Phenomenology & Astrophysics",
    description: "Conducted research on neutrino oscillation dynamics and matter effects inside core-collapse supernovae, studying the MSW resonance and Landau-Zener non-adiabatic transitions.",
    milestones: [
      "Derived effective Hamiltonians in dense matter media",
      "Developed numerical simulations for 2-flavor and 3-flavor state evolution",
      "Investigated impact of density gradients on neutrino flavor survival probabilities"
    ],
    keyMethods: ["Numerical ODE integration (Python)", "Adiabaticity tracking", "PMNS matrix analysis"],
    status: "Completed"
  },
  {
    id: "stage-math-phys",
    period: "Mathematical Deepening",
    stage: "Mathematical Physics & Geometry",
    institutionOrFocus: "Differential Geometry, Lie Algebras, and Geometric Structures",
    description: "Systematic self-study and advanced coursework in modern mathematical structures: differential forms, pseudo-Riemannian geometry, Lie algebra representations, and manifold geometry.",
    milestones: [
      "Exterior calculus and connection 1-forms in curved spacetime",
      "Root diagrams and Casimir invariants of $SU(N)$ and $SO(d, 2)$",
      "Foundations of geometric quantization and Hamiltonian reduction"
    ],
    keyMethods: ["Exterior calculus", "Killing vector analysis", "Fiber bundles and connections"],
    status: "Completed"
  },
  {
    id: "stage-qft",
    period: "Core Theoretical Tools",
    stage: "Quantum Field Theory & Renormalization",
    institutionOrFocus: "Perturbative & Non-Perturbative Field Theories",
    description: "Mastery of path integral quantization, loop calculations, dimensional regularization, Wilsonian effective actions, and conformal field theory foundations.",
    milestones: [
      "Calculation of 1-loop counterterms and beta functions in scalar and gauge theories",
      "Operator Product Expansion (OPE) and conformal Ward identities in 2D and d > 2 CFT",
      "Anomalies, path integral Jacobians, and chiral symmetry breaking"
    ],
    keyMethods: ["Feynman diagrammatics", "Callan-Symanzik equation", "Conformal blocks"],
    status: "Ongoing"
  },
  {
    id: "stage-holography",
    period: "Current Research",
    stage: "Holography, AdS/CFT & Horizon Dynamics",
    institutionOrFocus: "Holographic Correlators & Black Hole Physics",
    description: "Active research project investigating scalar wave equations in BTZ black hole geometry, boundary retarded Green's functions, and the pole-skipping phenomenon encoding chaotic horizon dynamics.",
    milestones: [
      "Formulation of infalling Eddington-Finkelstein boundary value problem",
      "Analytic derivation of hypergeometric correlators in BTZ geometry",
      "Mapping of pole-skipping points to thermal Lyapunov exponents $\\lambda_L = 2\\pi T$"
    ],
    keyMethods: ["Frobenius series expansions", "Near-horizon decoupling", "Complex frequency Green's functions"],
    status: "Ongoing"
  },
  {
    id: "stage-quantum-gravity",
    period: "Emerging Trajectory",
    stage: "Quantum Gravity & Quantum Information",
    institutionOrFocus: "Entanglement, Islands, and Bulk Reconstruction",
    description: "Studying the emergence of bulk spacetime from boundary entanglement, quantum extremal surfaces (QES), replica wormholes, and operator algebras (Type $\\text{III}_1$ and $\\text{II}_\\infty$).",
    milestones: [
      "Deep study of Ryu-Takayanagi and HRT entanglement entropy formulas",
      "Understanding the resolution of the Page curve via quantum extremal surfaces",
      "Tomita-Takesaki modular theory and subregion-subregion duality"
    ],
    keyMethods: ["Quantum extremal surfaces", "Modular Hamiltonians", "Von Neumann algebra classifications"],
    status: "Ongoing"
  },
  {
    id: "stage-future",
    period: "Future Outlook",
    stage: "PhD-Level Fundamental Research",
    institutionOrFocus: "Doctoral Research Trajectory",
    description: "Aiming to contribute original research at the frontier of gauge/gravity duality, exploring higher-derivative corrections to pole-skipping, quantum chaos in rotating geometries, and quantum information aspects of black hole evaporation.",
    milestones: [
      "Preparation of first doctoral preprints in holographic horizon physics",
      "Collaborative research with theoretical high-energy physics groups",
      "Exploration of algebraic quantum field theory approaches to bulk reconstruction"
    ],
    keyMethods: ["Advanced holographic dictionaries", "Bootstrap constraints", "Algebraic QFT"],
    status: "Upcoming"
  }
];

export const PUBLICATIONS_LIST: PublicationItem[] = [
  {
    id: "pub-1",
    title: "On the Analytic Structure of Scalar Retarded Correlators and Pole-Skipping in the BTZ Black Hole",
    authors: ["Snehasis Sarkar", "Collaborators (In Prep)"],
    year: "2025 (Expected)",
    area: "Holography & AdS/CFT (hep-th)",
    status: "In Preparation",
    abstract: "We investigate the analytic structure of retarded boundary Green's functions for massive and massless scalar fields in the Banados-Teitelboim-Zanelli (BTZ) geometry. Utilizing infalling Eddington-Finkelstein coordinates, we systematically track the intersection of lines of poles and zeroes at complex Matsubara frequencies. We demonstrate how the resulting pole-skipping points encode horizon temperatures and universal chaos characteristics, providing explicit analytic hypergeometric solutions and discussing extensions to deformed holographic flows.",
    arxivCategory: "hep-th",
    note: "Manuscript currently in drafting stage. Code for numerical verification completed."
  },
  {
    id: "pub-2",
    title: "Adiabatic and Non-Adiabatic Flavor Conversion in Core-Collapse Supernova Environments",
    authors: ["Snehasis Sarkar"],
    year: "2024",
    area: "Neutrino Physics (hep-ph)",
    status: "Working Draft",
    abstract: "A detailed theoretical study of three-flavor neutrino propagation through dynamic stellar mantles. We examine the resonant MSW transition under realistic power-law density profiles, evaluate the Landau-Zener survival probability across steep iron-core gradients, and analyze the distinct observational signatures expected for normal versus inverted mass hierarchies.",
    arxivCategory: "hep-ph",
    note: "Based on earlier research investigations; undergoing technical revisions."
  }
];

export const RESEARCH_NOTES: ResearchNote[] = [
  {
    id: "note-kg-correlators",
    title: "From the Klein-Gordon Equation to Boundary Correlators",
    category: "AdS/CFT",
    date: "Research Notebook • Updated",
    summary: "Detailed derivation of how solving the bulk Klein-Gordon wave equation in Euclidean and Lorentzian AdS spacetimes reproduces boundary CFT two-point correlation functions via the GKPW dictionary.",
    content: {
      intro: "In the AdS/CFT correspondence, a massive bulk scalar field $\\Phi(z, x)$ is dual to a boundary conformal primary operator $\\mathcal{O}(x)$ with conformal scaling dimension $\\Delta = \\frac{d}{2} + \\sqrt{\\frac{d^2}{4} + m^2 L^2}$. We trace the exact asymptotic boundary expansion and derive the retarded Green's function.",
      equations: [
        {
          label: "Bulk Action & Wave Equation",
          formula: "S[\\Phi] = -\\frac{1}{2} \\int d^{d+1}x \\, \\sqrt{-g} \\left( g^{\\mu\\nu} \\partial_\\mu \\Phi \\partial_\\nu \\Phi + m^2 \\Phi^2 \\right) \\implies (\\square - m^2)\\Phi = 0",
          explanation: "In Poincaré coordinates $ds^2 = \\frac{L^2}{z^2}(dz^2 + \\eta_{\\mu\\nu}dx^\\mu dx^\\nu)$, the Laplacian separates into radial and boundary momentum modes."
        },
        {
          label: "Asymptotic Boundary Expansion",
          formula: "\\Phi(z, x) \\xrightarrow{z \\to 0} z^{d - \\Delta} \\phi_{(0)}(x) [1 + \\mathcal{O}(z^2)] + z^{\\Delta} \\phi_{(2\\Delta - d)}(x) [1 + \\mathcal{O}(z^2)]",
          explanation: "The non-normalizable mode $\\phi_{(0)}(x)$ acts as the source for the CFT operator $\\mathcal{O}(x)$, while the normalizable mode $\\phi_{(2\\Delta - d)}(x)$ determines the expectation value $\\langle \\mathcal{O}(x) \\rangle$."
        },
        {
          label: "Two-Point Correlator",
          formula: "\\langle \\mathcal{O}(x) \\mathcal{O}(0) \\rangle = \\frac{2\\Delta - d}{\\pi^{d/2}} \\frac{\\Gamma(\\Delta)}{\\Gamma(\\Delta - d/2)} \\frac{1}{|x|^{2\\Delta}}",
          explanation: "Obtained by differentiating the on-shell boundary action with respect to the source $\\phi_{(0)}$, reproducing the exact coordinate dependence mandated by conformal symmetry."
        }
      ],
      derivation: "By transforming the radial equation into a Bessel differential equation $\\left( z^2 \\partial_z^2 - (d-1) z \\partial_z - k^2 z^2 - m^2 L^2 \\right) \\Phi_k(z) = 0$, the regular solution in the interior is expressed in terms of the modified Bessel function $K_\\nu(k z)$ with $\\nu = \\Delta - d/2$. Expanding near $z = 0$ yields the boundary Green's function.",
      keyTakeaways: [
        "Bulk mass $m$ determines boundary scaling dimension $\\Delta$ through the relation $m^2 L^2 = \\Delta(\\Delta - d)$.",
        "The extrapolate dictionary safely extracts the boundary correlator without encountering bulk coordinate divergences.",
        "Lorentzian real-time correlators require selecting infalling boundary conditions at the interior horizon."
      ],
      references: [
        "Witten, E. (1998). 'Anti-de Sitter space and holography.' Adv. Theor. Math. Phys. 2, 253.",
        "Gubser, S. S., Klebanov, I. R., & Polyakov, A. M. (1998). 'Gauge theory correlators from non-critical string theory.' Phys. Lett. B 428, 105.",
        "Son, D. T., & Starinets, A. O. (2002). 'Minkowski-space correlators in AdS/CFT correspondence: Recipe and applications.' JHEP 0209, 042."
      ]
    },
    relatedTopics: ["dir2-adscft", "dir2-correlators", "dir1-cft"]
  },
  {
    id: "note-pole-skipping",
    title: "Understanding Pole-Skipping",
    category: "AdS/CFT",
    date: "Research Notebook • Updated",
    summary: "A conceptual and mathematical guide to the pole-skipping phenomenon: how Einstein's equations near black hole horizons enforce the non-uniqueness of boundary retarded Green's functions.",
    content: {
      intro: "Pole-skipping is a subtle feature of retarded Green's functions $G^R(\\omega, k)$ in thermal quantum field theories with holographic duals. When analytically continued to complex values of frequency $\\omega$ and spatial momentum $k$, lines of poles and zeros intersect, causing the correlator to take the indeterminate form $0/0$.",
      equations: [
        {
          label: "Infalling Eddington-Finkelstein Metric",
          formula: "ds^2 = -f(r) dv^2 + 2 dv dr + r^2 d\\phi^2, \\quad f(r) = \\frac{r^2 - r_+^2}{L^2}",
          explanation: "In these coordinates, the horizon at $r = r_+$ is completely non-singular and infalling waves are smooth regular functions."
        },
        {
          label: "Near-Horizon Frobenius Expansion",
          formula: "\\Phi(r) = \\sum_{n=0}^\\infty a_n (r - r_+)^n, \\quad \\mathcal{M}(\\omega, k) \\begin{pmatrix} a_0 \\\\ a_1 \\end{pmatrix} = 0",
          explanation: "The equation of motion relates $a_1$ to $a_0$. At generic frequencies, the ratio $a_1 / a_0$ is uniquely fixed by the horizon condition. At pole-skipping points, the matrix element vanishes, leaving $a_0$ and $a_1$ algebraically independent."
        },
        {
          label: "Chaos Connection (Hydrodynamic Mode)",
          formula: "\\omega_* = -i \\lambda_L = -i 2\\pi T, \\quad k_* = \\pm i \\frac{\\lambda_L}{v_B}",
          explanation: "For metric perturbations (energy density correlator), the leading pole-skipping point directly captures the maximal Lyapunov exponent $\\lambda_L = 2\\pi T$ and the butterfly velocity $v_B$ characterizing quantum chaos in out-of-time-order correlators (OTOC)."
        }
      ],
      derivation: "Consider a minimally coupled scalar field in BTZ. Expanding $(\\square - m^2)\\Phi = 0$ in powers of $(r - r_+)$: at the lowest order $n=0$, the coefficient multiplying $a_1$ is proportional to $(\\omega + i 4\\pi T \\dots)$. When $\\omega$ satisfies this condition, $a_1$ becomes unconstrained. Solving for the boundary conditions with this extra free parameter shows that the boundary correlator value depends on the slope $d\\omega / dk$ as $(\\omega, k) \\to (\\omega_*, k_*)$.",
      codeSnippet: {
        language: "mathematica",
        title: "btz_pole_skipping_symbolic.nb",
        code: `(* Mathematica: Verify BTZ horizon expansion *)
f[r_] := (r^2 - rh^2)/L^2;
eom = D[f[r]*D[phi[r], r], r] + 
   2*(-I*omega)*D[phi[r], r] - 
   (k^2/r^2 + m^2)*phi[r];

(* Series expansion around horizon r = rh *)
seriesEOM = Series[eom /. phi[r] -> a0 + a1*(r - rh) + a2*(r - rh)^2, {r, rh, 0}];
eq0 = Normal[seriesEOM];
Print["Coefficient of (r - rh)^0: ", eq0];
(* Notice that at omega = -I*2*Pi*T, the constraint on a1 decouples! *)`
      },
      keyTakeaways: [
        "Pole-skipping is not a bug or artifact; it is an exact physical consequence of horizon regularity in incoming coordinates.",
        "It provides a linear, two-point correlator method to compute chaotic out-of-time-order four-point dynamics.",
        "Appears at a infinite tower of Matsubara frequencies $\\omega_n = -i 2\\pi T n$ for higher spin fields."
      ],
      references: [
        "Blake, M., Lee, H., & Liu, H. (2018). 'A quantum hydrodynamical description for scrambling and many-body chaos.' JHEP 1810, 035.",
        "Grozdanov, S., Schalm, K., & Scopelliti, V. (2018). 'Black hole horizon extreme physics from holography.' Phys. Rev. Lett. 120, 231601.",
        "Blake, M., Davison, R. A., Grozdanov, S., & Liu, H. (2018). 'Many-body chaos and energy dynamics in holography.' JHEP 1810, 035."
      ]
    },
    relatedTopics: ["dir2-pole-skipping", "dir2-qnm", "dir2-correlators"]
  },
  {
    id: "note-bv-quantization",
    title: "Introduction to BV Quantization",
    category: "Mathematical Physics",
    date: "Research Notebook",
    summary: "A pedagogical formulation of the Batalin-Vilkovisky (BV) antifield formalism: addressing gauge theories with open algebras, reducible gauge symmetries, and the classical/quantum master equations.",
    content: {
      intro: "Standard Faddeev-Popov quantization breaks down when the gauge algebra is 'open' (the commutator of gauge generators closes only on-shell, modulo equations of motion) or reducible (gauge transformations have gauge-of-gauge redundancies, as in p-form gauge theories). The BV formalism provides the universal homological framework to quantize such systems.",
      equations: [
        {
          label: "Graded Symplectic Structure (Antibracket)",
          formula: "(F, G) = \\frac{\\delta_R F}{\\delta \\Phi^A} \\frac{\\delta_L G}{\\delta \\Phi^*_A} - \\frac{\\delta_R F}{\\delta \\Phi^*_A} \\frac{\\delta_L G}{\\delta \\Phi^A}",
          explanation: "Every field $\\Phi^A$ of ghost degree $g$ is paired with an antifield $\\Phi^*_A$ of ghost degree $-g-1$ and opposite Grassmann parity, forming an odd-symplectic phase space."
        },
        {
          label: "Classical Master Equation (CME)",
          formula: "(S, S) = 2 \\int d^d x \\, \\frac{\\delta_R S}{\\delta \\Phi^A} \\frac{\\delta_L S}{\\delta \\Phi^*_A} = 0",
          explanation: "The CME is equivalent to the nilpotency of the BRST operator $s = (S, -)$, encoding gauge invariance and the closure of the gauge algebra into a single quadratic relation."
        },
        {
          label: "Quantum Master Equation (QME)",
          formula: "\\frac{1}{2} (W, W) - i\\hbar \\Delta W = 0, \\quad \\Delta = (-1)^{\\epsilon_A + 1} \\frac{\\delta_R}{\\delta \\Phi^A} \\frac{\\delta_L}{\\delta \\Phi^*_A}",
          explanation: "The QME ensures that the path integral gauge-fixed partition function is independent of the choice of gauge-fixing fermion $\\Psi$."
        }
      ],
      derivation: "By introducing the odd Laplacian $\\Delta$, one observes that $\\Delta^2 = 0$ and $\\Delta(F G) = (\\Delta F) G + (-1)^{\\epsilon_F} F (\\Delta G) + (-1)^{\\epsilon_F} (F, G)$. Thus, $\\Delta$ is a second-order differential operator generating the antibracket. If $W$ satisfies the QME, the quantum integrand $e^{i W / \\hbar}$ is $\\Delta$-closed.",
      keyTakeaways: [
        "The BV formalism replaces geometry with homological algebra, where gauge orbits correspond to cohomology classes of the BRST differential.",
        "Gauge anomalies correspond precisely to obstructions to solving the Quantum Master Equation at one loop: $\\Delta S_{\\text{classical}} = \\text{Anomaly}$.",
        "It is essential for modern developments in string field theory, supergravity, and factorisation homology."
      ],
      references: [
        "Batalin, I. A., & Vilkovisky, G. A. (1981). 'Gauge algebra and quantization.' Phys. Lett. B 102, 27.",
        "Henneaux, M., & Teitelboim, C. (1992). 'Quantization of Gauge Systems.' Princeton University Press.",
        "Costello, K., & Gwilliam, O. (2016). 'Factorization Algebras in Quantum Field Theory.' Cambridge University Press."
      ]
    },
    relatedTopics: ["dir3-bv-brst", "dir1-bootstrap"]
  },
  {
    id: "note-symmetries-ward",
    title: "Symmetries and Ward Identities in QFT",
    category: "QFT",
    date: "Research Notebook",
    summary: "Systematic derivation of Ward-Takahashi identities from the invariance of the functional path integral measure, extending Noether's theorem to quantum expectation values.",
    content: {
      intro: "In classical field theory, Noether's theorem associates a conserved current $\\partial_\\mu j^\\mu = 0$ with every continuous global symmetry. In quantum field theory, this conservation law is elevated into exact operator relations between n-point and (n-1)-point correlation functions called Ward-Takahashi identities.",
      equations: [
        {
          label: "Invariance of the Path Integral Measure",
          formula: "0 = \\int \\mathcal{D}\\phi \\, \\frac{\\delta}{\\delta \\phi(x)} \\left( F[\\phi] e^{i S[\\phi] + i \\int J \\phi} \\right)",
          explanation: "Total functional derivatives of any functional vanish identically under the path integral, assuming boundary configurations at infinity are well-behaved."
        },
        {
          label: "Ward-Takahashi Identity in QED",
          formula: "k_\\mu \\mathcal{M}^\\mu(k; p, p') = e [ S_F^{-1}(p') - S_F^{-1}(p) ]",
          explanation: "Relates the photon-electron-electron vertex $\\mathcal{M}^\\mu$ to the inverse electron propagator $S_F^{-1}$, enforcing the equality of the charge renormalization factor $Z_1 = Z_2$."
        },
        {
          label: "Conformal Ward Identity",
          formula: "\\sum_{i=1}^n \\langle \\phi_1(x_1) \\dots [\\delta_\\epsilon \\phi_i(x_i)] \\dots \\phi_n(x_n) \\rangle = 0",
          explanation: "Completely constrains the coordinate dependence of scalar 2-point and 3-point correlation functions up to overall normalization constants."
        }
      ],
      derivation: "Perform a localized infinitesimal symmetry transformation $\\phi(x) \\to \\phi(x) + \\epsilon(x) \\Delta \\phi(x)$. The action changes by $\\delta S = -\\int d^d x \\, \\partial_\\mu \\epsilon(x) j^\\mu(x)$. Demanding that the path integral partition function $Z[J]$ be invariant under this field variable change yields the quantum identity $\\partial_\\mu \\langle j^\\mu(x) \\phi(y_1) \\dots \\rangle = -i \\sum_k \\delta(x - y_k) \\langle \\phi(y_1) \\dots \\Delta \\phi(y_k) \\dots \\rangle$.",
      keyTakeaways: [
        "Ward identities ensure that unphysical longitudinal photon polarization states decouple from physical S-matrix elements.",
        "Guarantees that quantum loop corrections preserve gauge symmetry, preventing photons from acquiring a radiative mass.",
        "Forms the backbone of non-perturbative sum rules in hadronic physics."
      ],
      references: [
        "Ward, J. C. (1950). 'An identity in quantum electrodynamics.' Phys. Rev. 78, 182.",
        "Takahashi, Y. (1957). 'On the generalized Ward identity.' Il Nuovo Cimento 6, 371.",
        "Peskin, M. E., & Schroeder, D. V. (1995). 'An Introduction to Quantum Field Theory.' Westview Press."
      ]
    },
    relatedTopics: ["dir1-feynman", "dir1-renorm"]
  }
];

export const COMPUTATIONAL_PROJECTS: ComputationalProject[] = [
  {
    id: "comp-pole-skipping",
    title: "BTZ Horizon Correlator & Pole-Skipping Solver",
    language: "Python",
    method: "Spectral Methods",
    summary: "Numerical solution of the radial scalar wave equation in BTZ black hole background in Eddington-Finkelstein coordinates, computing the complex retarded Green's function $G^R(\\omega, k)$ across the $(\\text{Re}\\,\\omega, \\text{Im}\\,\\omega)$ plane.",
    algorithmDesc: "Implements a Chebyshev pseudospectral collocation grid along the radial coordinate from horizon $r_+$ to an infrared regulator $r_{\\text{max}}$. Boundary conditions at the horizon are enforced to be purely regular incoming, and asymptotic boundary coefficients are extracted to locate poles and zeros.",
    equation: "\\left( \\frac{r^2 - r_+^2}{L^2} \\partial_r^2 + \\left[ \\frac{2r}{L^2} - 2i\\omega \\right] \\partial_r - \\left[ \\frac{k^2}{r^2} + m^2 \\right] \\right) \\Phi(r) = 0"
  },
  {
    id: "comp-riemann-tensor",
    title: "Symbolic Metric & Curvature Tensor Engine",
    language: "Mathematica",
    method: "Symbolic Tensors",
    summary: "Automated package computing Christoffel symbols, Riemann curvature tensors, Ricci tensors, and Weyl scalars for arbitrary spacetime metrics in any dimension.",
    algorithmDesc: "Evaluates inverse metric $g^{\\mu\\nu}$, generates Christoffel symbols $\\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2}g^{\\lambda\\sigma}(\\partial_\\mu g_{\\nu\\sigma} + \\partial_\\nu g_{\\mu\\sigma} - \\partial_\\sigma g_{\\mu\\nu})$, and derives curvature invariants like the Kretschmann scalar $K = R^{\\mu\\nu\\rho\\sigma} R_{\\mu\\nu\\rho\\sigma}$.",
    equation: "R_{\\mu\\nu} = R^\\lambda{}_{\\mu\\lambda\\nu}, \\quad K = R_{\\mu\\nu\\rho\\sigma} R^{\\mu\\nu\\rho\\sigma}"
  }
];

export const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: "road-math-foundations",
    order: 1,
    title: "Mathematical Foundations",
    stage: "Foundational",
    primaryFormula: "d(\\omega \\wedge \\eta) = d\\omega \\wedge \\eta + (-1)^p \\omega \\wedge d\\eta",
    prerequisites: ["Calculus", "Linear Algebra"],
    keyConcepts: [
      "Multivariable & Vector Calculus",
      "Linear Algebra & Spectral Decompositions",
      "Complex Analysis (Residue Calculus, Contour Integration)",
      "Ordinary & Partial Differential Equations",
      "Differential Forms & Exterior Calculus"
    ],
    recommendedBooks: [
      { title: "Mathematical Methods for Physicists", author: "Arfken & Weber", notes: "Comprehensive handbook for applied analysis and differential equations." },
      { title: "Geometry, Topology and Physics", author: "M. Nakahara", notes: "Essential modern bridge from differential forms to gauge theory." }
    ],
    frontierProblems: [
      "Exact summation of non-convergent asymptotic perturbative series via Borel-Padé analysis",
      "Topological classification of fiber bundles with non-trivial characteristic classes"
    ]
  },
  {
    id: "road-classical-mechanics",
    order: 2,
    title: "Classical Mechanics",
    stage: "Foundational",
    primaryFormula: "\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}^i}\\right) - \\frac{\\partial L}{\\partial q^i} = 0, \\quad \\{q^i, p_j\\} = \\delta^i_j",
    prerequisites: ["Mathematical Foundations"],
    keyConcepts: [
      "Lagrangian Mechanics & Principle of Least Action",
      "Hamiltonian Mechanics & Canonical Transformations",
      "Poisson Brackets & Phase Space Geometry",
      "Noether's Theorem for Continuous Symmetries",
      "Hamilton-Jacobi Theory & Action-Angle Variables"
    ],
    recommendedBooks: [
      { title: "Classical Mechanics", author: "H. Goldstein, C. Poole, J. Safko", notes: "The classic graduate text on canonical transformations and Poisson brackets." },
      { title: "Mathematical Methods of Classical Mechanics", author: "V. I. Arnold", notes: "Modern symplectic and geometric formulation of mechanics." }
    ],
    frontierProblems: [
      "KAM theory and transition to chaos in perturbed gravitational n-body systems",
      "Symplectic reduction for infinite-dimensional constrained systems"
    ]
  },
  {
    id: "road-electrodynamics",
    order: 3,
    title: "Electrodynamics",
    stage: "Foundational",
    primaryFormula: "\\partial_\\mu F^{\\mu\\nu} = \\mu_0 J^\\nu, \\quad F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu",
    prerequisites: ["Classical Mechanics"],
    keyConcepts: [
      "Maxwell's Equations in Covariant 4-Vector Formalism",
      "Gauge Invariance & Gauge Fixing (Lorenz, Coulomb)",
      "Radiation & Retarded Liénard-Wiechert Potentials",
      "Relativistic Particle Dynamics & Stress-Energy Tensor",
      "Differential Form Formulation ($dF = 0, d*F = *J$)"
    ],
    recommendedBooks: [
      { title: "Classical Electrodynamics", author: "J. D. Jackson", notes: "Mastery of boundary value problems and relativistic radiation." },
      { title: "Modern Electrodynamics", author: "A. Zangwill", notes: "Modern, physically intuitive pedagogical approach." }
    ],
    frontierProblems: [
      "Radiation reaction and self-force on charged particles in curved spacetime",
      "Asymptotic electromagnetic symmetries and soft photon theorems"
    ]
  },
  {
    id: "road-quantum-mechanics",
    order: 4,
    title: "Quantum Mechanics",
    stage: "Core Physics",
    primaryFormula: "i\\hbar \\frac{d}{dt}|\\psi\\rangle = \\hat{H}|\\psi\\rangle, \\quad [\\hat{x}, \\hat{p}] = i\\hbar",
    prerequisites: ["Classical Mechanics", "Mathematical Foundations"],
    keyConcepts: [
      "Hilbert Space Postulates & Operator Spectral Theory",
      "Angular Momentum & $SU(2)$ Spin Representations",
      "Time-Independent & Time-Dependent Perturbation Theory",
      "Scattering Theory (S-Matrix, Phase Shifts, Born Approximation)",
      "Path Integral Quantization in Phase Space"
    ],
    recommendedBooks: [
      { title: "Modern Quantum Mechanics", author: "J. J. Sakurai & J. Napolitano", notes: "Symmetry-first, operator-centric formulation." },
      { title: "Principles of Quantum Mechanics", author: "R. Shankar", notes: "Excellent step-by-step mathematical treatment of path integrals." }
    ],
    frontierProblems: [
      "Quantum measurement problem and continuous quantum monitoring",
      "Relativistic single-particle wave equation paradoxes (Klein paradox, negative energy)"
    ]
  },
  {
    id: "road-stat-mech",
    order: 5,
    title: "Statistical Mechanics",
    stage: "Core Physics",
    primaryFormula: "Z = \\sum_n e^{-\\beta E_n}, \\quad F = -k_B T \\ln Z",
    prerequisites: ["Quantum Mechanics", "Classical Mechanics"],
    keyConcepts: [
      "Microcanonical, Canonical & Grand Canonical Ensembles",
      "Fermi-Dirac & Bose-Einstein Quantum Statistics",
      "Phase Transitions & Order Parameters (Landau Theory)",
      "Ising Model & Transfer Matrix Technique",
      "Renormalization Group Idea (Kadanoff Block Spin)"
    ],
    recommendedBooks: [
      { title: "Statistical Mechanics", author: "R. K. Pathria & P. D. Beale", notes: "Standard graduate statistical mechanics." },
      { title: "Statistical Physics of Fields", author: "M. Kardar", notes: "Field-theoretic perspective leading directly to continuous RG." }
    ],
    frontierProblems: [
      "Thermalization in isolated quantum systems (Eigenstate Thermalization Hypothesis - ETH)",
      "Non-equilibrium fluctuation theorems in small quantum thermal engines"
    ]
  },
  {
    id: "road-qft",
    order: 6,
    title: "Quantum Field Theory",
    stage: "Advanced Theory",
    primaryFormula: "\\mathcal{L} = -\\frac{1}{4} F_{\\mu\\nu} F^{\\mu\\nu} + \\bar{\\psi}(i\\gamma^\\mu D_\\mu - m)\\psi + |D_\\mu \\phi|^2 - V(\\phi)",
    prerequisites: ["Quantum Mechanics", "Electrodynamics", "Statistical Mechanics"],
    keyConcepts: [
      "Canonical Quantization of Klein-Gordon & Dirac Fields",
      "Feynman Path Integrals & Generating Functionals $Z[J]$",
      "Loop Diagrams, Counterterms & Dimensional Regularization",
      "Wilsonian Renormalization Group & Beta Functions",
      "Non-Abelian Gauge Theories (Yang-Mills) & Faddeev-Popov Ghosts",
      "Spontaneous Symmetry Breaking & Goldstone Theorem"
    ],
    recommendedBooks: [
      { title: "An Introduction to Quantum Field Theory", author: "M. E. Peskin & D. V. Schroeder", notes: "The indispensable standard for calculations, Feynman diagrams, and RG." },
      { title: "Quantum Field Theory in a Nutshell", author: "A. Zee", notes: "Profound conceptual insights into path integrals and modern principles." }
    ],
    frontierProblems: [
      "Rigorous non-perturbative definition of 4D Yang-Mills theory and mass gap (Clay Millennium Prize)",
      "Resurgence theory and the exact transseries summation of non-perturbative instanton corrections"
    ]
  },
  {
    id: "road-gr",
    order: 7,
    title: "General Relativity",
    stage: "Advanced Theory",
    primaryFormula: "G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}",
    prerequisites: ["Electrodynamics", "Mathematical Foundations"],
    keyConcepts: [
      "Equivalence Principle & Curved Manifolds",
      "Christoffel Connection, Geodesics & Riemann Curvature",
      "Einstein-Hilbert Action & Gravitational Equations of Motion",
      "Exact Solutions: Schwarzschild, Kerr, and BTZ Black Holes",
      "Cosmological FLRW Metric & Gravitational Radiation",
      "Quantum Fields in Curved Spacetime (Hawking Radiation, Unruh Effect)"
    ],
    recommendedBooks: [
      { title: "Spacetime and Geometry: An Introduction to General Relativity", author: "S. M. Carroll", notes: "Pedagogically superb modern introduction." },
      { title: "General Relativity", author: "R. M. Wald", notes: "Rigorous mathematical foundation covering causal structure and thermodynamics." }
    ],
    frontierProblems: [
      "Cosmic censorship hypothesis and the true physical nature of black hole interior singularities",
      "Backreaction of Hawking radiation on the semiclassical geometry during late-stage evaporation"
    ]
  },
  {
    id: "road-cft",
    order: 8,
    title: "Conformal Field Theory",
    stage: "Advanced Theory",
    primaryFormula: "\\langle \\mathcal{O}_1(x_1) \\mathcal{O}_2(x_2) \\rangle = \\frac{C_{12}}{|x_1 - x_2|^{2\\Delta_1}}",
    prerequisites: ["Quantum Field Theory"],
    keyConcepts: [
      "Conformal Group $SO(d, 2)$ & Conformal Ward Identities",
      "Primary Operators & Operator Product Expansion (OPE)",
      "2D Conformal Symmetry & Infinite-Dimensional Virasoro Algebra",
      "State-Operator Correspondence & Radial Quantization",
      "Conformal Bootstrap & Crossing Symmetry Equations"
    ],
    recommendedBooks: [
      { title: "Conformal Field Theory", author: "P. Di Francesco, P. Mathieu, D. Sénéchal", notes: "The encyclopedic bible of 2D CFT." },
      { title: "Lectures on Conformal Field Theory", author: "D. Simmons-Duffin (TASI)", notes: "Modern bootstrap perspective for general spacetime dimensions." }
    ],
    frontierProblems: [
      "Analytical resolution of higher-dimensional non-supersymmetric bootstrap crossing equations",
      "Inversion formulas and light-cone limit constraints on chaotic multi-stress-tensor exchanges"
    ]
  },
  {
    id: "road-adscft",
    order: 9,
    title: "AdS/CFT & Holography",
    stage: "Frontier Research",
    primaryFormula: "\\langle \\mathcal{O}_{\\Delta}(x) \\mathcal{O}_{\\Delta}(0) \\rangle \\longleftrightarrow \\lim_{z \\to 0} z^{-\\Delta} \\Phi(z, x)",
    prerequisites: ["General Relativity", "Conformal Field Theory", "Quantum Field Theory"],
    keyConcepts: [
      "Maldacena's Conjecture ($AdS_5 \\times S^5 \\leftrightarrow \\mathcal{N}=4$ SYM)",
      "GKPW Prescription & Bulk-to-Boundary Propagators",
      "Real-Time Retarded Correlators & Infalling Horizon Boundary Conditions",
      "Thermal Holography: BTZ Black Holes & Boundary Hydrodynamics",
      "Viscosity Bound $\\eta/s = 1/(4\\pi)$ & Holographic Transport",
      "Pole-Skipping as a Probe of Horizon Scrambling & Quantum Chaos"
    ],
    recommendedBooks: [
      { title: "Introduction to the AdS/CFT Correspondence", author: "H. Nastase", notes: "Accessible, step-by-step introduction from D-branes to the holographic dictionary." },
      { title: "Holographic Duality in Condensed Matter Physics", author: "J. Zaanen, Y. Liu, Y. Sun, K. Schalm", notes: "Applied holography and real-time Green's functions." }
    ],
    frontierProblems: [
      "Universal classification of pole-skipping points in higher-derivative gravitational theories",
      "Exact holographic duals for non-conformal, cosmological spacetimes (dS/CFT)"
    ]
  },
  {
    id: "road-quantum-gravity",
    order: 10,
    title: "Quantum Gravity & Holographic Information",
    stage: "Frontier Research",
    primaryFormula: "S(R) = \\min \\text{ext}_I \\left[ \\frac{\\text{Area}(\\partial I)}{4 G_N} + S_{\\text{bulk}}(R \\cup I) \\right]",
    prerequisites: ["AdS/CFT & Holography", "General Relativity"],
    keyConcepts: [
      "Ryu-Takayanagi & HRT Holographic Entanglement Entropy",
      "Quantum Extremal Surfaces (QES) & The Island Formula",
      "Resolution of the Hawking Information Paradox & The Page Curve",
      "Replica Wormholes & Gravitational Path Integral Topology",
      "Bulk Reconstruction via HKLL & Quantum Error Correction",
      "Type $\\text{III}_1$ to Type $\\text{II}_\\infty$ von Neumann Algebraic Transitions"
    ],
    recommendedBooks: [
      { title: "Quantum Information Meets Quantum Gravity", author: "TASI Lectures (Hartman, Harlow, Almheiri)", notes: "Essential modern lecture series on black hole information." },
      { title: "Lectures on Quantum Extremal Surfaces", author: "A. Almheiri", notes: "Detailed derivation of the Page curve from semiclassical gravity." }
    ],
    frontierProblems: [
      "Microscopic understanding of the state-dependent interior operators behind black hole horizons",
      "How algebraic quantum field theory formalizes the continuum limit of holographic spacetime"
    ]
  }
];

export const RESEARCH_QUESTIONS: ResearchQuestion[] = [
  {
    id: "rq-1",
    domain: "Holography",
    question: "Can horizon dynamics and chaotic scrambling be inferred purely from boundary correlation functions?",
    theoreticalContext: "In classical general relativity, black-hole event horizons act as one-way causal membranes. In the AdS/CFT correspondence, this dissipation manifests as thermalization in the boundary field theory. Pole-skipping points in boundary retarded Green's functions appear to pinpoint the exact Lyapunov exponent of many-body quantum chaos.",
    mathematicalFormulation: "G^R(\\omega, k) = \\frac{B(\\omega, k)}{A(\\omega, k)} \\xrightarrow{(\\omega_*, k_*)} \\frac{0}{0}, \\quad \\omega_* = -i \\lambda_L = -i 2\\pi T, \\quad k_* = i \\frac{\\lambda_L}{v_B}",
    whyOpen: "While pole-skipping has been computed for minimally coupled fields in symmetric geometries like BTZ, its universality in theories with higher-curvature stringy corrections, anisotropic backgrounds, or non-trivial matter backreaction remains an active open question.",
    relevantConcepts: ["Pole-skipping", "Out-of-time-order correlators (OTOC)", "Lyapunov exponent", "Infalling boundary conditions"],
    literatureSeeds: ["Blake, Lee, Liu (2018)", "Grozdanov, Schalm, Scopelliti (2018)", "Shenker & Stanford (2014)"]
  },
  {
    id: "rq-2",
    domain: "Black Holes",
    question: "What information about black-hole horizons is encoded in quantum correlators beyond the hydrodynamic limit?",
    theoreticalContext: "Hydrodynamics describes the long-wavelength, late-time behavior of thermal systems. However, horizon physics involves microscopic high-frequency modes near the singularity. Whether boundary correlation functions retain signatures of the quantum state of the horizon or fuzzball microstates is crucial for resolving the information paradox.",
    mathematicalFormulation: "G^R(t, x) = -i \\theta(t) \\langle [\\mathcal{O}(t, x), \\mathcal{O}(0, 0)] \\rangle_{\\beta} = \\sum_n c_n e^{-i \\omega_n t}",
    whyOpen: "Semiclassical black hole geometries yield a continuous quasinormal mode spectrum, whereas a unitary quantum system with finite entropy must have discrete, quasi-periodic spectral fluctuations at late times ($t > t_{\\text{Page}}$).",
    relevantConcepts: ["Quasinormal mode overtones", "Spectral form factor", "Information recovery", "Microstate geometries"],
    literatureSeeds: ["Maldacena (2001)", "Cotler et al. (2017)", "Saad, Shenker, Stanford (2019)"]
  },
  {
    id: "rq-3",
    domain: "Holography",
    question: "How does operator mixing behave in deformed holographic backgrounds?",
    theoreticalContext: "When a CFT is perturbed by relevant or marginal operators, it initiates a Renormalization Group (RG) flow toward a new infrared fixed point. In the bulk, this corresponds to a domain wall or deformed gravitational background where scalar fields backreact on the metric.",
    mathematicalFormulation: "ds^2 = dr^2 + e^{2A(r)} \\eta_{\\mu\\nu} dx^\\mu dx^\\nu, \\quad \\frac{d}{dr}\\Phi_i = \\beta_i(\\Phi) + \\sum_j M_{ij}(r) \\Phi_j",
    whyOpen: "Operator mixing along the flow makes it difficult to disentangle bulk equations of motion, complicating the identification of individual boundary conformal primaries in the IR.",
    relevantConcepts: ["Holographic RG flows", "Kaluza-Klein operator mixing", "Domain wall solutions", "Conformal anomaly matching"],
    literatureSeeds: ["de Boer, Verlinde, Verlinde (2000)", "Freedman et al. (1999)", "Bianchi, Freedman, Skenderis (2002)"]
  },
  {
    id: "rq-4",
    domain: "Quantum Information",
    question: "What role does entanglement play in reconstructing the bulk geometry behind the horizon?",
    theoreticalContext: "The Ryu-Takayanagi formula computes entanglement entropy for regions outside the horizon. The recent island formula suggests that regions deep in the interior ('islands') belong to the entanglement wedge of asymptotic Hawking radiation at late times.",
    mathematicalFormulation: "S(R) = \\text{ext}_I \\left[ \\frac{\\text{Area}(\\partial I)}{4 G_N} + S_{\\text{bulk}}(R \\cup I) \\right]",
    whyOpen: "How an observer outside can operationally decode an operator located inside the island using only polynomial-time quantum algorithms remains an unsolved challenge involving quantum computational complexity.",
    relevantConcepts: ["Entanglement wedge reconstruction", "Quantum extremal surfaces", "Quantum error correction", "Petz recovery channels"],
    literatureSeeds: ["Almheiri et al. (2019)", "Penington (2019)", "Harlow (2017)"]
  },
  {
    id: "rq-5",
    domain: "QFT",
    question: "How do quantum fields behave in extreme gravitational environments near Cauchy horizons?",
    theoreticalContext: "Cauchy horizons inside rotating (Kerr) or charged (Reissner-Nordström) black holes mark the boundary beyond which deterministic classical general relativity breaks down. Quantum vacuum polarization $\\langle T_{\\mu\\nu} \\rangle$ is conjectured to diverge at the Cauchy horizon, enforcing strong cosmic censorship.",
    mathematicalFormulation: "\\lim_{r \\to r_-} \\langle T_{\\mu\\nu} \\rangle_{\\text{ren}} \\sim (r - r_-)^{-p} \\to \\infty",
    whyOpen: "Calculating renormalized stress tensors for interacting fields in Kerr spacetime is computationally intractable with current analytic methods; whether the singularity is spacelike or null remains controversial.",
    relevantConcepts: ["Mass inflation", "Strong Cosmic Censorship", "Hadamard regularization", "Inner horizon instabilities"],
    literatureSeeds: ["Poisson & Israel (1990)", "Dafermos & Luk (2017)", "Hollands & Wald (2015)"]
  }
];

export const CV_DATA = {
  education: [
    {
      degree: "Master of Science in Mathematical Physics",
      field: "Mathematical & Theoretical Physics",
      institution: "Faculty of Mechanics and Mathematics, Lomonosov Moscow State University",
      location: "Moscow, Russia",
      period: "2024 – 2026",
      focus: "Mathematical Methods in Quantum Field Theory, Differential Geometry, and Gravitational Dynamics",
      thesis: "Mathematical Structures in Holographic Boundary Correlators and Spacetime Symmetries",
      advisor: "Faculty Supervisor, Department of Mathematical Physics / Faculty of Mechanics and Mathematics",
      details: "Advanced curriculum and research in Differential Geometry & Topology, Lie Algebras & Infinite-Dimensional Symmetries, Operator Algebras, Quantum Field Theory, and Non-Perturbative Mathematical Physics."
    },
    {
      degree: "Master of Science in Physics",
      field: "Theoretical Physics",
      institution: "Department of Physics, University",
      location: "India",
      period: "2022 – 2024",
      focus: "Theoretical High Energy Physics, Quantum Field Theory, and Mathematical Physics",
      thesis: "Probing Horizon Physics Through Boundary Correlators in 2+1D Holographic Spacetimes",
      advisor: "Prof. / Faculty Supervisor (High Energy Theory)",
      details: "Comprehensive coursework in Advanced Quantum Mechanics, Quantum Field Theory I & II, General Relativity, Group Theory, Statistical Mechanics, and Computational Physics."
    },
    {
      degree: "Bachelor of Science in Physics (Honours)",
      field: "Physics & Mathematics",
      institution: "Department of Physics",
      location: "India",
      period: "2019 – 2022",
      focus: "Physics & Mathematics",
      thesis: "Analytical Formulations in Classical and Quantum Dynamics",
      advisor: "Department Faculty Advisor",
      details: "First Class Honors. Rigorous curriculum in Classical Mechanics, Electrodynamics, Quantum Mechanics, Mathematical Methods, and Numerical Computing."
    }
  ],
  researchExperience: [
    {
      role: "Graduate Research Investigator",
      projectTitle: "Holographic Correlators & Horizon Pole-Skipping in BTZ Geometry",
      institution: "Theoretical High Energy Physics Group",
      period: "2024 – Present",
      mentor: "Theoretical High Energy Physics Faculty",
      description: "Investigating the analytic structure of retarded boundary Green's functions in BTZ black hole spacetimes using infalling Eddington-Finkelstein coordinates. Developing analytic and numerical routines to trace pole-skipping points and their relationship to quantum chaos Lyapunov exponents.",
      keyOutcomes: [
        "Analytic mapping of scalar field hypergeometric wave solutions in infalling frame",
        "Verification of leading Matsubara pole-skipping condition at omega = -i 2 pi T",
        "Implementation of pseudospectral numerical solver for non-minimally coupled horizon equations"
      ]
    }
  ],
  teachingExperience: [
    {
      role: "Graduate Teaching Assistant / Tutor",
      course: "Electrodynamics & Special Relativity",
      institution: "Department of Physics",
      period: "2023 – 2024",
      responsibilities: "Conducted weekly problem-solving tutorial sessions, graded analytical problem sets, and mentored undergraduate students on tensor formulations in covariant electrodynamics."
    },
    {
      role: "Academic Mentor",
      course: "Mathematical Methods in Physics & Differential Equations",
      institution: "Physics Student Society",
      period: "2022 – 2023",
      responsibilities: "Organized supplementary workshops on complex contour integration, residue theorem, and Green's function methods for boundary value problems."
    }
  ],
  skills: {
    programming: ["Python", "Wolfram Mathematica", "Git / GitHub"],
    mathematics: ["Differential & Riemannian Geometry", "Lie Algebras & Group Representation Theory", "Complex Analysis & Contour Integration", "Functional Analysis & Green's Functions"],
    frameworks: ["LaTeX / Scientific Typography"]
  },
  thesis: {
    title: "Probing Horizon Physics Through Boundary Correlators in 2+1D Holographic Spacetimes",
    description: "An analytical and computational exploration of scalar field wave dynamics in the BTZ black hole geometry, mapping complex frequency pole-skipping intersections to boundary quantum thermal properties and Lyapunov scrambling bounds."
  },
  coursework: [
    { title: "Quantum Field Theory I & II", level: "Graduate" },
    { title: "General Relativity & Curved Spacetime", level: "Graduate" },
    { title: "Advanced Quantum Mechanics", level: "Graduate" },
    { title: "Group Theory & Symmetries in Physics", level: "Graduate" },
    { title: "Statistical Mechanics & Phase Transitions", level: "Graduate" },
    { title: "Differential Geometry & Topology for Physicists", level: "Graduate" },
    { title: "Computational Physics & Numerical Methods", level: "Graduate" },
    { title: "Classical Electrodynamics & Radiation", level: "Advanced" },
    { title: "Classical Mechanics & Dynamics", level: "Advanced" }
  ],
  honorsAndAwards: [
    "Graduate Academic Fellowship for Excellence in Theoretical Physics",
    "National Graduate Physics Competition Recognition",
    "Undergraduate Merit Scholarship for Academic Distinction"
  ]
};
