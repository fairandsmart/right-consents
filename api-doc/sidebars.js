/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    {
      type: 'link',
      label: 'Quick Start Guide',
      href: 'getting-started/quick-start-guide',
    },
    {
      type: 'category',
      label: 'Concepts & Terminology',
      items: [
        'concepts/consent-elements-doc',
        'concepts/consent-context-doc',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/overview-guide',
        'guides/first-consent-form-guide',
        'guides/discover-api-guide',
        'guides/collect-into-form-guide',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      items: [
        'techdoc/full-install-guide',
        'techdoc/config-ref',
        'techdoc/swagger',
        'techdoc/sdk'
      ],
    }
  ],
  apiSidebar: [
    'api/connecting',
    {
      type: 'autogenerated',
      dirName: 'api/endpoints',
    }
  ]
};

module.exports = sidebars;
