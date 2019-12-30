import React from 'react';

const loading = <svg viewBox="0 0 51 50">
  <rect className="fill-current text-gray-200" y="0" width="13" height="50">
    <animate attributeName="height" values="50;10;50" begin="0s" dur="1s" repeatCount="indefinite" />
    <animate attributeName="y" values="0;20;0" begin="0s" dur="1s" repeatCount="indefinite" />
  </rect>

  <rect className="fill-current text-gray-500" x="19" y="0" width="13" height="50">
    <animate attributeName="height" values="50;10;50" begin="0.2s" dur="1s" repeatCount="indefinite" />
    <animate attributeName="y" values="0;20;0" begin="0.2s" dur="1s" repeatCount="indefinite" />
  </rect>

  <rect className="fill-current text-gray-800" x="38" y="0" width="13" height="50">
    <animate attributeName="height" values="50;10;50" begin="0.4s" dur="1s" repeatCount="indefinite" />
    <animate attributeName="y" values="0;20;0" begin="0.4s" dur="1s" repeatCount="indefinite" />
  </rect>
</svg>;

export default loading;
